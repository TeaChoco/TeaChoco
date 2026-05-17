//-Path: "TeaChoco-Portfolio/client/src/components/3d/vrm/useAvatar.tsx"
import env from '$/secure/env';
import { VRMPoseLoader } from './Pose';
import { AnimationMixer } from 'three';
import { useVRMAnimator } from './Animation';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { VRM, VRMUtils, VRMLoaderPlugin } from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * @description Return type ของ useAvatar hook
 * @property vrm - Ref ไปยัง VRM instance ที่โหลดแล้ว
 * @property Avatar - React component สำหรับ render VRM model ใน scene
 * @property animator - ตัวควบคุม animation (playIdle, playPose, loadPoseLibrary)
 * @property progress - ความคืบหน้าการโหลด model (0-1)
 * @property isLoading - สถานะกำลังโหลดอยู่หรือไม่
 */
export interface UseAvatar {
    vrm: React.RefObject<VRM | null>;
    Avatar: () => React.ReactNode;
    animator: ReturnType<typeof useVRMAnimator>;
    progress: number;
    isLoading: boolean;
}

/**
 * @description Hook สำหรับโหลดและจัดการ VRM Avatar model
 * - โหลด VRM model จาก path ที่กำหนด
 * - จัดการ animation และ pose
 * - อัปเดต VRM expression ทุกเฟรม
 * @returns {UseAvatar} vrm ref, Avatar component, animator, progress, isLoading
 */
export default function useAvatar(nameFile: string): UseAvatar {
    /** Ref ไปยัง VRM instance ที่โหลดแล้ว */
    const vrm = useRef<VRM>(null);
    /** ความคืบหน้าการโหลด model (0-1) */
    const [progress, setProgress] = useState(0);
    /** สถานะกำลังโหลดอยู่หรือไม่ */
    const [isLoading, setIsLoading] = useState(true);
    /** AnimationMixer สำหรับเล่น animation clip บน VRM scene */
    const mixerRef = useRef<AnimationMixer | null>(null);
    /** Key สำหรับบังคับ re-render เมื่อ VRM instance เปลี่ยน (ref เปลี่ยนค่าไม่ trigger re-render) */
    const [vrmKey, setVrmKey] = useState(0);

    /** ระบบควบคุม animation/pose ของ VRM */
    const animator = useVRMAnimator(vrm);

    /** โหลด VRM model และ animation เริ่มต้น (รันครั้งเดียวตอน mount) */
    useEffect(() => {
        /** Flag ป้องกัน state update หลัง unmount */
        let mounted = true;

        /**
         * @description โหลด VRM model จาก URL
         * - สร้าง GLTFLoader พร้อม VRMLoaderPlugin
         * - จำลอง progress bar ระหว่างรอโหลด
         * - ทำความสะอาด mesh (ลบ vertices/skeletons ที่ไม่จำเป็น)
         * - สร้าง AnimationMixer และโหลด animation เริ่มต้น
         */
        const loadModel = async () => {
            try {
                setProgress(0);
                setIsLoading(true);
                vrm.current = null;
                mixerRef.current = null;
                /** GLTFLoader ที่ลงทะเบียน VRMLoaderPlugin สำหรับอ่าน VRM format */
                const loader = new GLTFLoader();
                loader.register((parser) => new VRMLoaderPlugin(parser));

                /** URL ของ VRM model file */
                const url = `${env.BASE}models/${nameFile}.vrm`;

                loader.load(
                    url,
                    /** Callback เมื่อโหลดสำเร็จ: ทำความสะอาด model, ตั้งค่า, โหลด animation */
                    async (gltf) => {
                        if (!mounted) return;

                        console.log('gltf', gltf);

                        if (gltf && gltf.userData.vrm) {
                            /** VRM instance ที่แยกออกมาจาก gltf userData */
                            const vrmInstance = gltf.userData.vrm as VRM;

                            /** ลบ vertices ที่ไม่จำเป็นออกจาก scene (ลด memory) */
                            VRMUtils.removeUnnecessaryVertices(gltf.scene);
                            /** รวม skeleton ที่ซ้ำซ้อน (ลด draw calls) */
                            VRMUtils.combineSkeletons(gltf.scene);

                            /** ปิด frustum culling ทุก object เพื่อให้ VRM แสดงผลถูกต้องเสมอ */
                            vrmInstance.scene.traverse((obj) => {
                                // obj.castShadow = true;
                                // obj.receiveShadow = true;
                                obj.frustumCulled = false;
                            });
                            /** เก็บ VRM instance ไว้ใน ref และบังคับ re-render */
                            vrm.current = vrmInstance;
                            setVrmKey((prev) => prev + 1);

                            /** สร้าง AnimationMixer สำหรับเล่น animation clip */
                            mixerRef.current = new AnimationMixer(vrmInstance.scene);

                            await loadInitialAnimations(vrmInstance);
                        }
                    },
                    /** Callback รายงานความคืบหน้าโหลดจริงจาก network */
                    (xhr) => {
                        if (mounted && xhr.total > 0) setProgress(xhr.loaded / xhr.total);
                    },
                    /** Callback เมื่อโหลดล้มเหลว */
                    (error) => {
                        if (!mounted) return;
                        console.error('Failed to load VRM model:', error);
                        setIsLoading(false);
                    },
                );
            } catch (err) {
                if (mounted) {
                    console.error('Error loading avatar:', err);
                    setIsLoading(false);
                }
            }
        };

        /**
         * @description โหลด pose library และ animation เริ่มต้น
         * - โหลด pose จาก JSON file
         * - ใช้ pose เริ่มต้น (A-shape) บน VRM
         * - เริ่มเล่น idle animation
         * @param vrmInstance - VRM instance ที่โหลดแล้ว
         */
        const loadInitialAnimations = async (vrmInstance: VRM) => {
            try {
                /** URL ของ pose library JSON file */
                const poseUrl = `${env.BASE}pose/A-shape.json`;
                /** โหลด pose library เข้าสู่ระบบ animator */
                const poseLibrary = await animator.loadPoseLibrary(poseUrl);

                console.log(poseLibrary);

                /** ใช้ pose เริ่มต้น (A-shape) กับ VRM model */
                VRMPoseLoader.applyPose(vrmInstance, poseLibrary);

                /** เริ่มเล่น idle animation (หายใจ/กระพริบตา) */
                animator.playIdle();
            } catch (error) {
                console.error('Failed to load animations:', error);
            }
        };

        loadModel();

        return () => {
            mounted = false;
            vrm.current = null;
        };
    }, [nameFile]);

    /** อัปเดต VRM expression/lookAt ทุกเฟรม (จำเป็นสำหรับ blink, lipSync, lookAt) */
    useFrame((_state, delta) => {
        if (!vrm.current) return;
        vrm.current.update(delta);
    });

    /**
     * @description React component ที่ render VRM scene เป็น primitive object
     * - แสดงผลเมื่อ VRM โหลดเสร็จแล้วเท่านั้น
     * - วางไว้ที่ตำแหน่ง origin (0,0,0)
     */
    const Avatar = () =>
        vrm.current ? (
            <primitive key={vrmKey} object={vrm.current.scene} position={[0, 0, 0]} />
        ) : null;

    return {
        vrm,
        Avatar,
        animator,
        progress,
        isLoading,
    };
}

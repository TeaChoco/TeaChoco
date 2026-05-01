//-Path: "TeaChoco-Portfolio/client/src/components/3d/vrm/useAvatar.tsx"
import { VRMPoseLoader } from './Pose';
import { AnimationMixer } from 'three';
import { useVRMAnimator } from './Animation';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { VRM, VRMUtils, VRMLoaderPlugin } from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export interface UseAvatar {
    vrm: React.RefObject<VRM | null>;
    Avatar: () => React.ReactNode;
    isLoading: boolean;
    progress: number;
    animator: ReturnType<typeof useVRMAnimator>;
}

export default function useAvatar(): UseAvatar {
    const vrm = useRef<VRM>(null);
    // ระบบ animation
    const animator = useVRMAnimator(vrm);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const mixerRef = useRef<AnimationMixer | null>(null); // เก็บ Animation Mixer

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    useEffect(() => {
        let mounted = true;

        const loadModel = async () => {
            try {
                setProgress(0);
                setIsLoading(true);

                // Simulate progress for better UX
                const progressInterval = setInterval(() => {
                    if (mounted && progress < 0.9)
                        setProgress((prev) => Math.min(prev + 0.05, 0.9));
                }, 100);

                const url = `${import.meta.env.BASE_URL}models/TeaChoco.vrm`;

                loader.load(
                    url,
                    async (gltf) => {
                        if (!mounted) return;

                        clearInterval(progressInterval);
                        setProgress(1);
                        console.log(gltf);

                        if (gltf && gltf.userData.vrm) {
                            const vrmInstance = gltf.userData.vrm as VRM;

                            VRMUtils.removeUnnecessaryVertices(gltf.scene);
                            VRMUtils.combineSkeletons(gltf.scene);

                            vrmInstance.scene.traverse((obj) => {
                                obj.castShadow = true;
                                obj.receiveShadow = true;
                                obj.frustumCulled = false;
                            });
                            vrm.current = vrmInstance;

                            mixerRef.current = new AnimationMixer(
                                vrmInstance.scene,
                            );

                            // โหลด animation เริ่มต้น
                            await loadInitialAnimations(vrmInstance);
                        }
                    },
                    (xhr) => {
                        if (mounted && xhr.total > 0)
                            setProgress(xhr.loaded / xhr.total);
                    },
                    (error) => {
                        if (!mounted) return;
                        console.error('Failed to load VRM model:', error);
                        setIsLoading(false);
                        clearInterval(progressInterval);
                    },
                );

                return () => clearInterval(progressInterval);
            } catch (err) {
                if (mounted) {
                    console.error('Error loading avatar:', err);
                    setIsLoading(false);
                }
            }
        };

        const loadInitialAnimations = async (vrmInstance: VRM) => {
            // ตัวอย่าง: โหลด pose library
            try {
                const poseUrl = `${import.meta.env.BASE_URL}pose/A-shape.json`;
                const poseLibrary = await animator.loadPoseLibrary(poseUrl);

                console.log(poseLibrary);

                // ใช้ pose เริ่มต้น
                VRMPoseLoader.applyPose(vrmInstance, poseLibrary);

                // เริ่ม idle animation
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
    }, []);

    useFrame((_state, delta) => {
        if (!vrm.current) return;
        vrm.current.update(delta);
    });

    const Avatar = () => {
        return vrm.current ? (
            <primitive object={vrm.current.scene} position={[0, 0, 0]} />
        ) : null;
    };

    return {
        vrm,
        Avatar,
        progress,
        isLoading,
        animator,
    };
}

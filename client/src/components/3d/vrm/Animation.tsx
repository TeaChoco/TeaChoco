//-Path: "TeaChoco-Portfolio/client/src/components/3d/vrm/Animation.tsx"
import { VRM } from '@pixiv/three-vrm';
import { useRef, useState } from 'react';
import { VRMPoseLoader, type VRMPoseData } from './Pose';

interface AnimationClip {
    name: string;
    poses: Array<{
        pose: any; // JSON pose data
        duration: number; // milliseconds
    }>;
    loop: boolean;
}

export function useVRMAnimator(vrmRef: React.RefObject<VRM | null>) {
    const [currentAnimation, setCurrentAnimation] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const poseQueueRef = useRef<Array<AnimationClip>>([]);
    const currentTimeRef = useRef<number>(0);
    const currentPoseIndexRef = useRef<number>(0);

    /**
     * โหลด animation sequence จาก JSON
     */
    const loadAnimation = async (name: string, sequence: any[]) => {
        const clip: AnimationClip = {
            name,
            poses: sequence.map((poseData, index) => ({
                pose: poseData,
                duration: index === sequence.length - 1 ? 1000 : 500, // ตั้งค่า duration
            })),
            loop: false,
        };

        poseQueueRef.current.push(clip);

        if (!isPlaying) {
            playNextAnimation();
        }
    };

    /**
     * เล่น pose เดียว
     */
    const playPose = async (poseData: any, duration: number = 1000) => {
        if (!vrmRef.current) return;

        setIsPlaying(true);
        await VRMPoseLoader.interpolatePose(vrmRef.current, poseData, duration);
        setIsPlaying(false);
        playNextAnimation();
    };

    /**
     * เล่น animation sequence ต่อไป
     */
    const playNextAnimation = () => {
        if (poseQueueRef.current.length === 0) {
            setIsPlaying(false);
            return;
        }

        const clip = poseQueueRef.current[0];
        setCurrentAnimation(clip.name);
        playAnimationClip(clip);
    };

    /**
     * เล่น animation clip ทั้งหมด
     */
    const playAnimationClip = async (clip: AnimationClip) => {
        setIsPlaying(true);
        currentPoseIndexRef.current = 0;
        currentTimeRef.current = 0;

        for (let i = 0; i < clip.poses.length; i++) {
            if (!vrmRef.current) break;

            const pose = clip.poses[i];
            await VRMPoseLoader.interpolatePose(vrmRef.current, pose.pose, pose.duration);
            currentPoseIndexRef.current = i;
        }

        // Loop ถ้าเป็น animation loop
        if (clip.loop) {
            poseQueueRef.current.unshift(clip); // ใส่กลับไปในคิว
        } else {
            poseQueueRef.current.shift(); // ลบออกจากคิว
        }

        setIsPlaying(false);
        playNextAnimation();
    };

    /**
     * โหลด pose library จากไฟล์ JSON
     */
    const loadPoseLibrary = async (libraryUrl: string): Promise<VRMPoseData> => {
        const response = await fetch(libraryUrl);
        const library = await response.json();
        return library;
    };

    // ตัวอย่าง: Idle animation
    const playIdle = () => {
        const idlePoses = [
            // Slight breathing motion
            {
                name: 'idle_1',
                data: {
                    /* ... pose data with slight movement ... */
                },
            },
            {
                name: 'idle_2',
                data: {
                    /* ... return to neutral ... */
                },
            },
        ];

        loadAnimation('idle', idlePoses);
    };

    return {
        playPose,
        loadAnimation,
        playIdle,
        currentAnimation,
        isPlaying,
        loadPoseLibrary,
    };
}

//-Path: "TeaChoco-Portfolio/client/src/components/3d/vrm/Pose.tsx"
import * as THREE from 'three';
import { VRM } from '@pixiv/three-vrm';

export interface BonePoseData {
    position?: [number, number, number];
    rotation?: [number, number, number, number];
}

export interface VRMPoseData {
    name: string;
    pose: Record<string, BonePoseData>;
    expressions: Record<string, number>;
}

export class VRMPoseLoader {
    /**
     * ใช้ pose จาก JSON กับ VRM
     */
    static applyPose(vrm: VRM, poseData: VRMPoseData) {
        if (!vrm.humanoid) return;

        Object.entries(poseData.pose).forEach(([boneName, boneData]) => {
            const boneNode = vrm.humanoid.getNormalizedBoneNode(
                boneName as any,
            );
            if (boneNode) {
                // ตั้งค่า rotation จาก quaternion
                boneNode.quaternion.set(
                    boneData.rotation?.[0] ?? 0,
                    boneData.rotation?.[1] ?? 0,
                    boneData.rotation?.[2] ?? 0,
                    boneData.rotation?.[3] ?? 0,
                );
                // ตั้งค่า position
                boneNode.position.set(
                    boneData.position?.[0] ?? 0,
                    boneData.position?.[1] ?? 0,
                    boneData.position?.[2] ?? 0,
                );
            }
        });

        // อัปเดต VRM หลังเปลี่ยน pose
        vrm.update(0);
    }

    /**
     * ค่อยๆ เปลี่ยน pose แบบ interpolate
     */
    static interpolatePose(
        vrm: VRM,
        targetPose: VRMPoseData,
        duration: number = 1000,
    ): Promise<void> {
        return new Promise((resolve) => {
            if (!vrm.humanoid) {
                resolve();
                return;
            }

            const startTime = performance.now();
            const startRotations: Map<string, THREE.Quaternion> = new Map();

            // เก็บค่าเริ่มต้น
            Object.keys(targetPose.pose).forEach((boneName) => {
                const boneNode = vrm.humanoid!.getNormalizedBoneNode(
                    boneName as any,
                );
                if (boneNode) {
                    startRotations.set(boneName, boneNode.quaternion.clone());
                }
            });

            const targetRotations: Map<string, THREE.Quaternion> = new Map();
            Object.entries(targetPose.pose).forEach(([boneName, boneData]) => {
                targetRotations.set(
                    boneName,
                    new THREE.Quaternion(
                        boneData.rotation?.[0] ?? 0,
                        boneData.rotation?.[1] ?? 0,
                        boneData.rotation?.[2] ?? 0,
                        boneData.rotation?.[3] ?? 0,
                    ),
                );
            });

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = this.easeInOutCubic(progress);

                // Interpolate ทุกกระดูก
                startRotations.forEach((startQuat, boneName) => {
                    const targetQuat = targetRotations.get(boneName);
                    const boneNode = vrm.humanoid!.getNormalizedBoneNode(
                        boneName as any,
                    );

                    if (boneNode && targetQuat) {
                        boneNode.quaternion.slerpQuaternions(
                            startQuat,
                            targetQuat,
                            easeProgress,
                        );
                    }
                });

                vrm.update(0);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };

            requestAnimationFrame(animate);
        });
    }

    private static easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

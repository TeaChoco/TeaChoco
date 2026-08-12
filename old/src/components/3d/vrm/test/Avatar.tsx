//-Path: "TeaChoco-Portfolio/client/src/components/3d/Avatar.tsx"
import {
    VRM,
    VRMUtils,
    VRMLoaderPlugin,
    VRMHumanBoneName,
} from '@pixiv/three-vrm';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Avatar() {
    const vrm = useRef<VRM>(null);
    const [waving, setWaving] = useState(true);

    // Load the VRM model
    const gltf = useLoader(
        GLTFLoader,
        `${import.meta.env.BASE_URL}models/TeaChoco.vrm`,
        (loader) => loader.register((parser) => new VRMLoaderPlugin(parser)),
    );

    useEffect(() => {
        if (gltf && gltf.userData.vrm) {
            const vrmInstance = gltf.userData.vrm as VRM;

            // Optimize the VRM
            VRMUtils.removeUnnecessaryVertices(gltf.scene);
            VRMUtils.combineSkeletons(gltf.scene);

            // Disable frustum culling
            vrmInstance.scene.traverse((obj) => (obj.frustumCulled = false));

            // Initial Pose: Arms down (Standing Straight)
            const rightUpperArm = vrmInstance.humanoid.getNormalizedBoneNode(
                VRMHumanBoneName.RightUpperArm,
            );
            const leftUpperArm = vrmInstance.humanoid.getNormalizedBoneNode(
                VRMHumanBoneName.LeftUpperArm,
            );

            if (rightUpperArm) rightUpperArm.rotation.z = -Math.PI / 3; // ~60 degrees down

            if (leftUpperArm) leftUpperArm.rotation.z = Math.PI / 3;

            vrm.current = vrmInstance;

            // Stop waving after 2.5 seconds
            setTimeout(() => setWaving(false), 2500);
        }
    }, [gltf]);

    useFrame((state, delta) => {
        if (vrm.current) {
            // Look At Cursor
            if (vrm.current.lookAt) {
                // Convert mouse position (-1 to 1) to world coordinates roughly
                // LookAt target is usually a Vector3
                // We can use a simple target object or update the lookAt applier directly if supported,
                // but standard VRM usage often involves updating a target object position.
                // Here we'll simulate a target in front of the avatar.
                const target = new THREE.Vector3(
                    state.pointer.x * 2, // Scale X
                    state.pointer.y * 2 + 1.5, // Scale Y + Offset for head height
                    10, // Z distance (camera is ~1.5, we want target "at" camera or behind it)
                );
                vrm.current.lookAt.lookAt(target);
            }

            // Wave Animation
            if (waving) {
                const rightLowerArm =
                    vrm.current.humanoid.getNormalizedBoneNode(
                        VRMHumanBoneName.RightLowerArm,
                    );
                const rightUpperArm =
                    vrm.current.humanoid.getNormalizedBoneNode(
                        VRMHumanBoneName.RightUpperArm,
                    );

                if (rightLowerArm && rightUpperArm) {
                    const time = state.clock.elapsedTime;
                    // Raise arm
                    rightUpperArm.rotation.z =
                        -Math.PI / 2 + Math.sin(time * 5) * 0.1;
                    rightUpperArm.rotation.x = Math.PI / 4;
                    // Wave forearm
                    rightLowerArm.rotation.z = -Math.sin(time * 10) * 0.5 - 0.5;
                }
            } else {
                // Return arm to side smoothly (simple interpolation could be added here,
                // but for now we rely on the initial pose set in useEffect or just let it snap back if we updated it every frame.
                // Since we only touch it during 'waving', we should reset it once when waving stops.
                // However, doing it inside useFrame continuously ensures it stays down if physics moves it.
                // For simplicity, let's just re-enforce the standing pose for the right arm if not waving.
                const rightUpperArm =
                    vrm.current.humanoid.getNormalizedBoneNode(
                        VRMHumanBoneName.RightUpperArm,
                    );
                if (rightUpperArm) {
                    // Lerp back to standing
                    rightUpperArm.rotation.z = THREE.MathUtils.lerp(
                        rightUpperArm.rotation.z,
                        -Math.PI / 3,
                        delta * 5,
                    );
                    rightUpperArm.rotation.x = THREE.MathUtils.lerp(
                        rightUpperArm.rotation.x,
                        0,
                        delta * 5,
                    );
                }
                const rightLowerArm =
                    vrm.current.humanoid.getNormalizedBoneNode(
                        VRMHumanBoneName.RightLowerArm,
                    );
                if (rightLowerArm) {
                    rightLowerArm.rotation.z = THREE.MathUtils.lerp(
                        rightLowerArm.rotation.z,
                        0,
                        delta * 5,
                    );
                }
            }

            // Update physics/expressions
            vrm.current.update(delta);
        }
    });

    if (!vrm.current) return null;

    return (
        <primitive
            object={vrm.current.scene}
            position={[0, 0, 0]} // Center
            rotation={[0, Math.PI, 0]} // Face forward
        />
    );
}

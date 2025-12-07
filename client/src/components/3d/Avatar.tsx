//-Path: "TeaChoco-Portfolio/client/src/components/3d/Avatar.tsx"
import { useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Avatar() {
    const [vrm, setVrm] = useState<any>(null);

    // Load the VRM model
    // Note: We assume the model is at /models/Hu Tao.vrm (Capitalized)
    // If it fails, the Suspense boundary in Scene will handle it (or it will just error in console)
    const gltf = useLoader(
        GLTFLoader,
        `${import.meta.env.BASE_URL}models/TeaChoco.vrm`,
        (loader) => {
            loader.register((parser) => {
                return new VRMLoaderPlugin(parser);
            });
        },
    );

    useEffect(() => {
        if (gltf && gltf.userData.vrm) {
            const vrmInstance = gltf.userData.vrm;

            // Optimize the VRM
            VRMUtils.removeUnnecessaryVertices(gltf.scene);
            VRMUtils.combineSkeletons(gltf.scene);

            // Disable frustum culling to prevent flickering
            vrmInstance.scene.traverse((obj: any) => {
                obj.frustumCulled = false;
            });

            // Rotate 180 deg if needed, but usually VRM is +Z facing
            // vrmInstance.scene.rotation.y = Math.PI;

            setVrm(vrmInstance);
        }
    }, [gltf]);

    useFrame((state, delta) => {
        if (vrm) {
            // Update physics/expressions
            vrm.update(delta);
        }
    });

    if (!vrm) return null;

    return (
        <primitive
            object={vrm.scene}
            position={[0, 0.5, -2]}
            rotation={[0, Math.PI, 0]}
        />
    ); // Adjust vertical position
}

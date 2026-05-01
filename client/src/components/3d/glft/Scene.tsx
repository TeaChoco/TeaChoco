//-Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
// -Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
import { useEffect, useRef, useState } from 'react';
import useAvatar from './useAvatar';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
    const { gltf, Avatar } = useAvatar();
    const meshRef = useRef<THREE.Mesh>(null);
    const [morphTargetDictionary, setMorphTargetDictionary] = useState<{
        [key: string]: number;
    }>({});
    const [morphTargetInfluences, setMorphTargetInfluences] = useState<
        number[]
    >([]);

    useEffect(() => {
        console.log(gltf);
        const scene = gltf.scene;
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                // meshRef.current = child;
                // console.log(child);
                // // บันทึก morphTargetDictionary
                // const dict: { [key: string]: number } = {};
                // for (const [key, index] of Object.entries(
                //     child.morphTargetDictionary,
                // )) {
                //     dict[key] = index;
                // }
                // setMorphTargetDictionary(dict);

                // เริ่มต้นค่า influences
                console.log(
                    child,
                    child.morphTargetInfluences,
                    child.morphTargetDictionary,
                );

                // const influences = new Array(
                //     child.morphTargetInfluences?.length || 0,
                // ).fill(0);
                // setMorphTargetInfluences(influences);
            }
        });
    }, [gltf]);

    useEffect(() => {
        // console.log(meshRef.current?.morphTargetDictionary);
        // console.log(morphTargetDictionary);
    }, [meshRef, morphTargetDictionary]);

    // ฟังก์ชันควบคุม Shape Key
    const setMorphTarget = (name: string, value: number) => {
        if (!meshRef.current || !meshRef.current.morphTargetDictionary) return;

        const index = morphTargetDictionary[name];
        if (index !== undefined && meshRef.current.morphTargetInfluences) {
            const newInfluences = [...morphTargetInfluences];
            newInfluences[index] = THREE.MathUtils.clamp(value, 0, 1);
            setMorphTargetInfluences(newInfluences);
            meshRef.current.morphTargetInfluences[index] = newInfluences[index];
        }
    };

    useFrame((state) => {
        state.camera.position.lerp({ x: 0, y: 1.4, z: 0.5 }, 0.05);
        state.camera.lookAt(0, 1.2, 0);
    });

    return (
        <>
            <Environment preset="apartment" />
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                intensity={1.5}
                position={[1, 2, 3]}
                shadow-mapSize={1024}
            />
            <group position={[0, 0, 0]} castShadow receiveShadow>
                <Avatar />
            </group>
        </>
    );
}

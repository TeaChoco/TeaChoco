// -Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
import { useEffect } from 'react';
import useAvatar from './useAvatar';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

export default function Scene() {
    const { vrm, Avatar, animator, isLoading } = useAvatar();

    useEffect(() => {
        console.log(vrm);
    }, [vrm]);

    useEffect(() => {
        if (isLoading) return;
        animator.playPose('A-shape', 0.5);
    }, [isLoading, animator]);

    useFrame((state) => {
        state.camera.position.lerp({ x: 0, y: 0.4, z: 0.6 }, 0.05);
        state.camera.lookAt(0, 0.35, 0);
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

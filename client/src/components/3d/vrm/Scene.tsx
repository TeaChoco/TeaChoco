// -Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
import { useEffect } from 'react';
import useAvatar from './useAvatar';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

export default function Scene() {
    const { name } = useControls({
        name: {
            value: 'Hitori Gotoh (Bocchi the Rock!)',
            options: ['Hitori Gotoh (Bocchi the Rock!)', 'TeaChoco'],
        },
    });
    const { vrm, progress, animator, isLoading, Avatar } = useAvatar(name);

    useEffect(() => {
        console.log('vrm', vrm);
    }, [vrm]);

    useEffect(() => {
        console.log('progress', progress);
    }, [progress]);

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
            <ambientLight intensity={0.6} />
            <directionalLight intensity={1.2} position={[1, 2, 3]} />
            <directionalLight intensity={0.4} position={[-1, 1, -2]} />
            <group position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
                <Avatar />
            </group>
        </>
    );
}

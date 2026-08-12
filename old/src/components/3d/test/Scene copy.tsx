// -Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
import { useRef } from 'react';
import useAvatar from '../glft/useAvatar';
import { Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Scene() {
    const shadow = useRef(0);
    const { Avatar, isLoading } = useAvatar();

    useFrame((_state, delta) => {
        if (isLoading) return;
        shadow.current = Math.min(shadow.current + delta, 1);
    });

    return (
        <>
            {/* <Environment preset="apartment" />
            <directionalLight
                castShadow
                intensity={1.5}
                position={[1, 2, 3]}
                shadow-mapSize={1024}
            />
            <ambientLight intensity={0.5} /> */}

            <group position={[0, 0, 0]} castShadow receiveShadow>
                <Avatar />
            </group>

            {/* <ContactShadows
                opacity={0.5}
                scale={10}
                blur={2}
                far={2}
                resolution={256}
                color="#000000"
            /> */}
        </>
    );
}

// -Path: "TeaChoco-Portfolio/client/src/components/3d/Screen.tsx"
import Scene from './vrm/Scene';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const isLowEnd = () => {
    const cores = navigator.hardwareConcurrency;
    return cores <= 4;
};

export default function Screen() {
    const low = isLowEnd();

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                <Canvas shadows gl={{ powerPreference: 'high-performance', antialias: !low }}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </Suspense>
        </div>
    );
}

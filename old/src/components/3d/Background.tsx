//-Path: "TeaChoco-Portfolio/client/src/components/3d/Background.tsx"
import Scene from './vrm/Scene';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-bg-light dark:bg-bg-dark transition-colors duration-200">
            <Canvas shadows>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

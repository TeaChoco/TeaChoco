// -Path: 'TeaChoco-Portfolio/client/app/components/3d/Screen.tsx'
import Scene from './vrm/Scene';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';

/** Detects devices with few CPU cores to drop antialiasing. */
const isLowEnd = () => {
    const cores = navigator.hardwareConcurrency;
    return cores <= 4;
};

/**
 * Mounts the WebGL scene behind the page. When the user asked for reduced
 * motion the canvas renders a single frame instead of animating forever.
 *
 * @returns The fixed canvas wrapper element.
 */
export default function Screen() {
    const low = isLowEnd();
    /** Mirrors the OS `prefers-reduced-motion` setting. */
    const reducedMotion = useReducedMotion();

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                <Canvas
                    shadows
                    frameloop={reducedMotion ? 'demand' : 'always'}
                    gl={{ powerPreference: 'high-performance', antialias: !low }}
                >
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </Suspense>
        </div>
    );
}

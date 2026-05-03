import * as THREE from 'three';
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

export default function Screen() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    useEffect(() => {
        console.log('Screen component mounted');
        console.log('Is mobile:', isMobile);
        console.log('Device pixel ratio:', window.devicePixelRatio);
        console.log('WebGL support:', !!window.WebGLRenderingContext);
    }, [isMobile]);

    // Test with simple Three.js Canvas
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Canvas>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            </Canvas>
        </div>
    );
}

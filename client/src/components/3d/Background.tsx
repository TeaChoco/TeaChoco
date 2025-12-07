//-Path: "TeaChoco-Portfolio/client/src/components/3d/Scene.tsx"
import Avatar from './Avatar';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-bg-light dark:bg-bg-dark transition-colors duration-300">
            <Canvas camera={{ position: [0, 1.4, 1.5], fov: 40 }} shadows>
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <directionalLight
                        position={[1, 2, 3]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize={1024}
                    />
                    <ambientLight intensity={0.5} />

                    <group position={[0, 0, 0]}>{/* <Avatar /> */}</group>

                    <ContactShadows
                        opacity={0.5}
                        scale={10}
                        blur={2}
                        far={2}
                        resolution={256}
                        color="#000000"
                    />

                    {/* Restricted controls */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        target={[0, 1.3, 0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

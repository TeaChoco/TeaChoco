//-Path: "TeaChoco-Portfolio/client/src/components/3d/useAvatar.tsx"
import * as THREE from 'three';
import { useState, useEffect } from 'react';
import {
    type GLTF,
    GLTFLoader,
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader, type ObjectMap } from '@react-three/fiber';

export interface UseAvatar {
    gltf: GLTF & ObjectMap;
    Avatar: () => React.ReactNode;
    isLoading: boolean;
    progress: number;
}

export default function useAvatar(): UseAvatar {
    const url = `${import.meta.env.BASE_URL}models/TeaChoco.glb`;

    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // ใช้ useLoader เพื่อโหลด GLB
    const gltf = useLoader(GLTFLoader, url, (loader) => {
        // ตั้งค่า progress callback
        loader.manager.onProgress = (_url, itemsLoaded, itemsTotal) => {
            const progress = itemsLoaded / itemsTotal;
            setProgress(progress);
            if (progress === 1) setIsLoading(false);
        };
    });

    useEffect(() => {
        if (gltf) {
            gltf.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // ปรับปรุง material ถ้าต้องการ
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.frustumCulled = false;
                }
            });
        }
    }, [gltf]);

    const Avatar = () => {
        if (!gltf) return null;
        return <primitive scale={1} object={gltf.scene} />;
    };

    return { gltf, Avatar, isLoading, progress };
}

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generates points in a sphere shell
function generatePoints(count = 400, radius = 1.8) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = radius * (0.85 + Math.random() * 0.15); // Layered shell thickness

        arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
}

function GlobePoints() {
    const ref = useRef<THREE.Points>(null);
    const positionBuffer = React.useMemo(() => generatePoints(300, 1.8), []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positionBuffer} stride={3}>
                <PointMaterial
                    transparent
                    color="#ab82fc"
                    size={0.06}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function NeuralConnections() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = -state.clock.getElapsedTime() * 0.04;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Outer wireframe torus serving as orbital ring representing AI networks */}
            <mesh>
                <torusGeometry args={[1.5, 0.02, 8, 48]} />
                <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.7, 0.015, 8, 48]} />
                <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.25} />
            </mesh>
            {/* Central core energy sphere */}
            <mesh>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

export default function AIGlobe() {
    return (
        <div className="w-full h-full min-h-[350px] md:min-h-[500px] flex items-center justify-center relative">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <GlobePoints />
                <NeuralConnections />
            </Canvas>
            {/* Glowing neon halo behind the 3D element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
        </div>
    );
}

import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import { useRef, useState, useEffect, memo } from 'react'
import * as THREE from 'three'

function Gyro() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ mouse }) => {
    if (!ref.current) return
    ref.current.rotation.x += (mouse.y * 0.4 - ref.current.rotation.x) * 0.03
    ref.current.rotation.y += (mouse.x * 0.4 - ref.current.rotation.y) * 0.03
  })

  return (
    <Icosahedron args={[3.5, 1]} ref={ref} position={[0, 1.5, 0]}>
      <meshBasicMaterial
        wireframe
        color="#ff7e5f"
        opacity={0.15}
        transparent
      />
    </Icosahedron>
  )
}

interface GyroBackgroundProps {
  onReady?: () => void;
}

function GyroBackground({ onReady }: GyroBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar mobile para desactivar 3D
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Si es mobile, reportar ready inmediatamente
    if (isMobile) onReady?.();
  }, [isMobile, onReady]);

  if (isMobile) return null;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 6] }}
        onCreated={() => onReady?.()}
        dpr={[1, 1.5]} // Limitar pixel ratio
        performance={{ min: 0.5 }} // Permitir degradación de rendimiento
        gl={{ 
          antialias: false, // Desactivar antialiasing
          powerPreference: 'high-performance'
        }}
      >
        <Gyro />
      </Canvas>
    </div>
  )
}

export default memo(GyroBackground);

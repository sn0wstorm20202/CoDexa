import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingBox = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[1, 2]}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.8}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.8}
      floatingRange={[0.5, 1.5]}
    >
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.6}
          emissive="#047857"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      
      <FloatingBox />
      <FloatingSphere position={[-3, 2, -2]} />
      <FloatingSphere position={[3, -2, 1]} />
      <FloatingSphere position={[0, 3, -3]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
      />
    </>
  );
};

export const FloatingElements = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </motion.div>
  );
};
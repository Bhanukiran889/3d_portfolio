import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
  <ambientLight intensity={0.2} color="#78a083" />

  <directionalLight
    position={[5, 5, 5]}
    intensity={1}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
  />

  <OrbitControls
    enablePan={false}
    enableZoom={!isTablet}
    maxDistance={20}
    minDistance={5}
    minPolarAngle={Math.PI / 5}
    maxPolarAngle={Math.PI / 2}
  />

  <Suspense fallback={null}>
    <HeroLights />
    <Particles count={100} />
    <group
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <Room />
    </group>
  </Suspense>
</Canvas>

  );
};

export default HeroExperience;

import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#78a083"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.9}
      penumbra={1}
      intensity={60}
      color="#78a083"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#78a083", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#78a083" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#78a083" />
  </>
);

export default HeroLights;

import { Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function GalaxyBackground() {
  const starsRef = useRef()
  
  // Animação de rotação suave
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={starsRef}>
      <Stars
        radius={60}
        depth={30}
        count={5300}
        factor={4}
        saturation={0.5}
        fade
        speed={5}
      />
    </group>
  )
}

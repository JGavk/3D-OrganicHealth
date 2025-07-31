import { useBox } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function Projectile({ origin, direction, onCollision , speed = 10}) {
  const { scene } = useThree();
   const hasCollided = useRef(false);

    const [ref, api] = useBox(() => ({
    mass: 1,
    position: origin,
    args: [0.5, 0.5, 0.5],
    onCollide: (e) => {
        console.log(" Proyectil colisionó");
        if (!hasCollided.current) {
        hasCollided.current = true;
         onCollision(e);
        }
    },
    }));

    useEffect(() => {
    api.velocity.set(
        direction[0] * speed,
        direction[1] * speed,
        direction[2] * speed
    );
    }, [direction, api]);
    return (
    <mesh ref={ref}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default Projectile;
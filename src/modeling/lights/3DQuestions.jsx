
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Projectile from "./Projectile";
import { useEffect, useState, useRef } from "react";
import AnswerBox from "./AnswerBox";


function Question3D({ question, onSelect }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const isAnsweredRef = useRef(false);
  const [projectile, setProjectile] = useState(null);
  useEffect(() => {
    setIsAnswered(false);
    isAnsweredRef.current = false;
    setProjectile(null);
  }, [question._id]);

    const shootProjectile = (targetPosition, optionText) => {
    const origin = [0, 0, 10];
    const dir = [
        targetPosition[0] - origin[0],
        targetPosition[1] - origin[1],
        targetPosition[2] - origin[2],
    ];
    const length = Math.sqrt(dir.reduce((acc, d) => acc + d * d, 0));
    const normalizedDir = dir.map((d) => d / length);

    setProjectile({ origin, direction: normalizedDir, optionText });
    };

    const handleCollision = () => {
    if (isAnsweredRef.current) return;
    isAnsweredRef.current = true;
    setIsAnswered(true);
    onSelect(projectile.optionText);
    setProjectile(null);
    };

const positions = [
  [-4, 0.5, 0.25],
  [4, 0.5, 0.25],
  [-4, -2.5, 0.25],
  [4, -2.5, 0.25],
];

  return (
    <Canvas style={{
    width: "100vw",
    height: "100vh",
    display: "block",
  }} camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />

        <Physics gravity={[0,0,0]}>
            <Text
            position={[0, 3.2, 0]}
            fontSize={0.55}
            color="white"
            anchorX="center"
            anchorY="top"
            maxWidth={12}
            lineHeight={1.3}
            >
            {question.text}
            </Text>
            {question.options.map((opt, idx) => (
            <AnswerBox
                key={idx}
                position={positions[idx]}
                text={opt.text}
                onClick={() => {
                const pos = positions[idx];
                shootProjectile(pos, opt.text);
                }}
            />
            ))}
            {projectile && (
            <Projectile
                origin={projectile.origin}
                direction={projectile.direction}
                onCollision={handleCollision}
            />
            )}
        </Physics>
    </Canvas>
  );
}

export default Question3D;
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function AnswerBox({ position, text, onClick }) {
  const boxWidth = 6;
  const boxHeight = 1.2;

  const [ref] = useBox(() => ({
    position,
    type: "Static", 
    args: [boxWidth, boxHeight, 0.5],
  }));

  return (
    <group ref={ref} onClick={onClick}>
      <mesh>
        <boxGeometry args={[boxWidth, boxHeight, 0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <Text
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.26]}
        maxWidth={boxWidth - 0.5}
        lineHeight={1.2}
      >
        {text}
      </Text>
    </group>
  );
}

export default AnswerBox;
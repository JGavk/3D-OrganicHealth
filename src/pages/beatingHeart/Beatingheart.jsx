import { Outlet } from "react-router";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { Sparkles, SpotLight } from "@react-three/drei";

import * as THREE from "three";
import Heartb from "../../modeling/3d-models/Heartb";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Beatingheart.css";
import Heartf from "../../modeling/3d-models/Heartf";
import FixedText from "../../modeling/lights/FixedText";
import Heartr from "../../modeling/3d-models/Heartr";

function Beatingheart() {
  const [overlayType, setOverlayType] = useState(null);
  return (
    <div className="heart-beating-container" tabIndex={0}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="heart-beating-canvas"
      >
        <ambientLight intensity={0.7} />
        <pointLight
          position={[3, 5, 2]}
          color="#88aaff"
          intensity={1.5}
          distance={50}
          decay={1}
          castShadow
        />

        <Sparkles count={100} scale={6} speed={1.5} />
        
        <DynamicLight />
        <ShadowPlane />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Heartb scale={15} position={[0, 0, 0]} />
        <FixedText>Insuficiencia Cardiaca</FixedText>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="description-text-wrapper">
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>
            La insuficiencia cardíaca es una condición clínica crónica y
            progresiva en la que el corazón no puede bombear sangre de manera
            eficiente para satisfacer las necesidades del cuerpo en cuanto a
            oxígeno y nutrientes. Esto puede ocurrir porque el corazón está
            demasiado débil o demasiado rígido para llenarse y expulsar sangre
            adecuadamente.
          </p>
          <div className="button-wrapper">
            <button onClick={() => setOverlayType("symptoms")}>
              ¿Quieres conocer los sintomas?
            </button>
            <button onClick={() => setOverlayType("treatments")}>
              ¿tratamientos?
            </button>
          </div>
        </div>
      </div>
      {overlayType !== null && (
        <div className="overlay-screen">
          <div className="overlay-content">
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setOverlayType(null);
              }}
            >
              ×
            </button>

            <h2>{overlayType === "symptoms" ? "Síntomas" : "Tratamientos"}</h2>

            <div className="overlay-canvas-container">
              <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 50 }}
                gl={{ antialias: true }}
                className="heart-beating-canvas"
              >
                <ambientLight intensity={0.5} />
                <SpotLight
                  position={[1, 7, 1]}
                  distance={400}
                  angle={25}
                  decay={10}
                  intensidad={4}
                  color="#ffd37b"
                />
                <Sparkles count={100} scale={6} speed={1.5} />
                <ShadowPlane />
                <Stars radius={100} depth={50} count={5000} factor={4} fade />
                <DynamicLight />
                <pointLight
                  position={[3, 5, 2]}
                  color="#88aaff"
                  intensity={2}
                  distance={50}
                  decay={1}
                  castShadow
                />
                {overlayType === "symptoms" ? (
                  <Heartf scale={34} position={[-1, -1, 0]} />
                ) : (
                  <Heartr scale={7} position={[0, 0.5, 0]} />
                )}
              </Canvas>
            </div>

            <div className="instruction-panel">
              {overlayType === "symptoms" ? (
                <>
                  <p>Gira el modelo para ver los latidos y partes afectadas</p>
                  <p>
                    Los síntomas pueden desarrollarse lentamente. A veces, los
                    síntomas de la insuficiencia cardíaca comienzan
                    repentinamente. Algunos síntomas de la insuficiencia
                    cardíaca son los siguientes: Falta de aire durante una
                    actividad o cuando estás acostado. Fatiga y debilidad.
                    Hinchazón en las piernas, en los tobillos y en los pies.
                    Latidos del corazón rápidos o irregulares. Menor capacidad
                    para hacer ejercicio. Sibilancia. Tos que no desaparece o
                    tos con mucosidad de color blanca o rosa y puntos de sangre.
                    Hinchazón del abdomen. Aumento de peso muy rápido debido a
                    la acumulación de líquidos. Náuseas y falta de apetito.
                    Dificultad para concentrarse o menor estado de alerta. Dolor
                    en el pecho si la insuficiencia cardíaca es producto de un
                    ataque cardíaco..
                  </p>
                </>
              ) : (
                <>
                  <p>Gira el modelo para ver las recamaras del corazon</p>
                  <p>
                    🧪 1. Tratamiento farmacológico (medicación) a. Primera
                    línea: IECA (Inhibidores de la ECA): enalapril, lisinopril →
                    reducen la presión y mejoran la sobrevida. ARA II
                    (antagonistas del receptor de angiotensina II): losartán,
                    valsartán → si el paciente no tolera IECA. Betabloqueadores:
                    carvedilol, bisoprolol, metoprolol → reducen la carga del
                    corazón. Antagonistas de aldosterona: espironolactona,
                    eplerenona → mejoran la mortalidad. b. Otros según caso:
                    Diuréticos de asa: furosemida, torasemida → alivian síntomas
                    de congestión (edema, disnea). Ivabradina: para reducir la
                    frecuencia cardiaca si menores a 70 lpm y el paciente no
                    tolera betabloqueadores. SGLT2 inhibidores: dapagliflozina,
                    empagliflozina → incluso en no diabéticos, mejoran función
                    cardíaca. ⚙️ 2. Dispositivos y procedimientos
                    Resincronización cardíaca (TRC): marcapasos biventricular en
                    casos de disincronía ventricular. Desfibrilador implantable
                    (DAI): en pacientes con fracción de eyección reducida y alto
                    riesgo de arritmias. Cirugía de revascularización (bypass) o
                    angioplastia: si hay enfermedad coronaria significativa.
                    Válvulas cardíacas: reemplazo o reparación si hay
                    valvulopatías causantes de IC. Asistencia ventricular o
                    trasplante cardíaco: en casos terminales que no responden a
                    otros tratamientos. 🥗 3. Cambios en el estilo de vida Dieta
                    baja en sodio (sal): para evitar retención de líquidos.
                    Control de peso diario: para detectar retención de líquidos.
                    Restricción de líquidos: en casos de IC avanzada. Ejercicio
                    físico adaptado: mejora la capacidad funcional. Evitar
                    alcohol, tabaco y drogas cardiotóxicas. 🩺 4. Manejo de
                    comorbilidades Hipertensión: control estricto de la presión
                    arterial. Diabetes mellitus: manejo con medicamentos que
                    también protejan el corazón (como SGLT2i). Fibrilación
                    auricular: control de ritmo o frecuencia, anticoagulación si
                    es necesario.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Beatingheart;

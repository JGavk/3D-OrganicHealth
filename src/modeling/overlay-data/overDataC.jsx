import Heartf from '../3d-models/Heartf';
import Heartr from '../3d-models/Heartr';

const overlayInfoCr = [
  {
    id: 'symptoms',
    title: 'Sintomas',
    getModel: () => <Heartf scale={34} position={[-1, -1, 0]} />,
    description: `  Los síntomas pueden desarrollarse lentamente. A veces, los
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
                    ataque cardíaco.`,
  },
  {
    id: 'treatments',
    title: 'Tratamientos',
    getModel: () => <Heartr scale={7} position={[0, 0.5, 0]} />,
    description: `🧪 1. Tratamiento farmacológico (medicación) a. Primera
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
                    baja en sodio (sal), : para evitar retención de líquidos.
                    Control de peso diario: para detectar retención de líquidos.
                    Restricción de líquidos: en casos de IC avanzada. Ejercicio
                    físico adaptado: mejora la capacidad funcional. Evitar
                    alcohol, tabaco y drogas cardiotóxicas. 🩺 4. Manejo de
                    comorbilidades Hipertensión: control estricto de la presión
                    arterial. Diabetes mellitus: manejo con medicamentos que
                    también protejan el corazón (como SGLT2i). Fibrilación
                    auricular: control de ritmo o frecuencia, anticoagulación si
                    es necesario.`,
  },
];
export default overlayInfoCr;
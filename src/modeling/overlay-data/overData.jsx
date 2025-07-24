import HeartSecondAorticModel from '../3d-models/HeartSecondAorticModel';
import StenosisSymptoms from '../3d-models/StenosisSymptoms';

const overlayTreatments = [
  {
    id: 'stenosisSymp',
    title: 'Síntomas',
    getModel: () => <StenosisSymptoms scale={1} position={[0, 0, 0]} />,
    description: `Los sintomás de la Estenosis varian en gran manera y pueden llegar a ser muy graves, algunos de estos son; dolor en el pecho, dificultad para respirar, fatiga, mareos o desmayos, y palpitaciones del corazón. En casos graves,
   puede llevar a insuficiencia cardíaca, manifestándose con hinchazón en tobillos y pies ,`,
  },
  {
    id: 'StenosisOperation',
    title: 'Tratamientos',
    getModel: () => <HeartSecondAorticModel scale={1} position={[0, 0, 0]} />,
    description: `Reemplazo Valvular Aórtico (RVA) convencional: Reemplazar la válvula aórtica estrechada por una nueva válvula que permita
    el flujo normal de sangre desde el ventrículo izquierdo hacia la aorta`,
  },
]
export default overlayTreatments;
import HeartSecondAorticModel from '../3d-models/HeartSecondAorticModel';
import StenosisSymptoms from '../3d-models/StenosisSymptoms';
import StenosisThird from '../3d-models/StenosisThird';

const overlayTreatments = [
  {
    id: 'stenosisSymp',
    title: 'Sintomas',
    getModel: () => <StenosisThird scale={1} position={[0, 0, 0]} />,
    description: `Los sintomás de la Estenosis varian en gran manera y pueden llegar a ser muy graves,
     algunos de estos son; dolor en el pecho, dificultad para respirar, fatiga, mareos o desmayos, y palpitaciones del corazón. En casos graves,
   puede llevar a insuficiencia cardíaca, manifestándose con hinchazón en tobillos y pies ,`,
  },
  {
    id: 'StenosisOperation',
    title: 'Operación',
    getModel: () => <HeartSecondAorticModel scale={1} position={[0, 0, 0]} />,
    description: `Reemplazo Valvular Aórtico (RVA) convencional: Reemplazar la válvula aórtica estrechada por una nueva válvula que permita
    el flujo normal de sangre desde el ventrículo izquierdo hacia la aorta`,
  },
    {
    id: 'KKK',
    title: 'Cuidados',
    getModel: () => <StenosisSymptoms scale={1} position={[0, 0, 0]} />,
    description: `La estenosis aórtica requiere cuidados especiales para manejar los síntomas y prevenir complicaciones. Es fundamental seguir indicaciones como:
     medicamentos, dieta, actividad física, no fumar entre otros cuidados diarios
     `,
  },
];
export default overlayTreatments;
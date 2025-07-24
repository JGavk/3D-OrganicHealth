import HeartSecondAorticModel from '../3d-models/HeartSecondAorticModel';
import StenosisSymptoms from '../3d-models/StenosisSymptoms';
import SymptomsDiseaseModel from '../3d-models/SymptomsIH';
import TreatmentDiseaseModel from '../3d-models/TreatmentIH';

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

  {
    id: 'SymptomsIH',
    title: 'Síntomas',
    getModel: () => <SymptomsDiseaseModel scale={1.5} position={[0, 0, 0]} />,
    description: `Los síntomas de la cardiopatía isquémica incluyen dolor o presión en el pecho, falta de aire, fatiga extrema, dolor en brazos, cuello o mandíbula, mareos, desmayos y sudoración excesiva. `,
  },

  {
    id: 'TreatmentIH',
    title: 'Tratamientos',
    getModel: () => <TreatmentDiseaseModel scale={1.5} position={[0, 0, 0]} />,
    description: `El tratamiento médico incluye anticoagulantes, betabloqueadores y estatinas para mejorar el flujo sanguíneo, reducir el colesterol y prevenir coágulos. En casos graves, se realiza angioplastia, colocación de stents o bypass. También pueden usarse terapias como meditación, acupuntura u omega-3, con supervisión médica.`,
  }
];

export default overlayTreatments;
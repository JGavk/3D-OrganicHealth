import CareDiseaseModel from '../3d-models/CareIH';
import SymptomsDiseaseModel from '../3d-models/SymptomsIH';
import TreatmentDiseaseModel from '../3d-models/TreatmentIH';

const overlayInfo = [

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
  },

  {
    id: 'CareIH',
    title: 'Prevención y Cuidados',
    getModel: () => <CareDiseaseModel scale={1.5} position={[0, 0, 0]} />,
    description: `Para prevenir la cardiopatía isquémica se recomienda una alimentación saludable, ejercicio regular, evitar el tabaco, controlar el estrés, vigilar la presión arterial y el colesterol, y mantener un peso adecuado.`,
  }
];

export default overlayInfo;
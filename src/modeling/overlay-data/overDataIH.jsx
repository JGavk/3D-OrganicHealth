import SymptomsDiseaseModel from '../3d-models/SymptomsDiseaseModel';
import TreatmentDiseaseModel from '../3d-models/treatmentDiseaseModel';

const overlayInfo = [
    {
        title: 'Síntomas',
        getModel: () => <SymptomsDiseaseModel scale={1.5} position={[0, 0, 0]} />,
        description: `Los síntomas de la cardiopatía isquémica incluyen dolor o presión en el pecho, falta de aire, fatiga extrema, dolor en brazos, cuello o mandíbula, mareos, desmayos y sudoración excesiva. `,
    },

    {
        title: 'Tratamientos',
        getModel: () => <TreatmentDiseaseModel scale={1.5} position={[0, 0, 0]} />,
        description: `El tratamiento médico incluye anticoagulantes, betabloqueadores y estatinas para mejorar el flujo sanguíneo, reducir el colesterol y prevenir coágulos. En casos graves, se realiza angioplastia, colocación de stents o bypass. También pueden usarse terapias como meditación, acupuntura u omega-3, con supervisión médica.`,
    }
];

export default overlayInfo;
import { useNavigate } from 'react-router-dom';
import './Problems.css'
function Problems() {
  const navigate = useNavigate();

  const heartModels = [
    {
      id: 'stenosis',
      name: "Estenosis Aórtica",
      description: "Descubre un poco sobre esta enfermedad de la válvula cardíaca",
      image: "/images/aaa.jpg"
    },
    {
      id: 'beating',
      name: "Insuficiencia cardíaca",
      description: "Descubre un poco sobre esta afeccion a nuestro corazon",
      image: "/images/bbb.jpg"
    },
    {
      id: 'ischemic',
      name: "Cardiopatía isquémica",
      description: "Descubre un poco sobre esta afeccion a nuestro corazon",
      image: "/images/ccc.jpg"
    },
    {
      id: 'miocard',
      name: "Infarto agudo del miocardio",
      description: "Descubre un poco sobre esta afeccion a nuestro corazon",
      image: "/images/ddd.jpg"
    }
  ];

  return (
    <div className="problems-container">
      <h1 className="problems-title">Seleccione un Modelo Cardíaco</h1>
      <div className="problems-grid">
        {heartModels.map((model) => (
          <div 
            key={model.id}
            className="problem-card"
            onClick={() => navigate(`/models/${model.id}`)}
          >
            <div className="problem-image-container">
              <img 
                src={model.image} 
                alt={model.name}
                className="problem-image"
              />
              <div className="problem-tooltip">
                <h3>{model.name}</h3>
                <p>{model.description}</p>
                <button 
                  className="view-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/models/${model.id}`);
                  }}
                >
                  Ver Modelo
                </button>
              </div>
            </div>
            <h3 className="problem-name">{model.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
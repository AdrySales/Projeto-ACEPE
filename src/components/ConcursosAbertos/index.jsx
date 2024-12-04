
import './ConcursosAbertos.css';

function ConcursosAbertos() {
  const concursos = [
    {
      title: "Concurso 1",
      salary: "Até R$27 mil",
      image:  `${process.env.PUBLIC_URL}logo1.jpg`,
    },
    {
      title: "Concurso 2",
      salary: "Até R$6.333,54",
      image: `${process.env.PUBLIC_URL}logo2.jpg`,
    },
    {
      title: "Concurso 3",
      salary: "Até R$13 mil",
      image: `${process.env.PUBLIC_URL}logo3.jpg`,
    },
  ];

  return (
    <section className="concursos-abertos">
      <div className="section-header">
        <h2>Concursos Abertos</h2>
        <button className="btn btn-outline">Ver mais</button>
      </div>
      <div className="concursos-grid">
        {concursos.map((concurso, index) => (
          <div key={index} className="concurso-card">
            <div className="concurso-header">
              <img src={concurso.image} alt={concurso.title} />
              <div>
                <h3>{concurso.title}</h3>
                <p>{concurso.salary}</p>
              </div>
            </div>
            <p className="concurso-description">
              Prepare-se com os melhores materiais para conquistar um salário
              de {concurso.salary}
            </p>
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConcursosAbertos;


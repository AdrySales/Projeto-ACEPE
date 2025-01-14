import './ConcursosAbertos.css';

function ConcursosAbertos() {
  const concursos = [
    {
      title: "Concurso 1",
      salary: "Até R$27 mil",
      image:  `${process.env.PUBLIC_URL}/logo1.jpg`,
      featured: true, // Destaque para o Concurso 1
    },
    {
      title: "Concurso 2",
      salary: "Até R$6.333,54",
      image: `${process.env.PUBLIC_URL}/logo2.jpg`,
      featured: false,
    },
    {
      title: "Concurso 3",
      salary: "Até R$13 mil",
      image: `${process.env.PUBLIC_URL}/logo3.jpg`,
      featured: false,
    },
    {
      title: "Concurso 4",
      salary: "Até R$20 mil",
      image: `${process.env.PUBLIC_URL}/logo3.jpg`,
      featured: false,
    },
  ];

  return (
    <section className="concursos-abertos">
      <div className="section-header">
        <h2></h2>
        <button className="btn btn-outline">Ver mais</button>
      </div>
      <div className="content-container">
        <div className="motivational-quote">
          <h3>Concursos abertos,<br></br>conquiste seu futuro!</h3>
          <img src={`${process.env.PUBLIC_URL}/books-logo.png`} alt="simbolo-da-acepe" className="simbolo-da-acepe" />
        </div>
        <div className="concursos-grid">
          {concursos.map((concurso, index) => (
            <div
              key={index}
              className={`concurso-card ${concurso.featured ? 'featured' : ''}`}
            >
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
      </div>
    </section>
  );
}

export default ConcursosAbertos;

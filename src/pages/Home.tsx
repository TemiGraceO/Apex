function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-bp-grid" />
      <div className="hero-glows">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="engineering-field" aria-hidden="true">
        <svg
          className="eng-schematic eng-schematic-1"
          viewBox="0 0 420 260"
          fill="none"
          stroke="currentColor"
        >
          <path d="M18 218H90V166H160V106H255V48H398" />
          <path d="M90 166H42M160 106H112M255 48H208M255 106h74v74h52" />
          <circle cx="90" cy="218" r="8" />
          <circle cx="160" cy="166" r="8" />
          <circle cx="255" cy="106" r="8" />
          <circle cx="398" cy="48" r="8" />
        </svg>

        <svg
          className="eng-schematic eng-schematic-2"
          viewBox="0 0 420 260"
          fill="none"
          stroke="currentColor"
        >
          <path d="M22 40h72v58h92v72h74v52h136" />
          <path d="M94 98h-46M186 170h-64M260 222h-44M260 170h84V92h46" />
          <circle cx="94" cy="40" r="8" />
          <circle cx="186" cy="98" r="8" />
          <circle cx="260" cy="170" r="8" />
          <circle cx="396" cy="222" r="8" />
        </svg>

        <div className="eng-ring eng-ring-1" />
        <div className="eng-ring eng-ring-2" />

        <div className="eng-ruler eng-ruler-1" />
        <div className="eng-ruler eng-ruler-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content mx-auto text-center">
          <h1 className="hero-title">
            Empowering <span className="hero-accent">Excellence</span>
          </h1>

          <h2 className="hero-subtitle">
            Through Training, Innovation &amp; Engineering
          </h2>

          <p className="hero-lead">
            APEX Training Consults Ltd is a professional firm dedicated to
            training, consultancy, engineering support, research,
            sustainability and technical development driven by excellence,
            results and innovation.
          </p>

          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4">
  <a href="#contact" className="btn btn-primary hero-btn hero-btn-primary">
    Partner With Us <i className="bi bi-arrow-right ms-2" />
  </a>
  <a href="#services" className="btn btn-outline-dark hero-btn hero-btn-outline">
    Explore Our Services
  </a>
</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
function Certifications() {
  const certifications = [
    {
      year: "2024",
      organization: "Google Actívate",
      title: "Introducción al Desarrollo Web",
      type: "Curso / Certificación"
    },
    {
      year: "2023",
      organization: "Cisco Networking Academy",
      title: "Redes Empresariales",
      type: "Curso"
    },
    {
      year: "2023",
      organization: "Cisco Networking Academy",
      title: "Seguridad y Automatización",
      type: "Curso"
    },
    {
      year: "2024",
      organization: "Universidad / ITSCe",
      title: "Inglés B1",
      type: "Certificación"
    },
    {
      year: "2024",
      organization: "Formación académica",
      title: "Diplomado en Ciencia de Datos",
      type: "Diplomado"
    }
  ];

  return (
    <section
      id="certificaciones"
      className="certifications-section"
    >

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            05
          </span>

          <div>

            <p className="section-label">
              certifications.json
            </p>

            <h2>
              Certificaciones
            </h2>

          </div>

        </div>


        <p className="certifications-intro">
          Formación complementaria y certificaciones
          obtenidas durante mi preparación profesional.
        </p>


        {/* TERMINAL */}

        <div className="certifications-terminal">

          <div className="certifications-terminal-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span>
              developer@alex: ~/certifications
            </span>

          </div>


          <div className="certifications-terminal-body">

            <div className="certification-command">

              <span className="terminal-green">
                $
              </span>{" "}
              cat certifications.json

            </div>


            <div className="certifications-list">

              {certifications.map(
                (certification, index) => (

                  <article
                    className="certification-item"
                    key={index}
                  >

                    <div className="certification-year">
                      {certification.year}
                    </div>


                    <div className="certification-content">

                      <span className="certification-type">
                        {certification.type}
                      </span>

                      <h3>
                        {certification.title}
                      </h3>

                      <p>
                        {certification.organization}
                      </p>

                    </div>


                    <div className="certification-arrow">
                      ↗
                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Certifications;
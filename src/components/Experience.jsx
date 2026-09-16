function Experience() {
  return (
    <section
      id="experiencia"
      className="experience-section"
    >

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            03
          </span>

          <div>

            <p className="section-label">
              experience.log
            </p>

            <h2>
              Experiencia
            </h2>

          </div>

        </div>


        {/* EXPERIENCE */}

        <div className="experience-item">

          {/* TIMELINE */}

          <div className="experience-timeline">

            <div className="timeline-dot"></div>

            <div className="timeline-line"></div>

          </div>


          {/* CONTENT */}

          <div className="experience-content">

            <div className="experience-date">
              23 ENE 2025 — 23 ENE 2026
            </div>


            <h3>
              Modelo Dual TecNM — UNAM
            </h3>


            <p className="experience-role">
              Desarrollo de solución tecnológica
            </p>


            <div className="experience-organizations">

              <span>
                Instituto Tecnológico Superior de Centla
              </span>

              <span>
                Universidad Nacional Autónoma de México
              </span>

            </div>


            {/* TERMINAL */}

            <div className="experience-terminal">

              <div className="experience-terminal-header">

                <div className="terminal-dots">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <span>
                  experience.log
                </span>

              </div>


              <div className="experience-terminal-body">

                <p>
                  <span className="terminal-green">
                    $
                  </span>{" "}
                  cat experience.log
                </p>


                <div className="experience-log">

                  <p>
                    <span>01</span>
                    Desarrollo de aplicación web para
                    visualización y gestión de datos.
                  </p>

                  <p>
                    <span>02</span>
                    Integración de dispositivos IoT para
                    adquisición y transmisión de datos.
                  </p>

                  <p>
                    <span>03</span>
                    Implementación de soluciones backend
                    para procesamiento y almacenamiento.
                  </p>

                  <p>
                    <span>04</span>
                    Integración de comunicación mediante MQTT.
                  </p>

                  <p>
                    <span>05</span>
                    Análisis y visualización de información
                    para monitoreo estructural.
                  </p>

                  <p>
                    <span>06</span>
                    Trabajo colaborativo en un entorno técnico
                    multidisciplinario.
                  </p>

                </div>

              </div>

            </div>


            {/* TECHNOLOGIES */}

            <div className="experience-technologies">

              <span>Flask</span>
              <span>PostgreSQL</span>
              <span>MQTT</span>
              <span>Docker</span>
              <span>LoRaWAN</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;
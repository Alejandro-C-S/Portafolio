function About() {
  return (
    <section id="sobre-mi" className="about-section">

      <div className="section-container">

        {/* ENCABEZADO */}
        <div className="section-heading">

          <span className="section-number">01</span>

          <div>
            <p className="section-label">about_me.md</p>

            <h2>Sobre mí</h2>
          </div>

        </div>


        {/* CONTENIDO */}
        <div className="about-grid">

          {/* CÓDIGO */}
          <div className="about-code">

            <div className="code-header">
              <span>about_me.md</span>
              <span>UTF-8</span>
            </div>

            <div className="code-body">

              <p>
                <span className="code-number">01</span>
                <span className="code-comment">
                  # Sobre mí
                </span>
              </p>

              <p>
                <span className="code-number">02</span>
                <span>
                  Soy <strong>Alejandro de la Cruz de los Santos</strong>,
                </span>
              </p>

              <p>
                <span className="code-number">03</span>
                <span>
                  Ingeniero en Sistemas Computacionales.
                </span>
              </p>

              <p>
                <span className="code-number">04</span>
              </p>

              <p>
                <span className="code-number">05</span>
                <span>
                  Me interesa desarrollar aplicaciones web
                </span>
              </p>

              <p>
                <span className="code-number">06</span>
                <span>
                  y soluciones backend enfocadas en datos,
                </span>
              </p>

              <p>
                <span className="code-number">07</span>
                <span>
                  automatización y resolución de problemas.
                </span>
              </p>

              <p>
                <span className="code-number">08</span>
              </p>

              <p>
                <span className="code-number">09</span>
                <span>
                  Durante mi formación participé durante un
                </span>
              </p>

              <p>
                <span className="code-number">10</span>
                <span>
                  año en el <strong>Modelo Dual TecNM–UNAM</strong>,
                </span>
              </p>

              <p>
                <span className="code-number">11</span>
                <span>
                  trabajando en soluciones de monitoreo
                </span>
              </p>

              <p>
                <span className="code-number">12</span>
                <span>
                  estructural basadas en tecnologías IoT.
                </span>
              </p>

              <p>
                <span className="code-number">13</span>
              </p>

              <p>
                <span className="code-number">14</span>
                <span className="code-comment">
                  # Actualmente
                </span>
              </p>

              <p>
                <span className="code-number">15</span>
                <span>
                  Estoy enfocado en seguir fortaleciendo mis
                </span>
              </p>

              <p>
                <span className="code-number">16</span>
                <span>
                  habilidades como desarrollador y construir
                </span>
              </p>

              <p>
                <span className="code-number">17</span>
                <span>
                  proyectos que puedan resolver problemas reales.
                </span>
              </p>

            </div>

          </div>


          {/* PROFILE CARD */}
          <div className="profile-card">

            <div className="profile-card-header">

              <span className="terminal-dot"></span>

              <span>profile.json</span>

            </div>


            <div className="profile-card-body">

              <p>
                <span className="json-key">"name"</span>
                <span>: </span>
                <span className="json-value">
                  "Alejandro de la Cruz de los Santos"
                </span>
              </p>

              <p>
                <span className="json-key">"role"</span>
                <span>: </span>
                <span className="json-value">
                  "Software Developer"
                </span>
              </p>

              <p>
                <span className="json-key">"education"</span>
                <span>: </span>
                <span className="json-value">
                  "Ingeniería en Sistemas Computacionales"
                </span>
              </p>

              <p>
                <span className="json-key">"graduation"</span>
                <span>: </span>
                <span className="json-value">
                  2026
                </span>
              </p>

              <p>
                <span className="json-key">"focus"</span>
                <span>: [</span>
              </p>

              <p className="json-indent">
                <span className="json-value">
                  "Backend",
                </span>
              </p>
              <p className="json-indent">
                <span className="json-value">
                  "Frontend",
                </span>
              </p>

              <p className="json-indent">
                <span className="json-value">
                  "Web",
                </span>
              </p>

              <p className="json-indent">
                <span className="json-value">
                  "Data",
                </span>
              </p>

              <p className="json-indent">
                <span className="json-value">
                  "IoT"
                </span>
              </p>

              <p>
                ]
              </p>

              <p>
                <span className="json-key">"status"</span>
                <span>: </span>

                <span className="status-value">
                  "open_to_work"
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
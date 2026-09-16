function Skills() {
  const skillGroups = [
    {
      folder: "backend/",
      title: "Backend",
      description:
        "Desarrollo de aplicaciones y servicios backend.",
      skills: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "APIs REST"
      ]
    },

    {
      folder: "frontend/",
      title: "Frontend",
      description:
        "Construcción de interfaces web y aplicaciones.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap 5",
        "React"
      ]
    },

    {
      folder: "databases/",
      title: "Bases de datos",
      description:
        "Persistencia y manejo de información.",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL"
      ]
    },

    {
      folder: "data/",
      title: "Data",
      description:
        "Análisis y procesamiento de datos.",
      skills: [
        "R",
        "Análisis de datos",
        "Predicciones básicas"
      ]
    },

    {
      folder: "devops/",
      title: "DevOps & herramientas",
      description:
        "Herramientas utilizadas durante el desarrollo.",
      skills: [
        "Docker",
        "Git",
        "MQTT",
        "Visual Studio Code",
        "NetBeans",
        "RStudio"
      ]
    },

    {
      folder: "office/",
      title: "Productividad",
      description:
        "Herramientas de oficina.",
      skills: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint"
      ]
    }
  ];

  return (
    <section
      id="habilidades"
      className="skills-section"
    >

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            04
          </span>

          <div>

            <p className="section-label">
              skills/
            </p>

            <h2>
              Habilidades
            </h2>

          </div>

        </div>


        <p className="skills-intro">
          Tecnologías y herramientas con las que he
          trabajado durante mis proyectos académicos
          y personales.
        </p>


        {/* STACK WINDOW */}

        <div className="skills-window">

          {/* HEADER */}

          <div className="skills-window-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span>
              developer@alex: ~/skills
            </span>

          </div>


          {/* CONTENT */}

          <div className="skills-window-body">

            <div className="skills-command">

              <span className="terminal-green">
                $
              </span>{" "}
              ls -la ./skills

            </div>


            <div className="skills-grid">

              {skillGroups.map((group) => (

                <article
                  className="skill-group"
                  key={group.folder}
                >

                  <div className="skill-group-header">

                    <span className="folder-icon">
                      /
                    </span>

                    <div>

                      <h3>
                        {group.title}
                      </h3>

                      <span className="skill-folder">
                        {group.folder}
                      </span>

                    </div>

                  </div>


                  <p className="skill-description">
                    {group.description}
                  </p>


                  <div className="skill-list">

                    {group.skills.map(
                      (skill) => (

                        <span
                          key={skill}
                          className="skill-item"
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
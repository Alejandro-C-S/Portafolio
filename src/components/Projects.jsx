import { projects } from "../data/projects";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="proyectos" className="projects-section">

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            02
          </span>

          <div>
            <p className="section-label">
              projects/
            </p>

            <h2>
              Proyectos
            </h2>
          </div>

        </div>


        <p className="projects-intro">
          Algunos de los proyectos que he desarrollado
          para practicar, experimentar con nuevas
          tecnologías y resolver problemas reales.
        </p>


        {/* PROYECTO DESTACADO */}

        {featuredProject && (
          <article className="featured-project">

            <div className="featured-project-content">

              <div className="project-top">

                <span className="project-type">
                  Proyecto destacado
                </span>

                <span className="project-number">
                  01
                </span>

              </div>


              <h3>
                {featuredProject.title}
              </h3>


              <p className="project-description">
                {featuredProject.description}
              </p>


              <div className="project-technologies">

                {featuredProject.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>


              <div className="project-links">

                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button project-button-primary"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                )}

                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button project-button-secondary"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

              </div>

            </div>


            <div className="featured-project-image">

              <div className="image-placeholder">

                <img
                  src={featuredProject.image}
                  alt={`Captura de ${featuredProject.title}`}
                />

              </div>

            </div>

          </article>
        )}


        {/* RESTO DE PROYECTOS */}

        <div className="projects-grid">

          {otherProjects.map(
            (project, index) => (

              <article
                className="project-card"
                key={project.id}
              >

                <div className="project-card-image">

                  <img
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                  />

                  {project.confidential && (
                    <div className="confidential-badge">
                      Caso de estudio
                    </div>
                  )}

                </div>


                <div className="project-card-content">

                  <div className="project-card-header">

                    <span className="project-card-number">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <span className="project-card-folder">
                      project/
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>


                  <div className="project-card-links">

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {!project.demo &&
                      !project.github && (
                        <span className="project-unavailable">
                          Próximamente
                        </span>
                      )}

                  </div>

                </div>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Projects;
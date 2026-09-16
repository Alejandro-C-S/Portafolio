const posts = [
  {
    id: 1,
    date: "2026",
    category: "Proyecto",
    title: "Cómo construí TABVIAN",
    description:
      "El proceso detrás de una plataforma web para analizar y procesar archivos Excel de forma sencilla.",
    technologies: [
      "Python",
      "Flask",
      "Pandas"
    ],
    slug: "como-construi-tabvian"
  },

  {
    id: 2,
    date: "2026",
    category: "Backend",
    title: "Construyendo una API REST con Flask",
    description:
      "Conceptos y decisiones que aprendí mientras desarrollaba una API para gestionar información financiera.",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "Docker"
    ],
    slug: "api-rest-flask"
  },

  {
    id: 3,
    date: "2026",
    category: "Data",
    title: "Procesamiento de archivos Excel con Python",
    description:
      "Una mirada al procesamiento de datos y automatización de tareas utilizando Python y Pandas.",
    technologies: [
      "Python",
      "Pandas",
      "Excel"
    ],
    slug: "procesamiento-excel-python"
  }
];


function Blog() {
  return (
    <section
      id="blog"
      className="blog-section"
    >

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            06
          </span>

          <div>

            <p className="section-label">
              blog/
            </p>

            <h2>
              Notas técnicas
            </h2>

          </div>

        </div>


        <p className="blog-intro">
          Lo que voy aprendiendo mientras desarrollo
          proyectos y experimento con nuevas tecnologías.
        </p>


        {/* BLOG WINDOW */}

        <div className="blog-window">

          <div className="blog-window-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span>
              developer@alex: ~/blog
            </span>

          </div>


          <div className="blog-window-body">

            <div className="blog-command">

              <span className="terminal-green">
                $
              </span>{" "}
              ls -la ./posts

            </div>


            <div className="posts-list">

              {posts.map((post) => (

                <article
                  className="post-item"
                  key={post.id}
                >

                  <div className="post-number">
                    {String(post.id).padStart(2, "0")}
                  </div>


                  <div className="post-main">

                    <div className="post-meta">

                      <span>
                        {post.date}
                      </span>

                      <span>
                        /
                      </span>

                      <span>
                        {post.category}
                      </span>

                    </div>


                    <h3>
                      {post.title}
                    </h3>


                    <p>
                      {post.description}
                    </p>


                    <div className="post-technologies">

                      {post.technologies.map(
                        (technology) => (

                          <span key={technology}>
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  <a
                    href={`#${post.slug}`}
                    className="post-arrow"
                    aria-label={`Leer ${post.title}`}
                  >
                    ↗
                  </a>

                </article>

              ))}

            </div>

          </div>

        </div>


        {/* GITHUB */}

        <div className="blog-footer">

          <p>
            Más proyectos y código en GitHub.
          </p>

          <a
            href="https://github.com/Alejandro-C-S"
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Blog;
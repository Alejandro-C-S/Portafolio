import { useState } from "react";

function Home({ onOpenFile }) {
  return (
    <section id="inicio" className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <div className="terminal-command">
            <span>$</span> whoami
          </div>

          <p className="hero-greeting">
            Hola, soy
          </p>

          <h1>
            Alejandro
            <br />
            <span>de la Cruz de los Santos</span>
          </h1>

          <h2>
            Ingeniero en Sistemas Computacionales
          </h2>

          <p className="hero-description">
            Desarrollo aplicaciones web y soluciones backend
            enfocadas en datos, automatización y resolución
            de problemas reales.
          </p>

          <div className="hero-tags">
            <span>Backend</span>
            <span>Web</span>
            <span>Data</span>
            <span>IoT</span>
          </div>

          <div className="hero-buttons">

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenFile("projects")}
            >
              Ver proyectos
              <span>→</span>
            </button>

            <a
            href="/CV_ALEJANDRO.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            >
            Ver CV
            <span>↗</span>
            </a>
          </div>

        </div>


        <div className="hero-terminal">

          <div className="terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>developer@alex:~</p>

          </div>

          <div className="terminal-body">

            <p>
              <span className="terminal-green">$</span>{" "}
              python developer.py
            </p>

            <p className="terminal-muted">
              Initializing developer...
            </p>

            <div className="terminal-skills">

              <p>
                <span>✓</span> Python
              </p>

              <p>
                <span>✓</span> Flask
              </p>

              <p>
                <span>✓</span> PostgreSQL
              </p>

              <p>
                <span>✓</span> Docker
              </p>

              <p>
                <span>✓</span> Git
              </p>

            </div>

            <div className="terminal-status">

              <p>
                status:
                <span> open_to_work</span>
              </p>

              <p>
                location:
                <span> Mexico</span>
              </p>

            </div>

            <div className="terminal-cursor">
              <span>$</span> _
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
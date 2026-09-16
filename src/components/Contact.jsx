import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "alexcruzsantos2003@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("No se pudo copiar el correo:", error);
    }
  };

  return (
    <section
      id="contacto"
      className="contact-section"
    >

      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">

          <span className="section-number">
            07
          </span>

          <div>

            <p className="section-label">
              contact/
            </p>

            <h2>
              ¿Trabajamos juntos?
            </h2>

          </div>

        </div>


        <div className="contact-grid">

          {/* TEXTO */}

          <div className="contact-content">

            <p className="contact-description">
              Estoy abierto a oportunidades donde pueda
              seguir desarrollándome como profesional,
              aprender nuevas tecnologías y aportar mis
              conocimientos en desarrollo de software.
            </p>


            <div className="contact-status">

              <span className="status-indicator"></span>

              <span>
                open_to_work
              </span>

            </div>

          </div>


          {/* TERMINAL */}

          <div className="contact-terminal">

            <div className="contact-terminal-header">

              <div className="terminal-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <span>
                developer@alex:~$ ./contact.sh
              </span>

            </div>


            <div className="contact-terminal-body">

              <p className="contact-command">
                <span className="terminal-green">
                  $
                </span>{" "}
                ./contact.sh
              </p>


              <div className="contact-links">

                {/* EMAIL */}

                <div className="contact-link-row">

                  <span className="contact-link-label">
                    email
                  </span>

                  <a
                    href={`mailto:${email}`}
                    className="contact-link"
                  >
                    {email}
                  </a>

                </div>


                {/* GITHUB */}

                <div className="contact-link-row">

                  <span className="contact-link-label">
                    github
                  </span>

                  <a
                    href="https://github.com/Alejandro-C-S"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    github.com/Alejandro-C-S ↗
                  </a>

                </div>


                {/* LINKEDIN */}

                <div className="contact-link-row">

                  <span className="contact-link-label">
                    linkedin
                  </span>

                  <a
                    href="https://linkedin.com/in/alejandro-de-la-cruz-13365635a"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    LinkedIn ↗
                  </a>

                </div>

              </div>


              {/* STATUS */}

              <div className="contact-terminal-status">

                <span>
                  status:
                </span>

                <strong>
                  ● open_to_work
                </strong>

              </div>


              {/* BUTTONS */}

              <div className="contact-actions">

                <button
                  onClick={copyEmail}
                  className="contact-button contact-button-primary"
                >
                  {copied
                    ? "✓ Copiado"
                    : "Copiar email"}
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

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
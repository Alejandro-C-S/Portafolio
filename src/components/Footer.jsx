function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <span className="footer-prompt">
            ~/alex.dev
          </span>

          <span className="footer-status">
            <span></span>
            online
          </span>

        </div>


        <div className="footer-links">

          <a
            href="https://github.com/Alejandro-C-S"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/alejandro-de-la-cruz-13365635a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="#inicio">
            Volver arriba ↑
          </a>

        </div>


        <div className="footer-bottom">

          <span>
            © {currentYear} Alejandro De la Cruz
          </span>

          <span>
            Built with React
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
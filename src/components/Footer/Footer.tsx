import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <div className="footer-brand">
        ASTRA <span className="neon-text">ARCADE</span>
      </div>

      <div className="footer-copyright">
        © {currentYear} ASTRA ARCADE. ALL RIGHTS RESERVED. INSERT COIN TO CONTINUE.
      </div>
    </footer>
  );
}

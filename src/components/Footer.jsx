import { WhatsApp } from "./WhatsApp";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <WhatsApp />
    <p className="credits">
      Sitio hecho con <i className="fa fa-heart text-danger" /> por{" "}
      <a href="https://github.com/Natalie8a/Natalie8a">Natalie Ochoa</a>
    </p>
  </footer>
);

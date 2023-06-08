import "./footer.css";
import logo from "../../assets/LOGO-B&W.svg";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo en noir et blanc" className="footerimg" />
      <p className="footertext">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

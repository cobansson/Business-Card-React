import "./App.css";
import headerPic from "./engin.jpg";

function Header() {
  return (
    <header>
      <img src={headerPic} className="header-pic" />
    </header>
  );
}

export default Header;
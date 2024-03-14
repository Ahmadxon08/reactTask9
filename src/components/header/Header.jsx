import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link to="/home">
              <span>Logo</span>
            </Link>
          </div>
          <div className="link_items">
            <Link className="link_btn" to="/home">
              Home
            </Link>
            <Link className="link_btn" to="/busnises">
              Business
            </Link>
            <Link className="link_btn" to="/enter">
              Entertainment
            </Link>
            <Link className="link_btn" to="/general">
              General
            </Link>
            <Link className="link_btn" to="/health">
              Health
            </Link>
            <Link className="link_btn" to="/science">
              Science
            </Link>
            <Link className="link_btn" to="/sport">
              Sports
            </Link>
            <Link className="link_btn" to="/tech">
              Technology
            </Link>
          </div>
          <div className="burger_menu">
            <div className="span"></div>
            <div className="span"></div>
            <div className="span"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

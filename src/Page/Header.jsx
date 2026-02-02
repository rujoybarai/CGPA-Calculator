import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " id="nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          EasyWay
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex">
             <a href="" className="nav-link">Home</a>
             <a href="" className="nav-link">About</a>
             <a href="" className="nav-link">More Tools</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header ;

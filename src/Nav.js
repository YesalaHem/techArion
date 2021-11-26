import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Data
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/counter">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/senddata">
            PostData
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

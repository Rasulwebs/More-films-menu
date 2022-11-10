import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./navbar.sass";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
        <h2>
            <Link to="/"><BiCameraMovie /> Wave Films</Link>
        </h2>
        <div className="wrapper">
          <h4>
            <Link to="/stats">Stats Page</Link>
          </h4>
          <form onSubmit={handleSubmit} className="nav-form">
              <input 
                className="nav-input"
                type="text" 
                placeholder="Search for a movie"
                onChange={(e) => setSearch(e.target.value)}
                value={search}/>
              <button type="submit" className="nav-btn">
                  <BiSearchAlt2 />
              </button>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
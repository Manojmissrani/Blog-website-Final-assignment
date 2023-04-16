import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
const Navbar = (props) => {
  const navigate = useNavigate()


  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand w-75" onClick={() => navigate("/")}>Blog Page</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className={"nav-link " + props.home} aria-current="page" onClick={() => navigate("/")}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className={props.page==="Select Category"?"nav-link dropdown-toggle":"nav-link dropdown-toggle active"}  data-bs-toggle="dropdown" aria-expanded="false">
                {props.page}
              </a>
              <ul className="dropdown-menu px-3">
                <li><a className="dropdown-item" onClick={() => navigate("/Web-Development")}>Web Development</a></li>
                <li><a className="dropdown-item" onClick={() => navigate("/App-Development")}>App Development</a></li>
                <li><a className="dropdown-item" onClick={() => navigate("/WordPress")}>WordPress</a></li>
                <li><a className="dropdown-item" onClick={() => navigate("/Freelancing")}>Freelancing</a></li>
              </ul>
            </li>
            <li className="nav-item px-3">
              <a className={"nav-link " + props.about} onClick={() => navigate("/About")} >About</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  )
}

export default Navbar
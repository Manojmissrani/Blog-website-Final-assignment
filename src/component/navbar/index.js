import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className='col-8'>
          <img src="https://www.blogger.com/img/logo_blogger_40px.png" height={50} />
        </div>
        {/* <h2 className="navbar-brand  p-3">Bloger Page</h2> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" onClick={()=>navigate("/Home")}>Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={()=>navigate("/Web-Development")}>Web Development</a></li>
                <li><a className="dropdown-item" onClick={()=>navigate("/App-Development")}>App Development</a></li>
                <li><a className="dropdown-item" onClick={()=>navigate("/WordPress")}>WordPress</a></li>
                <li><a className="dropdown-item" onClick={()=>navigate("/Freelancing")}>Freelancing</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>navigate("/About")} >About</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
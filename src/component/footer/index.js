import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

    return (
        <footer className="text-center text-lg-start bgblue text-muted pt-3 mt-3">
            <section >
                <div className="container text-center text-md-start ">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a className="text-reset pb-3"  onClick={() => navigate("/Web-Development")}>Web Development</a>
                            </p>
                            <p>
                                <a className="text-reset"  onClick={() => navigate("/App-Development")}>App Development</a>
                            </p>
                            <p>
                                <a className="text-reset" onClick={() => navigate("/Freelancing")}>Freelancing</a>
                            </p>
                            <p>
                                <a className="text-reset"  onClick={() => navigate("/WordPress")}>WordPress</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" >
                © 2023 Copyright : blog website
                {/* <a className="text-reset fw-bold">Bloger.com</a> */}
            </div>
        </footer>
    )
}

export default Footer
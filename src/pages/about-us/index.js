import React from 'react'
import { Footer, Navbar } from '../../component'

const Aboutus = () => {
    return (
        <div>
            <Navbar  about="active" page="Select Category"/>
        <header>
            <div className="text-center bg-image-about" >
                <div className="mask" >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h1 className="text-white">About Us</h1>
                    </div>
                </div>
            </div>
        </header>

        <Footer />
    </div>
    )
}



export default Aboutus
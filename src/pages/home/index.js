import React from 'react'
import { Footer, Navbar } from '../../component'
import Aboutus from '../about-us'
import Blog from '../blog'
import "./index.css"

const Home = () => {
    return (
        <div>
            <Navbar  home="active" page="Select Category"/>
            <header>
                <div className="text-center bg-image" >
                    <div className="mask w-100" >
                        <div className="d-flex justify-content-center align-items-center h-100 w-100">
                            <h1 className="text-white">Home</h1>
                        </div>
                    </div>
                </div>
            </header>
            <Blog />
            <Footer />
        </div>
    )
}

export default Home
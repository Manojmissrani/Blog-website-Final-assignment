import React from 'react'
import { Footer, Navbar } from '../../component'
import Aboutus from '../about-us'
import Blog from '../blog'
import "./index.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <header>
                <div class="text-center bg-image" >
                    <div class="mask" >
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <h1 class="text-white">Home</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* <Aboutus /> */}
            <Blog />
            <Footer />
        </div>
    )
}

export default Home
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Aboutus, AppDevelopment,  Freelancing, Home, PostDetails, WebDevelopment, WordPress } from '../../pages'
const RouterNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<Aboutus />} />
                <Route path='/Web-Development' element={<WebDevelopment />} />
                <Route path='/App-Development' element={<AppDevelopment />} />
                <Route path='/WordPress' element={<WordPress />} />
                <Route path='/Freelancing' element={<Freelancing />} />
                <Route path="/Post-Details/:id" element={<PostDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterNavigation
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Aboutus, AppDevelopment, Blogdetails, Freelancing, Home, WebDevelopment, WordPress } from '../../pages'
const RouterNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<Aboutus />} />
                <Route path='/Blog-details/:id' element={<Blogdetails />} />
                <Route path='/About' element={<Aboutus />} />
                <Route path='/Web-Development' element={<WebDevelopment />} />
                <Route path='/App-Development' element={<AppDevelopment />} />
                <Route path='/WordPress' element={<WordPress />} />
                <Route path='/Freelancing' element={<Freelancing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterNavigation
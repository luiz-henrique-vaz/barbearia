import React from "react";
import Home from "./routes/home";
import Product from "./routes/products";
import Contact from "./routes/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {

    return(

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/produtos" element={<Product/>}></Route>
                <Route path="/contatos" element={<Contact/>}></Route>
            </Routes>
        </Router>

    )

}

export default AppRoutes;
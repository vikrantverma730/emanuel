import "./HeroImgStyle.css"
import Introimg from "../assets/op9.jpg"
import { Link } from "react-router-dom"

import React from 'react'

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={Introimg} alt="" />
            </div>

            <div className="content">
                <p>This is Emanual Computer Servicing </p>
                <h1>New York  | New Jersey since 2000</h1>
                <div>
                    <Link to="/Product" className="btn">Product</Link>
                    <Link to="/Contact" className="btn btn-light">Contact</Link>
                </div>

            </div>
        </div>
    )
}

export default HeroImg;
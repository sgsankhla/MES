import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom"


const Header = ({ bg, color ,history}) => {

    console.log(history)
    const getColor = (curr)=>{
        if(history.location.pathname===curr){
            return " #191919"
        }
    }
    return (
        <>
            <header style={{ width: '100%', backgroundColor: bg }}>
                <div className="container" style={{ backgroundColor: bg, textDecorationColor: color }} >
                    <div className="logo">
                        <NavLink className="logo-name" to="/" style={{ color: color }}> Digixion <br /><span style={{ color: color }}>Digital Innovation</span></NavLink>
                    </div>
                    <nav >
                        <ul>
                            <li > <NavLink to="/" style={{ color: color }} >Home</NavLink></li>
                            <li > <NavLink to="/services" style={{ color: color }}>Services</NavLink></li>
                            <li > <NavLink to="/aboutus" style={{ color: color }}>About Us</NavLink></li>
                            <li > <NavLink to="/ContactUs" style={{ color: color }}>Contact Us</NavLink></li>                           
                        </ul>
                    </nav>
                </div>
               
            </header>

        </>
    )
}

export default (Header)


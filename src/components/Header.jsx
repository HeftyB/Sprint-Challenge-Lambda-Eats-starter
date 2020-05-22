import React from 'react'
import { Link } from "react-router-dom"
import HeroImg from "./HeroImg";
import { Navbar } from 'reactstrap'

export default function Header() {
    return (
        <div>
            <h1>TREAT YO SELF PIZZA</h1>
            <Navbar className="nav nav-bar">
                <Link to="/">Home</Link>
                <Link to="/UserInfo">User Info</Link>
                <Link to="/Pizza">Pizza</Link>
                <Link to="/Continue">Continue</Link>
                <Link to="/OrderConf">OrderConf</Link>
            </Navbar>
            <HeroImg/>
        </div>
    )
}

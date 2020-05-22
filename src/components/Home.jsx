import React from 'react'
import { Link } from "react-router-dom";
import { Button, Navbar } from 'reactstrap'
import Specials from "./Specials"

export default function Home() {
    return (
        <div>
            <div className="form-group submit">
                <h3>BUILD YO PIZZA</h3>
                <br/>
                <h4>TREAT YOSELF</h4>
            </div>
            <Specials></Specials>
            <Link to="/UserInfo">
                <Button className="orderNow">ORDER NOW!</Button>
            </Link>
        </div>
    )
}

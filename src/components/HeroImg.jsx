import React from "react";
import heroImg from "../heroImg.jpg";

export default function HeroImg() {
    return (
        <div>
            <img id="heroImg" src={heroImg} alt="HERO IMAGE"/>
        </div>
    )
}

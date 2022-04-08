import React from "react"
import GridImage from "../pics/airbnb-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={GridImage} alt="Photo Grid" className="hero--photo__grid" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}
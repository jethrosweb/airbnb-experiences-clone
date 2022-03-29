import React from "react"
import swimmer from "../images/swimmer.png"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={swimmer} alt="Swimmer photo" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="Airbnb star" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
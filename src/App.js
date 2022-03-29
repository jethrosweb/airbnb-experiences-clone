import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import swimmer from "./images/swimmer.png"

export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Card 
                img={swimmer}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>

    )
}
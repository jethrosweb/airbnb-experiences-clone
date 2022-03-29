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

/* Prop Quiz:
1. What do props help us accomplish? 
A: Makes component reusable and dynamic.

2. How do you pass a prop into a component? 
A: <Component 
        name = ...
        DOB = ... 
    />
Variable names can be anything you'd like. 

3. Can I pass a custom prop (e.g. 'blahblahblah={true}') to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not? 
A: No, becuase the custom prop is not defined in the native language. 

4. How do I recieve props in a component? 
   function Navbar() {
   return (
       <header>
           ...
       </header>
   )
}
A: Add props to paramater of function, then add {props.variablename} into the element. 

5. What data tuype is 'props' when the compnent receives it? 
A: Object.
*/
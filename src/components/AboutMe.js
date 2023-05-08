import React from "react"
import "../style/aboutMe.css"
import img from "../img/TJ.jpg"

const aboutMe = () => {
    return (
        <div className="aboutMe">
            <h1 className="tittle">About Me</h1>
            <h3>My name is Layla Makary and I am a master of Physiotherapy</h3>
            <p> I am a Certified Physyotherapist, and I also attended postgraduate studies in the field of dietetics and reflexology. During my practice, I worked in hospitals, surgeries, sanatoriums and rehabilitation centers, but the greatest fun was working with athletes, including:</p>
            <ul>
                <li>Football Players</li>
                <li>Basketball Players</li>
                <li>Volleyball Players</li>
                <li>Bodybuilders</li>
            </ul>
            <p>Currently, I run a practice where I try to combine knowledge from both rehabilitation and dietetics, which allows me to look at a person more holistically and see many connections.</p>
            <p className="rehab">I have completed the following rehabilitation courses:</p>
            <ul>
                <li>Course 1...</li>
                <li>Course 2...</li>
                <li>Course 3...</li>
                <li>Course 4...</li>
                <li>Course 5...</li>
                <li>Course 6...</li>
                <li>Course 7...</li>
            </ul>
            
            <img src={img} alt="Tomasz Jasik" />

            <h2>I want you to know that you can</h2>
            <h1>GET FREE FROM THE PAIN!</h1>

        </div>
    );
}

export default aboutMe;

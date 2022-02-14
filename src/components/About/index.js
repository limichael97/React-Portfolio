import React from 'react';
import aboutImage from "../../assets/images/aboutme.jpg"

function About() {
    return (
        <section id="about-me" >
            <h2 > About Me</h2>
            <div >
                <div >
                    <img src = {aboutImage} alt ="hiking"/>
                </div>
                <div > 
                    <p> I am currently a Mechanical Design Engineer for Honeywell. I am interested in learning to code.</p>
                </div>
                
            </div>


        </section>
    )
}



export default About;

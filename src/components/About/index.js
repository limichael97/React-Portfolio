import React from 'react';
import aboutImage from "../../assets/images/aboutme.jpg"

function About() {
    return (
        <section id="about-me" className=''>
            <h2 className=' section-title' > About Me</h2>
            <div className='flex-row'>
                <div className='my-2 '>
                    <img src = {aboutImage} alt ="hiking" className='aboutImage'/>
                </div>
                <div className='my-2 '> 
                    <p> I am currently a Mechanical Design Engineer for Honeywell. I am interested in learning to code.</p>
                </div>
                
            </div>
        </section>
    )
}



export default About;

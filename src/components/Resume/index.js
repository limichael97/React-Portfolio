import React from 'react';
import resumePDF from "../../assets/MichaelResume (Oct. 2021).pdf"

function Resume() {
    return (

        <div>
            <div>
                <a href= "../../assets/MichaelResume (Oct. 2021).pdf" download>Download Resume</a>
                {/* <h2>Downloadable Resume</h2> */}
                {/* <iframe src={resumePDF} title="description"></iframe> */}
            </div>
            <h2 className='my-2'>Skills</h2>
            <ul>
                <li>
                    HTML
                </li>
            </ul>
        </div>

        
    ) 
}

export default Resume;

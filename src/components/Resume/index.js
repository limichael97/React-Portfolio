import React from 'react';
import resumePDF from "../../assets/MichaelResume (Oct. 2021).pdf"

function Resume() {
    return (

        <div>
            <h2>Skills</h2>
            <ul>
                <li>
                    HTML
                </li>
            </ul>
            <div>
                <h2>Downloadable Resume</h2>
                <iframe src={resumePDF} title="description"></iframe>

            </div>
        </div>

        
    ) 
}

export default Resume;

import React from 'react';
import resumePDF from '../../assets/MichaelResume (Oct. 2021).pdf'

function Resume() {
    return (

        <div >

            <h2 className='my-2 section-title'>Skills</h2>
            
            <div className='skillLook'>
                <h3>Frontend</h3>
                <ul className='skillLang'> 

                    <li>
                        HTML
                    </li>

                    <li>
                        CSS
                    </li>

                    <li>
                        Javascript
                    </li>

                    <li>
                        Boostrap
                    </li>

                    <li>
                        Handlebars
                    </li>
                </ul>
            </div>

            <div className='skillLook'>
                <h3>Backend Development</h3>
                    <ul className='skillLang'>

                        <li>
                            MERN Stack
                        </li>

                        <li>
                            MongoDB
                        </li>

                        <li>
                            Express
                        </li>

                        <li>
                            React.js
                        </li>

                        <li>
                            Node.js
                        </li>
                        
                        <li>
                            MySQL
                        </li>


                </ul>
            </div>

            <div className='skillLook'>
                <h3>Version Control</h3>
                <ul className='skillLang'>
                    <li>
                        GitHub
                    </li>

                    <li>
                        GitLab
                    </li>
                </ul>
            </div>

            <div className='skillLook'>
                {/* <a href= "../../assets/MichaelResume (Oct. 2021).pdf" className='resumeLink' download>Download Resume</a> */}
                <iframe src={resumePDF} title="description" className='resumeLink'></iframe>
            </div>

            

        </div>

        
    ) 
}

export default Resume;

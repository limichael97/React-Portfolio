import React from "react";
import emailImage from '../../assets/images/email.png'
import linkedinImage from '../../assets/images/linkedin.png'
import githubImage from '../../assets/images/GitHub.png'

function Footer () {
    return(

        <footer>
            <div>
                <a href ="mailto:thisislimichael@gmail.com">
                    <img src ={emailImage} alt = "myemail" className = "medialogo"/>
                </a>
            </div>
    
            <div>
                <a href ="https://www.linkedin.com/in/michaelli97/">
                    <img src ={linkedinImage} alt = "mylinkedin" className = "medialogo"/>
                </a>
            </div>

            <div>
                <a href ="https://github.com/limichael97">
                    <img src ={githubImage} alt = "mylinkedin" className = "medialogo"/>
                </a>
            </div>
            
            <div className="foot">
                &copy; Designed by Michael Li 👨‍💻
            </div>
        </footer>
    )
}

export default Footer
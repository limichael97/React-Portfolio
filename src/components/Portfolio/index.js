import React from 'react';
import weatherImage from "../../assets/images/weather.JPG"
import walknspotImage from "../../assets/images/walknspot.JPG"
import passwordImage from "../../assets/images/password.jpg"
import taskImage from "../../assets/images/task.png"
import stockImage from "../../assets/images/investing.png"
import blogImage from "../../assets/images/techblog.JPG"


function Portfolio () {
    return (
        <section id="projects" class = "section-info">
            <h2 class="section-title2"> Projects</h2>

            <article class ="project-work">
                <div class= "work-box">
                    <a href ="https://limichael97.github.io/Weather-Dashboard/">
                        <img src={weatherImage} alt="weather" class = "image" />
                    </a>
                    <div class = "img-txt">
                        <h3>Weather Dashboard</h3>
                        <p>HTML/CSS/JavaScript/Bootstrap</p>
                        <a href='https://github.com/limichael97/Weather-Dashboard'> Github Repository</a>
                    </div>
                </div>
                <div class= "work-box">
                    <a href= "https://walk-n-spot.herokuapp.com/" >
                        <img src={walknspotImage} alt="walknspot" class="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Walk'n Spot</h3>
                        <p>JavaScript/MySQL/Sequelize/Handlebars/Bootstrap/Express-Sessions/Node.js</p>
                        <a href='https://github.com/limichael97/Walk-n-Spot'> Github Repository</a>
                    </div>
                </div>

                <div class= "work-box">
                    <a href= "https://walk-n-spot.herokuapp.com/" >
                        <img src={blogImage} alt="blog" class="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Tech Blog</h3>
                        <p>JavaScript/MySQL/Sequelize/Handlebars/Express-Sessions/Node.js</p>
                        <a href='https://github.com/limichael97/Tech-Blog'> Github Repository</a>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/Password_Generator/">
                        <img src ={passwordImage} alt ="password" class="image" />
                    </a>
                    <div class = "img-txt">
                        <h3>Password Generator</h3>
                        <p>JavaScript/HTML/CSS</p>
                        <a href='https://github.com/limichael97/Password_Generator'> Github Repository</a>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/taskmaster-pro/">
                        <img src={taskImage} alt="tasks" class ="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Taskmaster Pro</h3>
                        <p>HTML/CSS/JavaScript/Boostrap</p>
                        <a href='https://github.com/limichael97/taskmaster-pro'> Github Repository</a>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/Stockable/">
                        <img src={stockImage} alt= "blog" class="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Stockable</h3>
                        <p>HTML/CSS/JavaScript/Bulma</p>
                        <a href='https://github.com/limichael97/Stockable'> Github Repository</a>
                    </div>
                </div>

            </article>

        </section>
    )
}

export default Portfolio;

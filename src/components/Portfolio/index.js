import React from 'react';
import weather from "../../assets/images/weather.JPG"



function Portfolio () {
    return (
        <section id="projects" class = "section-info">
            <h2 class="section-title2"> Projects</h2>
            <div class= "first-project">
                <a href ="https://limichael97.github.io/Weather-Dashboard/">
                    <img src={weather} alt="weather" class = "image" />
                </a>
                <div class = "img-txt">
                    <h3>Weather Dashboard</h3>
                    <p>HTML/CSS/JavaScript/Bootstrap</p>
                </div>
            </div>
            <article class ="project-work">
                <div class= "work-box">
                    <a href= "https://walk-n-spot.herokuapp.com/" >
                        <img src="./assets/images/walknspot.JPG" alt="walknspot" class="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Walk'n Spot</h3>
                        <p>JavaScript/MySQL/Sequelize/Handlebars/Bootstrap/Express-Sessions/Node.js</p>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/Password_Generator/">
                        <img src ="assets/images/password.jpg" alt ="password" class="image" />
                    </a>
                    <div class = "img-txt">
                        <h3>Password Generator</h3>
                        <p>JavaScript/HTML/CSS</p>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/taskmaster-pro/">
                        <img src="./assets/images/task.png" alt="tasks" class ="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Taskmaster Pro</h3>
                        <p>HTML/CSS/JavaScript/Boostrap</p>
                    </div>
                </div>

                <div class= "work-box">
                    <a href ="https://limichael97.github.io/Stockable/">
                        <img src="assets/images/investing.png" alt= "blog" class="image"/>
                    </a>
                    <div class = "img-txt">
                        <h3>Stockable</h3>
                        <p>HTML/CSS/JavaScript/Bulma</p>
                    </div>
                </div>

            </article>

        </section>
    )
}

export default Portfolio;

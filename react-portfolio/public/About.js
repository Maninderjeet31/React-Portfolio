import React, { useState } from "react";

import './About.css';

const About = () => {

    return (
        <>
            <div className="about">
                <section id="about" class="homeDiv ">
                    <div class="fixed-bg bg-1-1">
                        <div class="about-homeText">
                            <div class="about-intro">
                                <h1 class="title-text">About</h1>
                                <hr />
                                <p class="text">An experienced professional with more than 7+ years as a Full Stack developer. Experience resolving around designing, development, implementation (Front-end development, Application Development, Web Application development) and technical troubleshooting in leading organizations. Proficient in translating technical requirements into business specifications for streamlining existing processes and delivering user-centric solutions.</p>
                            </div>
                            <div class="about-details">
                                <div class="left-details">
                                    <img src="~/react-portfolio/src/asset/images/my1.jpg" />
                                    <img src="../src/assets/images/my1.jpg" />
                                </div>
                                <div class="right-details">
                                    <div class="head-title">
                                        <h3>Designer and Developer</h3>
                                    </div>
                                    <div class="personal-details">
                                        <div class="li-container">
                                            <ul>
                                                <li><b>Phone: </b> +1(514)-659-7171</li>
                                                <li><b>City: </b> Calgary</li>
                                                <li><b>Website: </b> **TBD**</li>
                                                <li><b>E-mail: </b> mani.pabla31@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div class="li-container">
                                            <ul>
                                                <li><b>Birthday: </b> 31 October, 1992</li>
                                                <li><b>Degree: </b> Information Technology </li>
                                                <li><b>Highest Education: </b>Masters</li>
                                                <li><b>Hobbies: </b> Music, Driving, Trekking</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="teamMember-details">
                                        <p class="text">I am a good team player as I believe in helping others and always curious for new information. In my opinion, listening and communication are key characteristics for an examplary team player. Also, are having an optimistic outlook and always encouraging their teammates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>   
        </>  
    );
};

export default About;
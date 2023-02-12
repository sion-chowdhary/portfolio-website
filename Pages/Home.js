import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <div className="about">
                <h2>Hi, My Name is Sion </h2>
                <div className="prompt">
                    <p>A frontend web developer with a passion for learning and creating.</p>
                    <a href={"https://github.com/sion-chowdhary"} target={"_blank"}><GitHubIcon /></a>
                    <a href={"https://www.instagram.com/sayan.chowdhary/"} target={"_blank"}><InstagramIcon /></a>
                    <a href={"https://www.linkedin.com/in/sion-chowdhary-a19113246/"} target={"_blank"}><LinkedInIcon /></a>
                </div>
                </div>
                <div className="skills">

                    <h1>Skills</h1>
                    <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <span> ReactJS,  HTML, CSS,  
                                 BootStrap, MaterialUI</span>
                        </li>
                        <li className="item">
                            <h2>Languages </h2>
                            <span>Java, JavaScript, Python, C</span>
                        </li>
                    </ol>
                </div>
            </div>
    )
}

export default Home
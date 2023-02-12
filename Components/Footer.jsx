import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href={"https://github.com/sion-chowdhary"} target={"_blank"}><GitHubIcon /></a>
        <a href={"https://www.instagram.com/sayan.chowdhary/"} target={"_blank"}><InstagramIcon /></a>
        <a href={"https://www.linkedin.com/in/sion-chowdhary-a19113246/"} target={"_blank"}><LinkedInIcon /></a>
        </div>
        <p>&copy; 2023 Sion Chowdhary</p>
    </div>
  )
}

export default Footer
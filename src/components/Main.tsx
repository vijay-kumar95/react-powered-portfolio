import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://vijay-portfolio-image.s3.ap-south-1.amazonaws.com/profile.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          {/* <div className="social_icons">
            <a href="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div> */}
          <h1>Vijay Kumar</h1>
          <p>Platform Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vijay-kumar95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vijaykumar12s/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/vijaykumar01209/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a  href="https://x.com/vijayverma_95" target="_blank" rel="noreferrer"><XIcon/></a>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          {/* <div className="social_icons">
            <a href="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div> */}
          <h1>Vijay Kumar</h1>
          <p>DevOps Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vijay-kumar95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vijaykumar12s/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "Node.js",
    "Express.js",
    "JWT Authentication",
    "Mongoose", 
    "RESTful APIs"
];

const labelsSecond = [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Docker",
    "Kubernetes",
     "Helm",
     "AWS",
  "Terraform",
  "Ansible",
  "Chef",
  "Puppet",
  "Linux",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "CloudWatch",
  "Snowflake",
];

const labelsThird = 
[
  "OpenAI API",
  "LangChain",
  "Hugging Face Transformers",
  "LlamaIndex",
  "Qdrant",
  "Harness AI",
  "DeepCode / Snyk AI",
  "BigPanda",
  "Moogsoft",
  "AWS DevOps Guru"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Application Development & Maintenance??? more like devops</h3>
                    <p>I build and maintain MERN stack applications from end to end, focusing on creating solutions that are stable, scalable, and reliable. With hands-on experience in both development and maintenance, I ensure applications perform optimally, are easy to extend, and integrate seamlessly with DevOps pipelines for smooth deployment and monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Specializing in DevOps automation, I streamline the full lifecycle of software delivery by designing and maintaining automated testing, CI/CD pipelines, and deployment workflows. My work ensures stable, scalable, and reliable production releases, reduces human error, supports long-term maintenance, and incorporates intelligent tools to improve observability and operational insights.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Leveraging AI and LLMs, I optimize DevOps operations by automating CI/CD pipelines, deployment workflows, and testing frameworks, while integrating advanced monitoring and observability tools. This enables proactive anomaly detection, predictive maintenance, and intelligent decision-making, resulting in highly reliable, scalable, and efficient production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
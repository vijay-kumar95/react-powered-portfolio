import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul,2024 - Present?????????????????????????????"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengalur/Noida, India</h4>
            <p>
              CI/CD pipeline automation, Infrastructure reliability monitoring, Real-time system orchestration, SLA-driven data delivery, Automated testing workflows, Platform stability maintenance, Continuous updates deployment
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan,2022 - Jul,2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4>
            <p>
              Data pipeline automation, Payroll workflow optimization, Report generation automation, SLA-driven file delivery, Real-time system updates, Batch process monitoring
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar,2020 - Dec,2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programmer Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4>
            <p>
              Frontend/Backend Development & Maintenance, Data mapping and migration, Database extraction & transformation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar,2019 - Feb,2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programmer Analyst Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai/Kolkata, India</h4>
            <p>
              Java CLI development, Flat file conversion, XML/JSON transformation, Web service integration
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
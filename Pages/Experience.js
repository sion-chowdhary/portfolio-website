import React from 'react'
import {
    VerticalTimeline, 
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2008-2021"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    City Montessori School,Lucknow
                </h3>
                <p>PCM with Computer Science - 92% in XII</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2021-2025"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    KIET Group Of Institutions,Delhi NCR
                </h3>
                <p>Computer Science Engineering</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
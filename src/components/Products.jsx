import React from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CgWebsite} from "react-icons/cg"
import {TbBike} from "react-icons/tb"
import {RiStethoscopeFill} from "react-icons/ri"
import {FaCalculator} from "react-icons/fa"
const Section = styled.div`
    min-height: 100vh;
    /* scroll-snap-align: center; */
    scroll-snap-type: none;
  display: flex;
  justify-content: center;
   
`
const Details = styled.h3`
  
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
`
const Products = () => {
  return (
    <Section><VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(239, 78, 35)' }}
    date="$500 - $1000"
    iconStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    icon={<CgWebsite/>}
  >
    <h3 className="vertical-timeline-element-title">EC MANAGER</h3>
    <h4 className="vertical-timeline-element-subtitle">Basic ecommerce website</h4>
    <p >
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(239, 78, 35)' }}
    date="$1000 - $1500"
    iconStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    icon={<CgWebsite/>}
  >
    <h3 className="vertical-timeline-element-title">EC MANAGER PRO</h3>
    <h4 className="vertical-timeline-element-subtitle">Full ecommerce solution</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(239, 78, 35)' }}
    date="$1500 - $2000++"
    iconStyle={{ background: 'rgb(239, 78, 35)', color: '#fff' }}
    icon={<CgWebsite/>}
  >
    <h3 className="vertical-timeline-element-title">EC MANAGER ++</h3>
    <h4 className="vertical-timeline-element-subtitle">ecommerce website with android and IOS</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(117, 56, 168)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(117, 56, 168)' }}
    date="$1000 - $1500++"
    iconStyle={{ background: 'rgb(117, 56, 168)', color: '#fff' }}
    icon={<TbBike/>}
  >
    <h3 className="vertical-timeline-element-title">EC RIDER</h3>
    <h4 className="vertical-timeline-element-subtitle">Ride share app</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(117, 56, 168)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(117, 56, 168)' }}
    date="$1500 - $3000++"
    iconStyle={{ background: 'rgb(117, 56, 168)', color: '#fff' }}
    icon={<TbBike/>}
  >
    <h3 className="vertical-timeline-element-title">EC RIDER PRO</h3>
    <h4 className="vertical-timeline-element-subtitle">Ride share app with android and IOS</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 183, 3)' }}
    date="$500 - $1000"
    iconStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    icon={<RiStethoscopeFill/>}
  >
    <h3 className="vertical-timeline-element-title">EASY DOC</h3>
    <h4 className="vertical-timeline-element-subtitle">Basic Physcian </h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 183, 3)' }}
    date="$1000 - $1500++"
    iconStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    icon={<RiStethoscopeFill/>}
  >
    <h3 className="vertical-timeline-element-title">EASY DOC PRO</h3>
    <h4 className="vertical-timeline-element-subtitle">Doctor + Physician</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 183, 3)' }}
    date="$1500 - $2000++"
    iconStyle={{ background: 'rgb(255, 183, 3)', color: '#fff' }}
    icon={<RiStethoscopeFill/>}
  >
    <h3 className="vertical-timeline-element-title">EASY DOC ++</h3>
    <h4 className="vertical-timeline-element-subtitle">Hospital Management System</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
   date="$500 - $1500++"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaCalculator/>}
   ><h3 className="vertical-timeline-element-title">ERP SOLUTION (Accounts)</h3>
    <h4 className="vertical-timeline-element-subtitle">Accounts Management System</h4>
    <p>
      Creative Direction, Visual Design
    </p>
    </VerticalTimelineElement>
    
   
 
   <VerticalTimelineElement
   contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
   date="$500 - $1500++"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaCalculator/>}
  >
    <h3 className="vertical-timeline-element-title">ERP SOLUTION (Invantory)</h3>
    <h4 className="vertical-timeline-element-subtitle">Invantory Management System</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
   date="$500 - $1500++"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaCalculator/>}
 >
  <h3 className="vertical-timeline-element-title">ERP SOLUTION (Supply)</h3>
    <h4 className="vertical-timeline-element-subtitle">Supply chain Management </h4>
    <p>
      Creative Direction, Visual Design
    </p>
 </VerticalTimelineElement>
 <VerticalTimelineElement
   contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
   date="$1000 - $2000++"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaCalculator/>}
 >
  <h3 className="vertical-timeline-element-title">ERP SOLUTION (CRM)</h3>
    <h4 className="vertical-timeline-element-subtitle">CRM System </h4>
    <p>
      Creative Direction, Visual Design
    </p>
 </VerticalTimelineElement>
 <VerticalTimelineElement
   contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
   date="$1000 - $2000++"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaCalculator/>}
 >
  <h3 className="vertical-timeline-element-title">ERP SOLUTION (HRM)</h3>
    <h4 className="vertical-timeline-element-subtitle">HRM System </h4>
    <p>
      Creative Direction, Visual Design
    </p>
 </VerticalTimelineElement>
</VerticalTimeline></Section>
    
  )
}

export default Products
import agro from "../assets/partners/agro.png";
import air from "../assets/partners/air.png";
import bgb from "../assets/partners/bgb.png";
import itvs from "../assets/partners/itvs.png";
import rg from "../assets/partners/rg.png";
import stc from "../assets/partners/stc.png";
import synctella from "../assets/partners/synctella.png";
import usaid from "../assets/partners/usaid.jpg";


import femni2 from "../assets/femni.png";
import sadia2 from "../assets/sadia.png";
import helz from "../assets/helpz4.png";
import travel2 from "../assets/travel2.png";
import erp from "../assets/erp.png";
import mirror from "../assets/mirror2.png";
import binge from "../assets/binge.png";
import ride from "../assets/Ride.jpg";
import edutech from "../assets/edutech.jpg";

import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";

import ceo from "../assets/ceo.jpeg";
import mizan from "../assets/mizan.jpeg";
import naim from "../assets/naim.jpeg"
import user from "../assets/user.avif";
import mentor from "../assets/partners/mentor.png";

import { RiNumber2 } from "react-icons/ri";

export const StepData = [
  { icon: <RiNumber2 />, stepnumber: "1", steptitle: "Requirement gathering" },
  { icon: <RiNumber2 />, stepnumber: "2", steptitle: "Requirement Analysis" },
  {
    icon: <RiNumber2 />,
    stepnumber: "3",
    steptitle: "Strategy & Documentation",
  },
  { icon: <RiNumber2 />, stepnumber: "4", steptitle: "Design" },
  { icon: <RiNumber2 />, stepnumber: "5", steptitle: "Development" },
  { icon: <RiNumber2 />, stepnumber: "6", steptitle: "Testing(QA & UAT)" },
  { icon: <RiNumber2 />, stepnumber: "7", steptitle: "Bug Fixing" },
  { icon: <RiNumber2 />, stepnumber: "8", steptitle: "Go Live" },
];

export const testimonials = [
  {
    testimonial:
      "Innovation distinguishes between a leader and a follower.We are not just in the business of selling technology, we are in the business of solving problems and making people's lives easier.",
    name: "Russell Abdullah Al Mamun",
    designation: "CEO",
    company: "Primex Information System",
    image: ceo,
    website: "#"
  },
  {
    testimonial:
      "Programming is not just about writing code, it's about crafting solutions that are efficient, elegant, and scalable, while constantly learning and adapting to new idea and technologies.",
    name: "Mizanur Rahman",
    designation: "Software Engineer",
    company: "Laravel  PHP  Mysql",
    image: mizan,
    website: "https://www.devmizanur.com"
  },
  {
    testimonial:
      "Software engineering is a journey of continuous learning and problem-solving. It's about creating solutions that make a positive impact on people's lives while embracing change and innovation",
    name: "Ragib Ekhowan",
    designation: "UI/UX designer",
    company: " Css, Figma, Adobe x",
    image: user,
    website: "#"
  },
  {
    testimonial:
      "Software engineering is a journey of continuous learning and problem-solving. It's about creating solutions that make a positive impact on people's lives while embracing change and innovation",
    name: "Dweep biswas",
    designation: "Graphics and Content Designer",
    company: "Figma, adobe x, illustrate",
    image: user,
    website: "#"
  },
  {
    testimonial:
      "Software engineering is a journey of continuous learning and problem-solving. It's about creating solutions that make a positive impact on people's lives while embracing change and innovation",
    name: "Sohag Mia",
    designation: "Senior Software Engineer",
    company: "Java, PHP",
    image: user,
    website: "#"
  },
  {
    testimonial:
      "Always prefer to introduce myself as a Learner rather than an Expert. Everyday life is like programming. If we love something we can put beauty in it! - and that's what am always doing what I love the most.",
    name: "Naim Siddiqui",
    designation: "Jr. Software Engineer",
    company: "React, NodeJS",
    image: naim,
    website: "#"
  },
];

export const services = [
  {
    title: "Web & mobile Application",
    icon: web,
    desc: "we design web application for business purposes and mobile app development team creates innovative and user-friendly mobile applications that are compatible with all major platforms",
  },
  {
    title: "Business Solution & IT consulting",
    icon: mobile,
    desc: "Buniness consulting services help businesses optimize their infrastructure and improve their business processes. We offer services including project management, and vendor management.",
  },
  {
    title: "Data analytics & cybersecurity",
    icon: backend,
    desc: "Our cybersecurity services help businesses protect their data and systems from cyber threats. We offer services, including vulnerability assessments, penetration testing.",
  },
  {
    title: "Digital Marketing & Interaction",
    icon: creator,
    desc: "our digital marketing services help businesses reach their target audience and increase their online presence. We offer digital marketing services, including search engine optimization ",
  },
];

export const technologies = [
  {
    name: "AGRO",
    icon: agro,
  },
  {
    name: "AIR",
    icon: air,
  },
  {
    name: "BGB",
    icon: bgb,
  },
  {
    name: "ITVS",
    icon: itvs,
  },
  {
    name: "RG",
    icon: rg,
  },
  {
    name: "STCG",
    icon: stc,
  },
  {
    name: "Synctella",
    icon: synctella,
  },
  {
    name: "USAID",
    icon: usaid,
  },
  {
    name: "Mentor",
    icon: mentor,
  },
];

export const projects = [
  {
    name: "Therapy And Medition",
    description:
      "Our therapy and meditation app provides services of great therapist to get mindfulness tools for daily relaxation, stress reduction, and improved mental health.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: femni2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Patient Appointment",
    description:
      "Our patient appointment app simplifies the booking process, improves communication, and streamlines scheduling for healthcare providers and patients alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sadia2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce Manager",
    description:
      "Our eCommerce management dashboard application provides real-time insights and analytics to help businesses optimize their online store performance and improve sales.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: helz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travel2,
    source_code_link: "https://github.com/",
  },
  {
    name: "ERP Software",
    description:
      "Our ERP software integrates and streamlines core business processes, providing real-time data and analytics for informed decision-making and improved business performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce website",
    description:
      "Our Ecommerce provides a user-friendly platform with seamless payment processing, inventory management, and shipping integration for businesses to sell online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mirror,
    source_code_link: "https://github.com/",
  },
  {
    name: "OTT Platform",
    description:
      "We offer a comprehensive OTT platform, to deliver high-quality streaming content to their audience, complete with advanced features like personalized recommendations and seamless cross-device accessibility",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: binge,
    source_code_link: "https://github.com/",
  },
  {
    name: "Edutech Platform",
    description:
      "We offer a cutting-edge Edutech platform, transforming online learning with interactive features, analytics, and collaboration tools, empowering educational institutions and learners.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: edutech,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ride Sharing",
    description:
      "We offer a seamless ride-sharing platform, connecting drivers and passengers for convenient and efficient transportation with features like real-time tracking and secure payments.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ride,
    source_code_link: "https://github.com/",
  },
];

export default { technologies, projects, services, testimonials, StepData };

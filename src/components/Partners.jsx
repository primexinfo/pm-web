import React from "react";
import styled from "styled-components";
import { StarWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import meeting from "../assets/meeting.jpg";
const Section = styled.div`
  ${'' /* max-height: 100vh; */}
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
// const Title = styled.h1`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 200;
//   flex-direction: row;
// `;

const Partner = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10;
`;

const Partners = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>Our Proud</p>
      <h1 className={`${styles.sectionHeadText}`}>Partners</h1>
    </motion.div>

  <div className="w-full flex">
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
    >
     At Primex, we are privileged to work with a diverse range of clients from various industries and backgrounds. Our clients are forward-thinking and have a vision for the future of their business, and they understand the importance of technology in achieving their goals. Our clients are resourceful, results-driven, and goal-oriented, and they collaborate closely with us to achieve success. We value the relationships we have with our clients, and we are committed to providing them with innovative and effective IT solutions that help them stay competitive in their industries.
    </motion.p>
  </div>
    <Section>
     
      
          <>
          <div className="md:grid md:grid-cols-2 mt-10">
            <div className="grid mb-8 md:mb-0">
              <img className="rounded-md" src={meeting} alt="Meeting" />
            </div>
            <div className="grid">
              <div className="flex flex-row flex-wrap justify-center gap-5">
                {technologies.map((technology) => (
                    <div className="w-36 h-28 flex items-center bg-white justify-center rounded-md" key={technology.name}>
                      <img className="w-24 h-auto rounded-md" src={technology.icon} alt={technology.name} />
                    </div>
                  
                  ))}
              </div>
            </div>
          </div>
          </>
    </Section>
    </>
  );
};

export default StarWrapper(Partners, "");

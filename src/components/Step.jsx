import React from "react";
import { motion } from "framer-motion";
// import styled from "styled-components";
import { StepData } from "../constants";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import Typed from "react-typed";
// const Section = styled.div`
//   height: 100vh;
// `;

const StepCard = ({ index, icon, stepnumber, steptitle }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px]  rounded-lg shadow-card"
      >
        <div class="max-w-sm p-6 bg-tertiary   rounded-lg shadow">
          {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
          {/* <i className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {icon}
          </i> */}
          {/* <img
            src={icon}
            alt="web-development"
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          /> */}
          <h5 class="w-8 h-8 mb-2 text-4xl font-semibold tracking-tight text-gray-500 dark:text-orange">
            {stepnumber}
          </h5>

          <p class="mb-3 font-semibold  text-gray-500 dark:text-gray-400">
            {steptitle}
          </p>
          <a href="javascript:void(0)" class="inline-flex items-center text-sm text-orange-600 hover:underline"
          >
            See our guideline
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Step = () => {
  return (
    <>
      <motion.div
        className="ml-20 mt-20 flex"
        id="service"
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>THE WAY WE </h2>
        <Typed
          className=" text-orange-600 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pl-5"
          strings={["WORKS", "DESIGN", "DELIVER"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </motion.div>
      <div className="ml-20 mt-20 grid grid-cols-4 gap-10">
        {StepData.map((steps, index) => (
          <>
            <StepCard key={steps.title} index={index} {...steps} />
          </>
        ))}
        
      </div>
      <motion.div className="ml-20 mt-5 flex">
          <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px]">SUPPORT CHANNEL IS OPEN</h2>
          <Typed
            className="text-orange-600 font-bold md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] pl-5"
            strings={["24/7", "365 DAYS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </motion.div>
    </>
  );
};

export default Step;

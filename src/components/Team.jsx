import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { StarWrapper } from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  website
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <a href={website} target="_blank" className="text-white font-medium text-[16px]">
            {name}
          </a>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} ({company})
          </p>
        </div>
        <a href={website} target="_blank" >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <div className={`bg-black-100  rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Meet Our Amazing</p>
          <h2 className={styles.sectionHeadText}>Team</h2>
        </motion.div>
      </div>
      <div className={`pb-8 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(Team, "");

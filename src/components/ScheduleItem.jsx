import React from "react";
import { motion } from "motion/react";

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50 ">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
      </div>
    </motion.div>
  );
};

export default ScheduleItem;

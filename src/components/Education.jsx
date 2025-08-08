import React from "react";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

const Education = () => {
  const educationList = [
    {
      institution: "Indian Institute of Information Technology, Dharwad",
      degree: "B.Tech. in Computer Science and Engineering",
      year: "2026",
      grade: "8.44",
    },
    {
      institution: "St. Patrick’s Junior College",
      degree: "Intermediate Education",
      year: "2022",
      grade: "97.7%",
    },
    {
      institution: "Johnson Grammar School CBSE",
      degree: "Secondary Education",
      year: "2020",
      grade: "97%",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Education
      </motion.h2>
      <Timeline position="alternate">
        {educationList.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color={
                  index === educationList.length - 1 ? "success" : "secondary"
                }
                sx={{ width: 28, height: 28 }}
              />
              {index !== educationList.length - 1 && (
                <TimelineConnector sx={{ height: 100 }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 3, px: 2 }}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 != 0 ? -50 : 50 }} // Alternating motion
                transition={{ duration: 1 }}
              >
                <h3 className="text-3xl font-bold text-neutral-200 mb-2">
                  {item.institution}
                </h3>
                <p className="text-xl text-neutral-400">{item.degree}</p>
                <p className="text-lg text-neutral-500 mt-1">{item.year}</p>
                <p className="text-lg text-neutral-500 mt-1">{item.grade}</p>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;

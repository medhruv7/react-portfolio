import React from "react";
import { Card, CardContent } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import WorkExperienceTimeline from "./WorkExperience/WorkExperienceTimeline";

const WorkExperience = () => {
  // const content = [
  //   [
  //     "Acrobyte (Mcgraww Hill)",
  //     "Working as a Full stack developer with tech stack including React.js, Node.js, HTML, CSS.",
  //   ],
  //   [
  //     "Software Developer at Deepen Ai",
  //     "Working as a full stack developer to build new features for clients.",
  //     "Maintaining and debugging the codebase issues on the front-end as well as the back-end.",
  //     "Worked with latest technologies such as React.js, Redux, Saga.js on the front-end and Django on the back-end.",
  //   ],
  //   [
  //     "Software Development Engineer in Test at Hike Messenger",
  //     "Involved in server-side automation testing using the TestNG platform.",
  //     "Closely tested all data flowing from the client to various databases like MySQL, MongoDB, Redis, etc.",
  //     "Worked with the Espresso Framework on the front-end.",
  //     "Worked closely with developers to test and debug critical issues.",
  //   ],
  //   [
  //     "System Test Intern at Arista Networks",
  //     "L2, L3 testing of the access Point.",
  //     "Hands-on experience working with switches and access points from various vendors.",
  //   ],
  // ];

  // const cardsContainerStyle = {
  //   display: "flex",
  //   padding: "10px",
  // };

  // const cardStyle = {
  //   textAlign: "center",
  //   marginRight: "10px",
  //   flex: "1",
  // };

  // const workHeading = {
  //   textAlign: "center",
  //   fontSize: "2em",
  //   fontWeight: "bold",
  //   padding: "10px",
  // };

  // const createCard = (content) => {
  //   return (
  //     <Card variant="outlined" style={cardStyle}>
  //       {content.map((item, idx) => (
  //         <CardContent
  //           key={idx}
  //           style={{ fontWeight: idx === 0 ? "bold" : "" }}
  //         >
  //           {idx === 0 ? item : <li>{item}</li>}
  //         </CardContent>
  //       ))}
  //     </Card>
  //   );
  // };

  // const buildTimeline = (item, idx) => {
  //   return <Timeline>
  //     <TimelineItem>
  //       {idx !== content.length - 1 && <TimelineSeparator>
  //         <TimelineDot />
  //         <TimelineConnector />
  //       </TimelineSeparator>}
  //       <TimelineContent>
  //         <div style={{fontWeight: 'bold'}}>{item[0]}</div>
  //       </TimelineContent>
  //     </TimelineItem>
  //   </Timeline>;
  // };

  return <WorkExperienceTimeline />;
};

export default WorkExperience;

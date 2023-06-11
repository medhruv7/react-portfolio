import React from "react";
import { Card, CardContent } from "@mui/material";

const WorkExperience = () => {
  const content = [
    [
      "Acrobyte (Mcgraww Hill)",
      "Working as a Full stack developer with tech stack including React.js, Node.js, HTML, CSS.",
    ],
    [
      "Software Developer at Deepen Ai",
      "Working as a full stack developer to build new features for clients.",
      "Maintaining and debugging the codebase issues on the front-end as well as the back-end.",
      "Worked with latest technologies such as React.js, Redux, Saga.js on the front-end and Django on the back-end.",
    ],
    [
      "Software Development Engineer in Test at Hike Messenger",
      "Involved in server-side automation testing using the TestNG platform.",
      "Closely tested all data flowing from the client to various databases like MySQL, MongoDB, Redis, etc.",
      "Worked with the Espresso Framework on the front-end.",
      "Worked closely with developers to test and debug critical issues.",
    ],
    [
      "System Test Intern at Arista Networks",
      "L2, L3 testing of the access Point.",
      "Hands-on experience working with switches and access points from various vendors.",
    ],
  ];

  const cardsContainerStyle = {
    display: "flex",
    padding: "10px",
  };

  const cardStyle = {
    textAlign: "center",
    marginRight: "10px",
    flex: "1",
  };

  const workHeading = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    padding: "10px",
  }

  const createCard = (content) => {
    return (
      <Card variant="outlined" style={cardStyle}>
        {content.map((item, idx) => (
          <CardContent
            key={idx}
            style={{ fontWeight: idx === 0 ? "bold" : "" }}
          >
            {idx === 0 ? item : <li>{item}</li>}
          </CardContent>
        ))}
      </Card>
    );
  };

  return (
    <div>
      <div style={workHeading}>Work Experience</div>
      <div style={cardsContainerStyle}>
        {content.map((item) => createCard(item))}
      </div>
    </div>
  );
};

export default WorkExperience;

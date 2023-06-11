import { Card, CardContent } from "@mui/material";

const Projects = () => {
  const content = [
    [
      "Algo Trading App as Freelancing",
      "Made a Algo trading bot for a client in python for his personal trading use",
    ],
    [
        "Booking Calendar App as Freelancing",
        "Made a booking calendar full stack app for a client to be used by their receptionist to manage bookings"
    ],
    [
        "Automated Server Scalability Test at Arista (Website + Scripting)",
        "Automation of complete process of scale testing of the server",
        "Front End GUI to Backend coding and integration",
        "Scripting of all necessary tasks required to perform automation of loading the server and getting the analytics out of it"
    ]
  ];

  const cardStyle = {
    textAlign: "center",
    marginRight: "10px",
    flex: "1",
  };

  const cardsContainerStyle = {
    display: "flex",
    padding: "10px",
  };

  const projectsHeading = {
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
        <div style={projectsHeading}>Projects</div>
        <div style={cardsContainerStyle}>{content.map(item => createCard(item))}</div>
    </div>
  )
};

export default Projects;
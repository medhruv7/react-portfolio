import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

const workHeading = {
  textAlign: "center",
  fontSize: "2em",
  fontWeight: "bold",
  padding: "10px",
};

const WorkExperienceTimeline = () => {
  const content = [
    "Full stack developer at Acrobyte (Mcgraww Hill)",
    "Full stack developer at Deepen Ai",
    "Software developer at Hike Messenger",
    "System Test Intern at Arista Networks",
  ];

  const buildTimeline = (item, idx) => {
    return (
      <Timeline>
        <TimelineItem>
          {idx !== content.length - 1 && (
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
          )}
          <TimelineContent>
            <div style={{ fontWeight: "bold" }}>{item}</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  };

  return (
    <div>
      <div style={workHeading}>Work Experience</div>
      <div style={{width: 'fit-content'}}>{content.map((item, idx) => buildTimeline(item, idx))}</div>
    </div>
  );
};

export default WorkExperienceTimeline;

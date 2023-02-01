import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineItem,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/details";

const DevEduTimeline = ({loading}) => {
  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devEdu.map((item, index) => (
          <Slide
            key={index}
            in={loading}
            direction="down"
            style={{
              transitionDelay: loading ? `${index + 3}99ms ` : "0ms",
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="info" variant="outlined">
                  <SchoolRounded color="info" />
                </TimelineDot>
                {index !== 1 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.cert}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.major}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevEduTimeline;

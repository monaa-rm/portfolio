import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineItem,
} from "@mui/lab";
import { HomeRepairServiceRounded } from "@mui/icons-material";
import { devExp } from "../../constants/details";

const DevExpTimeline = ({loading}) => {
  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devExp.map((item, index) => (
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
                <TimelineDot color="warning" variant="outlined">
                  <HomeRepairServiceRounded color="warning" />
                </TimelineDot>
                {index !== 0 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.company}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.perf}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.duration}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevExpTimeline;

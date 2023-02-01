import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import DevEduTimeline from "../components/pages/DevEduTimeline";
import DevExpTimeline from "../components/pages/DevExpTimeline";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="error"
          cColor="error"
          icon={<SettingsEthernetRounded sx={{ fill: "black" }} />}
          align="center"
          text="رزومه من"
        />

        <Grid container sx={{ mt: 3 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />
            <DevExpTimeline loading={loading} />
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="info"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />

            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;

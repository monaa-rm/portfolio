import { Card, CardContent } from "@mui/material";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import avatar02 from "../assets/avatar02.jpg";
import DevInfo from "../components/pages/DevInfo";
import { Helmet } from "react-helmet-async";
import { CustomAvatar, CustomDivider } from "../components/common";
import Skills from "../components/pages/Skills";

const About = ({ helmetTitle }) => {

  

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title> {helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ m: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فرانتند"
            />

          <DevInfo />
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar size={250} falback="MR" avatar={avatar02} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />

            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;

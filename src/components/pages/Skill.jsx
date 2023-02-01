import React from "react";
import {
  Typography,
  Divider,
  Chip,
  Box,
  LinearProgress,
  Badge,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Grid container sx={{ mt: 1}}>
        <Grid xs={7} sm={7} md={7} lg={10} xl={10}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5}}>
            <Box sx={{ minWidth: 35 , mr:1 , alignSelf:"center"}}>
              <Typography variant="body1" color="black">
                <Badge
                  variant="standard"
                  badgeContent={` ${Math.round(value)}%`}
                  color={color}
                />
              </Typography>
            </Box>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color={color}
                value={value}
                sx={{
                  height: 8,
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid xs={5} sm={5} md={5} lg={2} xl={2}>
          <Divider
            textAlign="right"
            sx={{
                "&::before , &::after": {
                  borderColor: `${color}.main`,
                },
              placeItems: "center",
            }}
          >
            <Chip
              icon={<Box component="img" src={icon} sx={{ height: 20 }} />}
              color={color}
              label={name}
              sx={{ color: "#000", p: 2 }}
            />
          </Divider>
        </Grid>
      </Grid>
    </>
  );
};

export default Skill;

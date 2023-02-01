import { useEffect, useRef, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import TextTransition, { presets } from "react-text-transition";
import { firefly, links } from "../constants/particles";
import bg02 from "../assets/bg02.jpeg";
import { Helmet } from "react-helmet-async";

const Home = ({ helmetTitle }) => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const [index, setIndex] = useState(0);

  const strings = [
    "توسعه دهنده فول استک هستم",
    "مدرس برنامه نویسی هستم",
    "فریلنسر هستم",
    "محتواساز دنیای برنامه نویسی هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["مونا رمضانی"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringInterval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      typedName.destroy();
      clearInterval(stringInterval);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" color="#F93C92">
          {"{{ "}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="#F93C92"></Typography>
        <Typography variant="h3" color="#F93C92">
          {" }}"}
        </Typography>
      </Box>

      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#F93C92",
              mt: 4,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography
          variant="h4"
          color="whitesmoke"
          sx={{
            textDecoration: "underline",
            textDecorationColor: "#F93C92",
            mt: 4,
          }}
        >
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

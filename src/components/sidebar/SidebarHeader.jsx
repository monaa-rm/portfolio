import { useState } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { GitHub, Telegram, WhatsApp, Instagram } from "@mui/icons-material";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
    <ThemeActionButton />
    <CustomAvatar size={150} fallback="YG" avatar={avatar} />

      <Typography variant="h6" color="whitesmoke">
        <RandomReveal
          isPlaying
          duration={5}
          characters="مونا رمضانی"
          characterSet={alphabetPersian}
          onComplete={() => setStart(true)}
        />
      </Typography>
      {start && (
        <Typography variant="caption" color="gray" sx={{ px: 1 }}>
          <RandomReveal
            isPlaying
            duration={5}
            characters="توسعه دهنده فرانتند"
            characterSet={alphabetPersian}
          />
        </Typography>
      )}

      <Box
        component="div"
        sx={{
          m: "0 auto",
          textAlign: "center",
        }}
      >
        <a
          href="https://github.com/monaa-rm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Github">
            <GitHub color="secondary" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/_rmoona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Github">
            <Instagram color="secondary"  />
          </IconButton>
        </a>
        <a
          href="https://t.me/monaa-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Github">
            <Telegram color="secondary"  />
          </IconButton>
        </a>
        <a
          href="https://wa.me/989381651208"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Github">
            <WhatsApp color="secondary" />
          </IconButton>
        </a>
      </Box>
    </>
  );
};

export default SidebarHeader;

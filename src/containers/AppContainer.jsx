import { useState, useEffect } from "react";

import { Typography, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../components/pages/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import { About, Contact, Courses, Home, Resume } from "../pages";
import Comments from "../pages/Comments";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme : dark)')
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="وب سایت شخصی مونا رمضانی " />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle=" مونا رمضانی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <Resume helmetTitle="مونا رمضانی | رزومه من" />
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle="مونا رمضانی | دوره های من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="مونا رمضانی | نظرات " />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="مونا رمصانی | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;

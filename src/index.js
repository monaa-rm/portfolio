import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./containers/AppContainer";

//react slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const root = createRoot(document.getElementById("root"));
root.render(
        <AppContainer />
);
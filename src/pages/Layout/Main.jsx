import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Nav from '../Shared/Nav/Nav';
import { useState } from "react";
const Main = () => {
  const handleTheme = () => {
    const currentMode = localStorage.getItem("chakra-ui-color-mode")
    if (currentMode === "light") {
      localStorage.setItem("chakra-ui-color-mode", "dark");
      window.location.reload();
    }
    if (currentMode === 'dark') {
      localStorage.setItem("chakra-ui-color-mode", "light");
      window.location.reload()
    }
  }
    return (
      <div data-theme={localStorage.getItem("chakra-ui-color-mode")}>
        <Nav handleTheme={handleTheme}></Nav>
        <Outlet></Outlet>
      </div>
    );
};

export default Main;
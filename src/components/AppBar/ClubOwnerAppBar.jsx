import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import logo from "../../assets/LOGO.png";
import Logo from "./Logo";
import NavBar from "./NavBar";
import LoginMenu from "./LoginMenu";
import MobileMenu from "./MobileMenu";
import { useLocation, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "68px",
  backgroundColor: "white",
}));

export default function ClubOwnerAppBar() {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Home");
  const [activeButton2, setActiveButton2] = useState("Player");

  const location = useLocation();

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleButton2Click = (buttonName) => {
    setActiveButton2(buttonName);
    if (buttonName === "Player") {
      navigate("/player");
    }
    if (buttonName === "Log In") {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (location.pathname === "/clubowner") {
      setActiveButton2("Club Owner");
    } else if (location.pathname === "/player") {
      setActiveButton2("Player");
    }
  }, [location.pathname]);

  // const navItems = [
  //   "Home",
  //   "Benefits",
  //   "Booking System",
  //   "Plans",
  //   "Testimonials",
  // ];

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Benefits", href: "benefits" },
    { name: "Booking System", href: "booking-system" },
    { name: "Plans", href: "plans" },
    { name: "Testimonials", href: "testimonials" },
  ];

  const navMobileItems = [
    { name: "Home", href: "home" },
    { name: "Benefits", href: "benefits" },
    { name: "Booking System", href: "booking-system" },
    { name: "Plans", href: "plans" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Player", href: "player" },
    { name: "Club Owner", href: "club-owner" },
  ];

  const loginItems = ["Player", "Club Owner", "Log In"];

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundColor: "transparent",
      }}
    >
      <Box sx={{}}>
        <StyledToolbar
          variant="dense"
          disableGutters
          sx={{
            height: { "2xl": 121, xl: 100, lg: 85, md: 70, sm: 52 },
            paddingX: {
              "2xl": "124px",
              xl: "80px",
              lg: "64px",
              md: "32px",
              sm: "24px",
            },
          }}
        >
          <Logo src={logo} />

          <NavBar
            navItems={navItems}
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
          />

          <LoginMenu
            loginItems={loginItems}
            activeButton={activeButton2}
            handleButtonClick={handleButton2Click}
          />

          <MobileMenu
            src={logo}
            navItems={navMobileItems}
            open={open}
            toggleDrawer={toggleDrawer}
            activeButton={activeButton2}
            handleButtonClick={handleButton2Click}
          />
        </StyledToolbar>
      </Box>
    </AppBar>
  );
}

import React from "react";
import { Typography, Box, Link, useMediaQuery } from "@mui/material";
import Logo from "/assets/logos/logo.svg";
import GithubIcon from "/assets/icons/Github.svg";
import LinkedinIcon from "/assets/icons/Linkedin.svg";
import scrollToSection from "../Utility/scroll";
import HeaderMenu from "../Mobile/HeaderMenu";
import { useTheme } from "@emotion/react";

const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const menuItems = [
    { label: "Home", id: "home-section" },
    { label: "Sobre", id: "about-section" },
    { label: "Projetos", id: "projects-section" },
    { label: "Experiências", id: "experience-section" },
    { label: "Habilidades", id: "hardskills-section" },
    { label: "Contato", id: "contact-section" },
  ];

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "20px",
    px: 2,
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
    flex: 1,
  };

  const menuContainerStyles = {
    display: { xs: "none", md: "flex" },
    gap: "24px",
    color: "#445964",
    flex: 2,
    justifyContent: "center",
  };

  const iconContainerStyles = {
    display: "flex",
    gap: 2,
    pl: 3,
    flex: 1,
    justifyContent: "flex-end",
  };

  return (
    <>
      {isMobile ? (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 5,
          backgroundColor: 'red'
        }}>
          <Box display="flex">
          <HeaderMenu menuItems={menuItems} />
          </Box>
          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ width: { xs: "40px", md: "auto" } }}
            />
            <Typography
              sx={{
                fontSize: { xs: 24, md: 32 },
                color: "#445964",
                fontWeight: 700,
                ml: 2,
              }}
            >
              Thiago Beraldo
            </Typography>
          </Box>
          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            gap: 2
          }}>
            <Link href="https://github.com/lenx0">
              <img
                src={GithubIcon}
                alt="Github Icon"
                style={{ marginTop: "0.3rem" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/thiagoberaldo06">
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
          </Box>
        </Box>
      ) : (
        <Box component="header" sx={headerStyles}>
          <Box sx={logoContainerStyles}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ width: { xs: "40px", md: "auto" } }}
            />
            <Typography
              sx={{
                fontSize: { xs: 24, md: 36 },
                color: "#445964",
                fontWeight: 700,
                ml: 2,
              }}
            >
              Thiago Beraldo
            </Typography>
          </Box>
          <Box sx={menuContainerStyles}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                sx={{ cursor: "pointer", fontWeight: 700, px: 2 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
          <Box sx={iconContainerStyles}>
            <Link href="https://github.com/lenx0">
              <img
                src={GithubIcon}
                alt="Github Icon"
                style={{ marginTop: "0.3rem" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/thiagoberaldo06">
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;

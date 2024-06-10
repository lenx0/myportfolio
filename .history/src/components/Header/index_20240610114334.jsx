import React from "react";
import { Typography, Box, Link } from "@mui/material";
import Logo from "/assets/logos/logo.svg";
import GithubIcon from "/assets/icons/Github.svg";
import LinkedinIcon from "/assets/icons/Linkedin.svg";

const Header = () => {
  const menuItems = ["Home", "Sobre", "Projetos", "Serviços", "Resumo", "Contato"];

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "20px",
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
  };

  const menuContainerStyles = {
    display: "flex",
    gap: "96px",
    color: "#445964",
  };

  const iconContainerStyles = {
    display: "flex",
    gap: 2,
    pl: 3,
  };

  return (
    <Box component="header" sx={headerStyles}>
      <Box sx={logoContainerStyles}>
        <Box component="img" src={Logo} alt="Logo" />
        <Typography sx={{ fontSize: 36, color: "#445964", fontWeight: 700, ml: 2 }}>
          Thiago Beraldo
        </Typography>
      </Box>
      <Box sx={menuContainerStyles}>
        {menuItems.map((item) => (
          <Typography
            key={item}
            sx={{ cursor: "pointer", fontWeight: 700, pr: 2, pl: 2 }}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={iconContainerStyles}>
        <Link href="https://github.com/lenx0">
          <img src={GithubIcon} alt="Github Icon" style={{ marginTop: "0.3rem" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/thiagoberaldo06">
          <img src={LinkedinIcon} alt="LinkedIn Icon" />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;

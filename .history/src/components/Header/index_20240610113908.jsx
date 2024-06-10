import React from 'react';
import { Typography, Box, Link } from "@mui/material";
import Logo from "/assets/logos/logo.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const Header = () => {
  const menuItems = [
    "Home",
    "Sobre",
    "Projetos",
    "Serviços",
    "Resumo",
    "Contato",
  ];

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
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }} key={item}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={iconContainerStyles}>
        <Link href="https://github.com/lenx0">
          <Box component="img" src={Github} alt="Github Icon" mt={0.3} />
        </Link>
        <Link href="https://www.linkedin.com/in/thiagoberaldo06">
          <Box component="img" src={Linkedin} alt="LinkedIn Icon" />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;

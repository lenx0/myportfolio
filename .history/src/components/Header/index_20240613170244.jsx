import React, { useState } from "react";
import {
  Typography,
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "/assets/logos/logo.svg";
import GithubIcon from "/assets/icons/Github.svg";
import LinkedinIcon from "/assets/icons/Linkedin.svg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = ["Home", "Sobre", "Projetos", "Serviços", "Resumo", "Contato"];

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
    display: { xs: "none", md: "flex" }, // Hide on small screens, show on medium and up
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

  const listContainerStyles = {
    width: 250, // Width of the drawer menu
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const listItems = (
    <Box sx={listContainerStyles} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} sx={{ fontWeight: 700 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="header" sx={headerStyles}>
      <Box sx={logoContainerStyles}>
        <Box component="img" src={Logo} alt="Logo" sx={{ width: { xs: "40px", md: "auto" } }} />
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, color: "#445964", fontWeight: 700, ml: 2 }}>
          Thiago Beraldo
        </Typography>
      </Box>
      <Box sx={menuContainerStyles}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{ cursor: "pointer", fontWeight: 700, px: 2 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "#445964" }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {listItems}
          </Drawer>
        </Box>
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

import { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "/assets/logos/logo.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const HeaderMenu = ({ menuItems, scrollToSection }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <img src={Logo} alt="Logo" width={100} />
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer}>
                {/* <ListItemText
                  primary={item.label}
                  onClick={() => scrollToSection(item.id)}
                /> */}
                <Typography onClick={() => scrollToSection(item.id)} sx={{
                  cursor: "pointer",
                  lineHeight: 1.6,
                  letterSpacing: 1,
                  px: 2,
                  textDecoration: "none",
                  color: "#445964"
                }}>
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Box display="flex" justifyContent="center" mt={3}>
            <Box mr={2}>
              <img src={Github} alt="Github" width={30} />
            </Box>
            <Box>
              <img src={Linkedin} alt="Linkedin" width={30} />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderMenu;

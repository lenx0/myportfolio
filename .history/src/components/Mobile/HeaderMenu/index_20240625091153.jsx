import { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "/assets/logos/logo.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const HeaderMenu = ({ menuItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box>

        <IconButton onClick={toggleDrawer} sx={{ mt: 2 }}>
          <MenuIcon sx={{ fontSize: "50px" }} />
        </IconButton>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={2}>
            <img src={Github} alt="Github" width={30} />
          </Box>
          <Box>
            <img src={Linkedin} alt="Linkedin" width={30} />
          </Box>
        </Box>
      </Box>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <img src={Logo} alt="Logo" width={100} />
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer}>
                <ListItemText primary={item.label} />
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

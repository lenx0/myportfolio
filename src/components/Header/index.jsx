import { Typography, Box, Link, useMediaQuery, Menu, MenuItem } from "@mui/material";
import { Download as DownloadIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import Logo from "/assets/logos/logo.svg";
import GithubIcon from "/assets/icons/Github.svg";
import LinkedinIcon from "/assets/icons/Linkedin.svg";
import scrollToSection from "../Utility/scroll";
import HeaderMenu from "../Mobile/HeaderMenu";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/archives/curriculo-thiago.pdf';
    link.download = 'curriculo-thiago.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleView = () => {
    if (isMobile) {
      window.open('/assets/archives/curriculo-thiago.pdf', '_blank');
    } else {
      const link = document.createElement('a');
      link.href = '/assets/archives/curriculo-thiago.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    handleClose();
  };

  const menuItems = [
    { label: "Home", id: "home-section" },
    { label: "Sobre", id: "about-section" },
    { label: "Projetos", id: "projects-section" },
    { label: "Experiências", id: "experience-section" },
    { label: "Habilidades", id: "hardskills-section" },
    { label: "Contato", id: "contact-section" },
    { label: "Currículo", id: "curriculum-section" },
  ];

  const navLinkStyles = {
    cursor: "pointer",
    fontWeight: 600,
    px: 1.5,
    py: 0.75,
    borderRadius: 1.5,
    fontSize: 14,
    color: "#445964",
    userSelect: "none",
    transition: "all 0.2s ease",
    '&:hover': {
      color: "#5d176b",
      backgroundColor: "rgba(93, 23, 107, 0.07)",
    },
  };

  return (
    <>
      {isMobile ? (
        <Box sx={{ display: "flex", px: 2, py: 1.5, justifyContent: "space-between", alignItems: "center" }}>
          <HeaderMenu menuItems={menuItems} scrollToSection={scrollToSection} />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Link href="https://github.com/lenx0" target="_blank" sx={{ display: "flex" }}>
              <img src={GithubIcon} alt="Github Icon" style={{ width: 26, height: 26 }} />
            </Link>
            <Link href="https://www.linkedin.com/in/thiagoberaldo06" target="_blank" sx={{ display: "flex" }}>
              <img src={LinkedinIcon} alt="LinkedIn Icon" style={{ width: 26, height: 26 }} />
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { md: 4, lg: 6 },
            py: 1.5,
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flex: 1 }}>
            <Box component="img" src={Logo} alt="Logo" sx={{ width: 36, height: 36 }} />
            <Typography sx={{ fontSize: 20, color: "#263138", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Thiago Beraldo
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 0.5, flex: 2, justifyContent: "center", alignItems: "center" }}>
            {menuItems.map((item) => (
              item.label === "Currículo" ? (
                <Typography
                  key={item.label}
                  sx={{
                    ...navLinkStyles,
                    border: "1.5px solid #263138",
                    color: "#263138",
                    '&:hover': {
                      backgroundColor: "#263138",
                      color: "#ffffff",
                    },
                  }}
                  onClick={handleClick}
                >
                  {item.label}
                </Typography>
              ) : (
                <Typography
                  key={item.label}
                  sx={navLinkStyles}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Typography>
              )
            ))}

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <MenuItem onClick={handleView} style={{ cursor: "pointer", fontWeight: 600, color: "#445964" }}>
                <VisibilityIcon sx={{ mr: 1, fontSize: 18 }} />
                Visualizar Currículo
              </MenuItem>
              <MenuItem onClick={handleDownload} style={{ cursor: "pointer", fontWeight: 600, color: "#445964" }}>
                <DownloadIcon sx={{ mr: 1, fontSize: 18 }} />
                Baixar Currículo
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
            <Link href="https://github.com/lenx0" target="_blank" sx={{ display: "flex", transition: "transform 0.2s ease", '&:hover': { transform: "scale(1.2)" } }}>
              <img src={GithubIcon} alt="Github Icon" style={{ width: 26, height: 26 }} />
            </Link>
            <Link href="https://www.linkedin.com/in/thiagoberaldo06" target="_blank" sx={{ display: "flex", transition: "transform 0.2s ease", '&:hover': { transform: "scale(1.2)" } }}>
              <img src={LinkedinIcon} alt="LinkedIn Icon" style={{ width: 26, height: 26 }} />
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;

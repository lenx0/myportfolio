import { Box, Link, useMediaQuery, Menu, MenuItem, Button } from "@mui/material";
import { Download as DownloadIcon, Visibility as VisibilityIcon, KeyboardArrowDown, GitHub, LinkedIn } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";
import scrollToSection from "../Utility/scroll";
import HeaderMenu from "../Mobile/HeaderMenu";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);
  const { scrollYProgress } = useScroll();
  const progressX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(`${id}-section`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom > 140) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/archives/curriculo-thiago.pdf";
    link.download = "curriculo-thiago.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleView = () => {
    window.open("/assets/archives/curriculo-thiago.pdf", "_blank");
    handleClose();
  };

  const menuItems = [
    { label: "Home", id: "home-section", key: "home" },
    { label: "Sobre", id: "about-section", key: "about" },
    { label: "Habilidades", id: "skills-section", key: "skills" },
    { label: "Projetos", id: "projects-section", key: "projects" },
    { label: "Experiência", id: "experience-section", key: "experience" },
    { label: "Contato", id: "contact-section", key: "contact" },
  ];

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(10, 10, 15, 0.78)" : "rgba(10, 10, 15, 0.35)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "transparent"}`,
      }}
    >
      <Box
        component={motion.div}
        style={{ scaleX: progressX, transformOrigin: "0% 50%" }}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #ec4899, #a855f7, #3b82f6)",
        }}
      />

      {isMobile ? (
        <Box sx={{ display: "flex", px: 2.5, py: 1.5, justifyContent: "space-between", alignItems: "center" }}>
          <Box
            onClick={() => scrollToSection("home-section")}
            sx={{
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 18,
              color: "#f5f5f7",
              "& span": {
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            &lt;<span>Thiago</span>/&gt;
          </Box>
          <HeaderMenu
            menuItems={menuItems}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            onView={handleView}
            onDownload={handleDownload}
          />
        </Box>
      ) : (
        <Box
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { md: 4, lg: 6 },
            py: 2,
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Box
            onClick={() => scrollToSection("home-section")}
            sx={{
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 22,
              color: "#f5f5f7",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.04)" },
              "& span": {
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            &lt;<span>Thiago</span>/&gt;
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "999px",
              px: 1,
              py: 0.5,
            }}
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <Box
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    position: "relative",
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? "#fff" : "#a8a8b3",
                    transition: "color 0.2s",
                    "&:hover": { color: "#fff" },
                    zIndex: 1,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(59,130,246,0.25))",
                        border: "1px solid rgba(168,85,247,0.35)",
                        borderRadius: "999px",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
            <Link
              href="https://github.com/lenx0"
              target="_blank"
              rel="noopener"
              sx={{ color: "#a8a8b3", display: "flex", transition: "color 0.2s, transform 0.2s", "&:hover": { color: "#fff", transform: "translateY(-2px)" } }}
            >
              <GitHub sx={{ fontSize: 22 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thiagoberaldo06/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#a8a8b3", display: "flex", transition: "color 0.2s, transform 0.2s", "&:hover": { color: "#fff", transform: "translateY(-2px)" } }}
            >
              <LinkedIn sx={{ fontSize: 22 }} />
            </Link>
            <Button
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
              sx={{
                ml: 1,
                px: 2.5,
                py: 1,
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                borderRadius: "999px",
                boxShadow: "0 8px 24px rgba(168,85,247,0.35)",
                "&:hover": { background: "linear-gradient(135deg, #c084fc, #60a5fa)", boxShadow: "0 10px 30px rgba(168,85,247,0.5)" },
              }}
            >
              Currículo
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    background: "rgba(20,20,28,0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    color: "#f5f5f7",
                  },
                },
              }}
            >
              <MenuItem onClick={handleView} sx={{ fontWeight: 500, fontSize: 14, "&:hover": { background: "rgba(168,85,247,0.15)" } }}>
                <VisibilityIcon sx={{ mr: 1.5, fontSize: 18 }} />
                Visualizar
              </MenuItem>
              <MenuItem onClick={handleDownload} sx={{ fontWeight: 500, fontSize: 14, "&:hover": { background: "rgba(168,85,247,0.15)" } }}>
                <DownloadIcon sx={{ mr: 1.5, fontSize: 18 }} />
                Baixar PDF
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;

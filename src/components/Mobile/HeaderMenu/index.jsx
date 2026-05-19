import { useState } from "react";
import { Box, IconButton, Drawer, List, ListItemButton, ListItemText, Link, Divider, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { GitHub, LinkedIn, Visibility, Download } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const HeaderMenu = ({ menuItems, scrollToSection, activeSection, onView, onDownload }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={toggle}
        sx={{
          color: "#f5f5f7",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          "&:hover": { background: "rgba(168,85,247,0.15)" },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggle}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "85vw", sm: 320 },
              background: "rgba(10,10,15,0.95)",
              backdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              color: "#f5f5f7",
            },
          },
        }}
      >
        <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 18, "& span": { background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }}>
            &lt;<span>Thiago</span>/&gt;
          </Box>
          <IconButton onClick={toggle} sx={{ color: "#a8a8b3" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <List sx={{ p: 2 }}>
          <AnimatePresence>
            {open &&
              menuItems.map((item, idx) => {
                const isActive = activeSection === item.key;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <ListItemButton
                      onClick={() => handleNav(item.id)}
                      sx={{
                        borderRadius: 2,
                        mb: 0.5,
                        background: isActive ? "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(59,130,246,0.18))" : "transparent",
                        border: `1px solid ${isActive ? "rgba(168,85,247,0.35)" : "transparent"}`,
                        "&:hover": { background: "rgba(255,255,255,0.05)" },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontWeight: 600, fontSize: 16, color: isActive ? "#fff" : "#d4d4dc" }}
                      />
                    </ListItemButton>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 1 }} />

        <Box sx={{ px: 3, py: 2 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#6b6b7a", textTransform: "uppercase", letterSpacing: "0.15em", mb: 1.5 }}>
            Currículo
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              onClick={() => { onView?.(); setOpen(false); }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: 2, cursor: "pointer", color: "#d4d4dc", "&:hover": { background: "rgba(168,85,247,0.15)", color: "#fff" } }}
            >
              <Visibility sx={{ fontSize: 18 }} /> Visualizar
            </Box>
            <Box
              onClick={() => { onDownload?.(); setOpen(false); }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: 2, cursor: "pointer", color: "#d4d4dc", "&:hover": { background: "rgba(168,85,247,0.15)", color: "#fff" } }}
            >
              <Download sx={{ fontSize: 18 }} /> Baixar PDF
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <Box sx={{ p: 3, display: "flex", gap: 2 }}>
          <Link href="https://github.com/lenx0" target="_blank" rel="noopener" sx={{ color: "#a8a8b3", "&:hover": { color: "#fff" } }}>
            <GitHub />
          </Link>
          <Link href="https://www.linkedin.com/in/thiagoberaldo06/" target="_blank" rel="noopener" sx={{ color: "#a8a8b3", "&:hover": { color: "#fff" } }}>
            <LinkedIn />
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderMenu;

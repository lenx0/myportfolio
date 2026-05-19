import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowDownward, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { useEffect, useState } from "react";
import scrollToSection from "../Utility/scroll";

const roles = [
  "Engenheiro de Software",
  "Desenvolvedor Fullstack",
  "Apaixonado por Desenvolvimento",
];

const techBadges = [
  "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", "Next.js",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const full = roles[roleIndex];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === full) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = full.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <Box
      id="home-section"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 5, md: 8 },
        pt: { xs: 14, md: 10 },
        pb: { xs: 8, md: 6 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1100px", px: "0 !important", textAlign: "center" }}>
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.85,
              borderRadius: "999px",
              background: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.25)",
              color: "#86efac",
              fontSize: 13,
              fontWeight: 500,
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 0 rgba(34,197,94,0.7)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.7)" },
                  "70%": { boxShadow: "0 0 0 10px rgba(34,197,94,0)" },
                  "100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0)" },
                },
              }}
            />
            Disponível para novas oportunidades
          </Box>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: { xs: 14, md: 16 },
              color: "#a8a8b3",
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "#c084fc" }}>const</Box>{" "}
            <Box component="span" sx={{ color: "#60a5fa" }}>developer</Box>{" "}
            <Box component="span" sx={{ color: "#f5f5f7" }}>=</Box>{" "}
            <Box component="span" sx={{ color: "#86efac" }}>&quot;Olá, eu sou&quot;</Box>
          </Typography>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.75rem", sm: "4rem", md: "5.5rem", lg: "6.5rem" },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              mb: 1,
              background: "linear-gradient(135deg, #f5f5f7 0%, #a8a8b3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Thiago
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.75rem", sm: "4rem", md: "5.5rem", lg: "6.5rem" },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beraldo.
          </Typography>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 4,
              minHeight: { xs: 36, md: 48 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "1.2rem", md: "1.75rem" },
              fontWeight: 600,
              color: "#d4d4dc",
            }}
          >
            <Box component="span">{displayed}</Box>
            <Box component="span" className="cursor-blink" sx={{ height: { xs: 22, md: 30 } }} />
          </Box>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Typography
            sx={{
              maxWidth: 640,
              mx: "auto",
              mt: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
              color: "#a8a8b3",
            }}
          >
            Construo experiências digitais escaláveis com foco em performance,
            código limpo e atenção aos detalhes. Transformo ideias complexas em
            interfaces elegantes e produtos que entregam resultado.
          </Typography>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Box sx={{ mt: 5, display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              onClick={() => scrollToSection("projects-section")}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                borderRadius: "999px",
                boxShadow: "0 10px 30px rgba(168,85,247,0.4)",
                transition: "all 0.3s",
                "&:hover": {
                  background: "linear-gradient(135deg, #c084fc, #60a5fa)",
                  boxShadow: "0 14px 40px rgba(168,85,247,0.55)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contact-section")}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: 15,
                fontWeight: 600,
                color: "#f5f5f7",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                transition: "all 0.3s",
                "&:hover": {
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(168,85,247,0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Entrar em Contato
            </Button>
          </Box>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <Box sx={{ mt: 6, display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <Box
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: "999px",
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#d4d4dc",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(168,85,247,0.1)",
                      borderColor: "rgba(168,85,247,0.35)",
                      color: "#fff",
                    },
                  }}
                >
                  {tech}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Box sx={{ mt: 5, display: "flex", gap: 1.5, justifyContent: "center" }}>
            {[
              { icon: <GitHub />, href: "https://github.com/lenx0", label: "GitHub" },
              { icon: <LinkedIn />, href: "https://www.linkedin.com/in/thiagoberaldo06/", label: "LinkedIn" },
              { icon: <Mail />, href: "mailto:thiagoberaldo@example.com", label: "Email", onClick: (e) => { e.preventDefault(); scrollToSection("contact-section"); } },
            ].map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                onClick={s.onClick}
                aria-label={s.label}
                sx={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#a8a8b3",
                  transition: "all 0.25s",
                  "&:hover": {
                    color: "#fff",
                    background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2))",
                    borderColor: "rgba(168,85,247,0.5)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {s.icon}
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          onClick={() => scrollToSection("about-section")}
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            color: "#6b6b7a",
            transition: "color 0.2s",
            "&:hover": { color: "#fff" },
          }}
        >
          <Typography sx={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
            Scroll
          </Typography>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowDownward sx={{ fontSize: 20 }} />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;

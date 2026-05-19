import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Facebook, Mail, Download } from "@mui/icons-material";

const socials = [
  { icon: <GitHub />, href: "https://github.com/lenx0", label: "GitHub" },
  { icon: <LinkedIn />, href: "https://www.linkedin.com/in/thiagoberaldo06/", label: "LinkedIn" },
  { icon: <Facebook />, href: "https://www.facebook.com/thiago.freitas.718/", label: "Facebook" },
];

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/archives/curriculo-thiago.pdf";
    link.download = "curriculo-thiago.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="contact-section"
      component="footer"
      sx={{
        position: "relative",
        mt: { xs: 6, md: 10 },
        pt: { xs: 8, md: 12 },
        pb: 4,
        px: { xs: 3, sm: 5, md: 8 },
        background: "linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.04) 50%, rgba(59,130,246,0.06) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1100px", mx: "auto", px: "0 !important" }}>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                display: "inline-block",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                px: 2,
                py: 0.75,
                borderRadius: "999px",
                border: "1px solid rgba(168,85,247,0.25)",
                background: "rgba(168,85,247,0.08)",
                color: "#c084fc",
                mb: 3,
              }}
            >
              Vamos conversar
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Tem um <Box component="span" sx={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>projeto em mente?</Box>
            </Typography>
            <Typography sx={{ maxWidth: 560, mx: "auto", color: "#a8a8b3", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.65, mb: 4 }}>
              Estou aberto a oportunidades, colaborações e novos desafios. Vamos transformar boas ideias em produtos excepcionais.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                component="a"
                href="https://www.linkedin.com/in/thiagoberaldo06/"
                target="_blank"
                rel="noopener"
                startIcon={<Mail />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  borderRadius: "999px",
                  boxShadow: "0 10px 30px rgba(168,85,247,0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #c084fc, #60a5fa)",
                    boxShadow: "0 14px 40px rgba(168,85,247,0.55)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Falar comigo
              </Button>
              <Button
                onClick={handleDownload}
                startIcon={<Download />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#f5f5f7",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  "&:hover": {
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(168,85,247,0.5)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Baixar CV
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            mb: 4,
          }}
        />

        {/* Bottom row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 18,
                "& span": {
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              &lt;<span>Thiago Beraldo</span>/&gt;
            </Box>
            <Typography sx={{ fontSize: 13, color: "#6b6b7a", mt: 0.5 }}>
              Portfolio desenvolvido por Thiago Beraldo — Engenheiro de Software
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5 }}>
            {socials.map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                sx={{
                  width: 42,
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#a8a8b3",
                  transition: "all 0.25s",
                  textDecoration: "none",
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
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

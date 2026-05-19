import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Translate, Code, Speed, Cloud } from "@mui/icons-material";
import SectionWrapper from "../common/SectionWrapper";

const bios = {
  pt: `Desenvolvedor Full Stack com sólida experiência em tecnologia e desenvolvimento de software, atuando na criação de sistemas escaláveis, modernos e focados em performance. Experiência com sistemas fiscais, vendas, integrações e aplicações web completas.

Tenho perfil analítico, atenção aos detalhes e foco em código limpo, arquitetura e experiência do usuário. Explore meus projetos e conheça mais sobre minha trajetória profissional.`,
  en: `Full Stack Developer with solid experience in technology and software development, building scalable, modern systems focused on performance. Experience with tax systems, sales platforms, integrations and complete web applications.

I have an analytical profile, attention to detail and a focus on clean code, architecture and user experience. Explore my projects and learn more about my professional journey.`,
};

const highlights = [
  { icon: <Code />, title: "Código limpo", desc: "Arquitetura testável e manutenível" },
  { icon: <Speed />, title: "Performance", desc: "Foco em latência, render e otimização" },
  { icon: <Cloud />, title: "Cloud-Ready", desc: "AWS, Docker e CI/CD" },
];

const About = () => {
  const [lang, setLang] = useState("pt");

  return (
    <SectionWrapper
      id="about-section"
      eyebrow="Sobre Mim"
      title={<>Engenharia com <Box component="span" sx={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>propósito</Box></>}
      subtitle="Conheça um pouco da minha jornada e do que me move como engenheiro de software."
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ position: "relative", width: "100%", maxWidth: 380, mx: "auto" }}>
            <Box
              sx={{
                position: "absolute",
                inset: -8,
                borderRadius: 4,
                background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)",
                opacity: 0.5,
                filter: "blur(30px)",
                animation: "pulseGlow 4s ease-in-out infinite",
                "@keyframes pulseGlow": {
                  "0%, 100%": { opacity: 0.4 },
                  "50%": { opacity: 0.7 },
                },
              }}
            />
            <Box
              component="img"
              src="/assets/images/profile.jpg"
              alt="Thiago de Freitas Beraldo"
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
              }}
            />
            {/* Floating tags */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ position: "absolute", top: -10, right: -10 }}
            >
              <Box
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: "999px",
                  background: "rgba(20,20,28,0.95)",
                  border: "1px solid rgba(168,85,247,0.4)",
                  backdropFilter: "blur(10px)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                Fullstack Pleno
              </Box>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              style={{ position: "absolute", bottom: -10, left: -10 }}
            >
              <Box
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: "999px",
                  background: "rgba(20,20,28,0.95)",
                  border: "1px solid rgba(59,130,246,0.4)",
                  backdropFilter: "blur(10px)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {"</> based in Brazil"}
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Bio */}
        <Box>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f5f5f7" }}>
                Thiago de Freitas Beraldo
              </Typography>
              <Button
                onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                startIcon={<Translate />}
                sx={{
                  fontSize: 12,
                  px: 1.75,
                  py: 0.5,
                  color: "#d4d4dc",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  "&:hover": { background: "rgba(168,85,247,0.15)", borderColor: "rgba(168,85,247,0.4)", color: "#fff" },
                }}
              >
                {lang === "pt" ? "EN" : "PT"}
              </Button>
            </Box>

            <Box>
              {bios[lang].split("\n\n").map((p, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "#a8a8b3",
                    lineHeight: 1.75,
                    mb: 2,
                    fontSize: { xs: "0.95rem", md: "1.02rem" },
                  }}
                >
                  {p}
                </Typography>
              ))}
            </Box>

            {/* Highlights cards */}
            <Box
              sx={{
                mt: 4,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
              }}
            >
              {highlights.map((h, idx) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      height: "100%",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "rgba(168,85,247,0.06)",
                        borderColor: "rgba(168,85,247,0.3)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(59,130,246,0.18))",
                        color: "#c084fc",
                        mb: 1.5,
                      }}
                    >
                      {h.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#f5f5f7", mb: 0.5 }}>
                      {h.title}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "#a8a8b3", lineHeight: 1.4 }}>
                      {h.desc}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default About;

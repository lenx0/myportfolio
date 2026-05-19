import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Work, Business, RocketLaunch, FormatQuote } from "@mui/icons-material";
import SectionWrapper from "../common/SectionWrapper";

const experiences = [
  {
    icon: <RocketLaunch />,
    period: "Jan 2025 — Atual",
    role: "Desenvolvedor Fullstack Pleno",
    company: "IOB",
    color: "#a855f7",
    description:
      "Desenvolvimento de soluções robustas para o mercado contábil e fiscal. Foco em arquitetura escalável, análise de performance e qualidade de código em ambiente corporativo de larga escala.",
    tags: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    icon: <Business />,
    period: "Jul 2022 — Abr 2024",
    role: "Desenvolvedor Front-end Júnior",
    company: "AG.labs",
    color: "#3b82f6",
    description:
      "Desenvolvimento de interfaces para múltiplos clientes B2B. Atuação em melhorias contínuas, componentização e adoção de boas práticas de UI/UX em projetos com alto volume de uso.",
    tags: ["React", "JavaScript", "Material-UI", "Redux", "REST APIs"],
  },
  {
    icon: <Work />,
    period: "Jan 2022 — Jul 2022",
    role: "Desenvolvedor Júnior",
    company: "Alto Giro",
    color: "#ec4899",
    description:
      "Início da carreira como desenvolvedor com foco em aplicações web. Aprendizado intensivo em fundamentos, versionamento e trabalho em equipe ágil.",
    tags: ["JavaScript", "HTML5", "CSS3", "Git"],
  },
];

const Experiences = () => {
  return (
    <SectionWrapper
      id="experience-section"
      eyebrow="Trajetória"
      title={<>Minha <Box component="span" sx={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>experiência</Box></>}
      subtitle="Evolução profissional construída com curiosidade, dedicação e aprendizado constante."
    >
      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
        {/* Vertical timeline line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 20, md: "50%" },
            top: 0,
            bottom: 0,
            width: "2px",
            transform: { md: "translateX(-1px)" },
            background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.4) 10%, rgba(59,130,246,0.4) 90%, transparent)",
          }}
        />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: { xs: "auto 1fr", md: "1fr auto 1fr" },
                  gap: { xs: 2, md: 4 },
                  mb: { xs: 4, md: 6 },
                  alignItems: "flex-start",
                }}
              >
                {/* Left card (desktop) */}
                <Box sx={{ display: { xs: "none", md: "block" }, gridColumn: 1, textAlign: "right" }}>
                  {isLeft && <CardContent exp={exp} alignRight />}
                </Box>

                {/* Node icon */}
                <Box
                  sx={{
                    gridColumn: { xs: 1, md: 2 },
                    gridRow: { xs: "span 1" },
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)`,
                        color: "#fff",
                        boxShadow: `0 0 0 4px rgba(10,10,15,1), 0 0 0 5px ${exp.color}55, 0 10px 30px ${exp.color}55`,
                        zIndex: 1,
                      }}
                    >
                      {exp.icon}
                    </Box>
                  </motion.div>
                </Box>

                {/* Right card (desktop) / always (mobile) */}
                <Box sx={{ gridColumn: { xs: 2, md: 3 } }}>
                  <Box sx={{ display: { xs: "block", md: isLeft ? "none" : "block" } }}>
                    <CardContent exp={exp} />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>

      {/* Einstein quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Box
          sx={{
            mt: 8,
            mx: "auto",
            maxWidth: 700,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(59,130,246,0.08))",
            border: "1px solid rgba(168,85,247,0.2)",
            backdropFilter: "blur(10px)",
            position: "relative",
          }}
        >
          <FormatQuote
            sx={{
              position: "absolute",
              top: -16,
              left: 24,
              fontSize: 48,
              color: "#a855f7",
              opacity: 0.4,
              transform: "scaleX(-1)",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              fontStyle: "italic",
              color: "#d4d4dc",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            &ldquo;A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.&rdquo;
          </Typography>
          <Typography sx={{ mt: 2, fontSize: 13, fontWeight: 600, color: "#c084fc", textAlign: "center", letterSpacing: "0.1em" }}>
            — ALBERT EINSTEIN
          </Typography>
        </Box>
      </motion.div>
    </SectionWrapper>
  );
};

const CardContent = ({ exp, alignRight = false }) => (
  <Box
    sx={{
      display: "inline-block",
      width: "100%",
      p: 3,
      borderRadius: 3,
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(10px)",
      textAlign: alignRight ? "right" : "left",
      transition: "all 0.3s",
      "&:hover": {
        background: "rgba(255,255,255,0.04)",
        borderColor: `${exp.color}55`,
        transform: alignRight ? "translateX(-4px)" : "translateX(4px)",
      },
    }}
  >
    <Typography sx={{ fontSize: 12, fontWeight: 600, color: exp.color, letterSpacing: "0.1em", textTransform: "uppercase", mb: 1 }}>
      {exp.period}
    </Typography>
    <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#f5f5f7", mb: 0.5 }}>
      {exp.role}
    </Typography>
    <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#a8a8b3", mb: 1.5 }}>
      @ {exp.company}
    </Typography>
    <Typography sx={{ fontSize: 13.5, color: "#a8a8b3", lineHeight: 1.6, mb: 2 }}>
      {exp.description}
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, justifyContent: alignRight ? "flex-end" : "flex-start" }}>
      {exp.tags.map((t) => (
        <Box
          key={t}
          sx={{
            px: 1.2,
            py: 0.35,
            fontSize: 11,
            fontWeight: 500,
            fontFamily: "'JetBrains Mono', monospace",
            borderRadius: "999px",
            color: "#d4d4dc",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {t}
        </Box>
      ))}
    </Box>
  </Box>
);

export default Experiences;

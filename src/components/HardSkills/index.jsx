import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code, Storage, Cloud, Brush, Build, Psychology,
} from "@mui/icons-material";
import SectionWrapper from "../common/SectionWrapper";

const skillGroups = [
  {
    title: "Linguagens",
    icon: <Code />,
    color: "#a855f7",
    items: ["JavaScript", "TypeScript", "Python", "C#", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libs",
    icon: <Build />,
    color: "#3b82f6",
    items: ["React", "Next.js", "Node.js", "Express", "Vite", "Framer Motion", "Redux", "Zustand"],
  },
  {
    title: "Bancos de Dados",
    icon: <Storage />,
    color: "#ec4899",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "Estilização",
    icon: <Brush />,
    color: "#22c55e",
    items: ["Tailwind", "Material-UI", "Styled Components", "Emotion"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud />,
    color: "#f97316",
    items: ["AWS", "Docker", "Git/GitHub", "CI/CD", "Vercel", "Linux"],
  },
  {
    title: "Soft Skills",
    icon: <Psychology />,
    color: "#06b6d4",
    items: ["Comunicação", "Trabalho em equipe", "Resolução de problemas", "Adaptabilidade", "Aprendizado contínuo"],
  },
];

const HardSkills = () => {
  return (
    <SectionWrapper
      id="skills-section"
      eyebrow="Stack & Habilidades"
      title={<>Ferramentas do meu <Box component="span" sx={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>arsenal</Box></>}
      subtitle="Tecnologias e habilidades que utilizo no dia a dia para construir aplicações modernas e escaláveis."
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            style={{ height: "100%" }}
          >
            <Box
              sx={{
                position: "relative",
                p: 3,
                height: "100%",
                borderRadius: 4,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                overflow: "hidden",
                transition: "all 0.4s",
                "&:hover": {
                  background: "rgba(255,255,255,0.04)",
                  borderColor: `${group.color}55`,
                  boxShadow: `0 20px 50px ${group.color}22`,
                  transform: "translateY(-6px)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                  opacity: 0.5,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${group.color}1f`,
                    color: group.color,
                    border: `1px solid ${group.color}33`,
                  }}
                >
                  {group.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "#f5f5f7" }}>
                  {group.title}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.85 }}>
                {group.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 + i * 0.03, duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.6,
                        borderRadius: "999px",
                        fontSize: 12.5,
                        fontWeight: 500,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#d4d4dc",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        transition: "all 0.2s",
                        "&:hover": {
                          background: `${group.color}22`,
                          color: "#fff",
                          borderColor: `${group.color}66`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {item}
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default HardSkills;

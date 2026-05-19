import { useState } from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { OpenInNew, ArrowForward } from "@mui/icons-material";
import SectionWrapper from "../common/SectionWrapper";
import ImageDialog from "./imageDialog";

function generateImageArray(prefix, count) {
  return Array.from({ length: count }, (_, i) => `/assets/images/${prefix}${i + 1}.png`);
}

const projectsData = [
  {
    title: "Eclipse 01",
    images: generateImageArray("eclipse", 1),
    access: "https://eclipse-01.vercel.app/",
    description: "Experiência imersiva 3D com cena interativa em Three.js, scroll inercial e animações deslumbrantes.",
    technologies: [
      "React 18",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Tailwind CSS",
      "PostCSS",
      "Autoprefixer",
      "Lucide React",
      "i18n",
    ],
    category: "Web App",
    featured: true,
  },
  {
    title: "Nebula Finance",
    images: generateImageArray("nebula", 1),
    access: "https://nebula-finance-rouge.vercel.app/",
    description: "Dashboard financeiro moderno com visualização de dados em tempo real, gráficos interativos e gestão de investimentos.",
    technologies: ["React 18", "Tailwind", "Framer Motion", "Recharts", "Zustand", "React Query"],
    category: "Web App",
    featured: true,
  },
  {
    title: "PrimeHaus Imobiliária",
    images: generateImageArray("primehaus", 1),
    access: "https://primehaus-imobiliaria.vercel.app/",
    description: "Plataforma imobiliária moderna com listagem de imóveis, filtros avançados e experiência fluida para compra e locação.",
    technologies: ["React 18", "TypeScript", "Tailwind", "Framer Motion", "Zustand", "React Query"],
    category: "Web App",
    featured: true,
  },
  {
    title: "Velaris Motors",
    images: generateImageArray("velaris", 1),
    access: "https://velaris-motors.vercel.app/",
    description: "Site institucional para concessionária de veículos com catálogo interativo e navegação animada.",
    technologies: ["React 18", "TypeScript", "Tailwind", "Framer Motion", "Swiper.js"],
    category: "Institucional",
    featured: true,
  },
  {
    title: "Eixo Zero",
    images: generateImageArray("eixo", 1),
    access: "https://eixozero.vercel.app/",
    description: "Site para loja de ferragens e ferramentas com localização via Google Maps e contato direto pelo WhatsApp.",
    technologies: ["React 18", "JavaScript", "Google Maps", "WhatsApp API", "CSS"],
    category: "Institucional",
  },
  {
    title: "PokeWorld",
    images: generateImageArray("poke", 5),
    access: "https://pokeworld-ochre.vercel.app/",
    description: "A enciclopédia definitiva do mundo Pokémon, com informações completas sobre pokémons, habilidades e muito mais.",
    technologies: ["React 18", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Web App",
  },
  {
    title: "WR Café Bar",
    images: generateImageArray("wr", 10),
    access: "https://wr-cafe-bar.vercel.app",
    description: "Site desenvolvido para um estabelecimento da cidade de Maringá - PR.",
    technologies: ["React 18", "MUI v5", "Framer Motion", "React Router DOM v6", "React Leaflet", "Leaflet", "react-material-ui-carousel"],
    category: "Institucional",
  },
  {
    title: "Prometheus IA",
    images: generateImageArray("pro", 7),
    access: "https://prometheus-jet-one.vercel.app",
    description: "Website desenvolvido para uma empresa de Inteligência Artificial.",
    technologies: ["React", "JavaScript", "Tailwind"],
    category: "Institucional",
  },
  {
    title: "Timeline Slider",
    images: generateImageArray("slider-time", 1),
    access: "https://slider-timeline-pure-js.vercel.app",
    description: "Slider com linha do tempo desenvolvido em JS puro para integração em WordPress.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "UI Component",
  },
  {
    title: "Carrossel Moderno",
    images: generateImageArray("carrossel", 1),
    access: "https://carousel-pure-js.vercel.app",
    description: "Carrossel moderno com efeito de animação desenvolvido para integração em WordPress.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "UI Component",
  },
];

const categories = ["Todos", "Web App", "Institucional", "UI Component"];

const ProjectCard = ({ project, onOpenImage, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      style={{ height: "100%" }}
    >
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          transition: "all 0.4s",
          "&:hover": {
            borderColor: "rgba(168,85,247,0.4)",
            boxShadow: "0 30px 60px rgba(168,85,247,0.18)",
            transform: "translateY(-6px)",
          },
        }}
      >
        {/* Image */}
        <Box
          onClick={() => onOpenImage(project)}
          sx={{
            position: "relative",
            cursor: project.images.length > 1 ? "zoom-in" : "pointer",
            height: { xs: 200, md: 230 },
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 50%)",
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src={project.images[0]}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          />
          {project.featured && (
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                px: 1.5,
                py: 0.5,
                borderRadius: "999px",
                background: "linear-gradient(135deg, rgba(236,72,153,0.95), rgba(168,85,247,0.95))",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#fff",
                zIndex: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              ★ DESTAQUE
            </Box>
          )}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              px: 1.25,
              py: 0.4,
              borderRadius: "999px",
              background: "rgba(10,10,15,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: 10.5,
              fontWeight: 600,
              color: "#d4d4dc",
              zIndex: 2,
              backdropFilter: "blur(10px)",
            }}
          >
            {project.category}
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.15rem", color: "#f5f5f7", mb: 1 }}>
            {project.title}
          </Typography>
          <Typography sx={{ fontSize: 13.5, color: "#a8a8b3", lineHeight: 1.55, mb: 2.5, flex: 1 }}>
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
            {project.technologies.slice(0, 5).map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 1.25,
                  py: 0.4,
                  fontSize: 11,
                  fontWeight: 500,
                  fontFamily: "'JetBrains Mono', monospace",
                  borderRadius: "999px",
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  color: "#c084fc",
                }}
              >
                {tech}
              </Box>
            ))}
            {project.technologies.length > 5 && (
              <Tooltip
                arrow
                placement="top"
                title={
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, maxWidth: 240, p: 0.5 }}>
                    {project.technologies.slice(5).map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          px: 1,
                          py: 0.3,
                          fontSize: 11,
                          fontWeight: 500,
                          fontFamily: "'JetBrains Mono', monospace",
                          borderRadius: "999px",
                          background: "rgba(168,85,247,0.18)",
                          border: "1px solid rgba(168,85,247,0.35)",
                          color: "#e9d5ff",
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                }
                slotProps={{
                  tooltip: {
                    sx: {
                      background: "rgba(20,20,28,0.96)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderRadius: 2,
                      p: 1,
                      maxWidth: 260,
                    },
                  },
                  arrow: { sx: { color: "rgba(20,20,28,0.96)" } },
                }}
              >
                <Box
                  sx={{
                    px: 1.25,
                    py: 0.4,
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px dashed rgba(168,85,247,0.4)",
                    color: "#c084fc",
                    cursor: "help",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(168,85,247,0.12)",
                      borderStyle: "solid",
                      color: "#fff",
                    },
                  }}
                >
                  +{project.technologies.length - 5}
                </Box>
              </Tooltip>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
            <Box
              component="a"
              href={project.access}
              target="_blank"
              rel="noopener"
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                px: 2.5,
                py: 1.2,
                borderRadius: "999px",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                color: "#fff",
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                transition: "all 0.3s",
                "&:hover": {
                  background: "linear-gradient(135deg, #c084fc, #60a5fa)",
                  boxShadow: "0 8px 20px rgba(168,85,247,0.4)",
                },
              }}
            >
              Acessar
              <OpenInNew sx={{ fontSize: 14 }} />
            </Box>
            {project.images.length > 1 && (
              <IconButton
                onClick={() => onOpenImage(project)}
                sx={{
                  width: 40,
                  height: 40,
                  color: "#d4d4dc",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(168,85,247,0.15)", color: "#fff" },
                }}
                aria-label="Ver galeria"
              >
                <ArrowForward sx={{ fontSize: 16 }} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const [dialogProject, setDialogProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filtered = filter === "Todos" ? projectsData : projectsData.filter((p) => p.category === filter);

  const handleOpen = (project) => {
    setCurrentImageIndex(0);
    setDialogProject(project);
  };
  const handleClose = () => setDialogProject(null);
  const handleNext = () => setCurrentImageIndex((i) => Math.min(i + 1, (dialogProject?.images.length ?? 1) - 1));
  const handlePrev = () => setCurrentImageIndex((i) => Math.max(i - 1, 0));

  return (
    <SectionWrapper
      id="projects-section"
      eyebrow="Portfolio"
      title={<>Projetos <Box component="span" sx={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>selecionados</Box></>}
      subtitle="Uma seleção de trabalhos recentes — todos os projetos estão hospedados na nuvem e acessíveis em tempo real."
    >
      {/* Filter chips */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center", mb: 5 }}>
        {categories.map((cat) => (
          <Box
            key={cat}
            onClick={() => setFilter(cat)}
            sx={{
              position: "relative",
              px: 2.5,
              py: 0.9,
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              color: filter === cat ? "#fff" : "#a8a8b3",
              border: "1px solid rgba(255,255,255,0.08)",
              background: filter === cat ? "linear-gradient(135deg, #a855f7, #3b82f6)" : "rgba(255,255,255,0.03)",
              transition: "all 0.25s",
              "&:hover": { color: "#fff", borderColor: "rgba(168,85,247,0.4)" },
            }}
          >
            {cat}
          </Box>
        ))}
      </Box>

      {/* Grid */}
      <Box
        component={motion.div}
        layout
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.title} project={project} onOpenImage={handleOpen} index={idx} />
          ))}
        </AnimatePresence>
      </Box>

      {dialogProject && (
        <ImageDialog
          dialogOpen={Boolean(dialogProject)}
          handleDialogClose={handleClose}
          images={dialogProject.images}
          currentImageIndex={currentImageIndex}
          handleNextImage={handleNext}
          handlePrevImage={handlePrev}
          title={dialogProject.title}
          description={dialogProject.description}
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;

import { useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import CustomCard from "./card";

const projectsData = [
  {
    title: "Nebula Finance",
    images: generateImageArray("nebula", 1),
    access: "https://nebula-finance-rouge.vercel.app/",
    description:
      `Dashboard financeiro moderno com visualização de dados em tempo real, gráficos interativos e gestão de investimentos`,
    technologies:
      "React 18 | Tailwind | Framer Motion | Recharts | Zustand | React Query | Intl API",
  },
  {
    title: "PrimeHaus Imobiliária",
    images: generateImageArray("primehaus", 1),
    access: "https://primehaus-imobiliaria.vercel.app/",
    description:
      `Plataforma imobiliária moderna com listagem de imóveis, filtros avançados e experiência fluida para compra e locação`,
    technologies:
      "React 18 | TypeScript | Tailwind | Framer Motion | Zustand | React Query",
  },
  {
    title: "Velaris Motors",
    images: generateImageArray("velaris", 1),
    access: "https://velaris-motors.vercel.app/",
    description:
      `Site institucional para concessionária de veículos com catálogo interativo e navegação animada`,
    technologies:
      "React 18 | TypeScript | Tailwind | Framer Motion | Swiper.js | Lucide React",
  },
  {
    title: "Eixo Zero Ferragens e Ferramentas",
    images: generateImageArray("eixo", 1),
    access: "https://eixozero.vercel.app/",
    description:
      `Site institucional para loja de ferragens e ferramentas, com localização via Google Maps e contato direto pelo WhatsApp`,
    technologies:
      "React 18 | Javascript | Google Maps | WhatsApp API | CSS",
  },
  {
    title: "PokeWorld",
    images: generateImageArray("poke", 5),
    access: "https://pokeworld-ochre.vercel.app/",
    description:
      `A enciclopédia definitiva do mundo Pokémon, com informações completas sobre pokémons, habilidades e muito mais`,
    technologies:
      "React 18 | TypeScript | Tailwind | Framer Motion",
  },
  {
    title: "WR Café Bar",
    images: generateImageArray("wr", 10),
    access: "https://wr-cafe-bar.vercel.app",
    description:
      `Trabalho realizado para um estabelecimento da cidade de Maringá - PR`,
    technologies:
      "React | Javascript | Material-UI",
  },
  {
    title: "Prometheus IA",
    images: generateImageArray("pro", 7),
    access: "https://prometheus-jet-one.vercel.app",
    description:
      `Website desenvolvido para uma empresa de Inteligência Artificial`,
    technologies:
      "React | Javascript | Tailwind",
  },
  {
    title: "Slider com linha do tempo",
    images: generateImageArray("slider-time", 1),
    access: "https://slider-timeline-pure-js.vercel.app",
    description:
      `Slider com linha do tempo com dados fictícios, foi desenvolvido para ser utilizado em um site wordpress`,
    technologies:
      "Javascript | HTML | CSS",
  },
  {
    title: "Carrossel moderno com efeito de animação",
    images: generateImageArray("carrossel", 1),
    access: "https://carousel-pure-js.vercel.app",
    description:
      `Carrossel moderno com efeito de animação, foi desenvolvido para ser utilizado em um site wordpress`,
    technologies:
      "Javascript | HTML | CSS",
  },
];

function generateImageArray(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/assets/images/${prefix}${i}.png`);
  }
  return images;
}

const Projects = () => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box id="projects-section" sx={{ py: { xs: 4, md: 6 } }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight={800} color="#263138" gutterBottom>
          Projetos
        </Typography>
        <Box width={60} height={4} sx={{ background: "linear-gradient(90deg, #5d176b, #1484e0)", mx: "auto" }} borderRadius={2} mb={2} />
        <Typography fontWeight={600} color="#445964" fontSize={15}>
          Todos os projetos estão hospedados em servidores na nuvem
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          px: { xs: 1, sm: 4, md: 8 },
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          swiperRef.current?.autoplay?.stop();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          swiperRef.current?.autoplay?.start();
        }}
      >
        <Box
          sx={{
            py: 4,
            "& .swiper": { overflow: "visible" },
            "& .swiper-wrapper": { alignItems: "stretch" },
            "& .swiper-slide": {
              height: "auto",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              opacity: 0.4,
              transform: "scale(0.92)",
            },
            "& .swiper-slide-active, & .swiper-slide-next, & .swiper-slide-prev": {
              opacity: 1,
              transform: "scale(1)",
            },
            "& .swiper-pagination": {
              position: "relative",
              mt: 3,
            },
            "& .swiper-pagination-bullet": {
              width: 10,
              height: 10,
              background: "#c5cdd2",
              opacity: 1,
              transition: "all 0.3s ease",
            },
            "& .swiper-pagination-bullet-active": {
              width: 32,
              borderRadius: 5,
              background: "linear-gradient(90deg, #5d176b, #1484e0)",
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={800}
            loop
            centeredSlides
            grabCursor
            pagination={{ clickable: true }}
            breakpoints={{
              0:    { slidesPerView: 1,    spaceBetween: 16 },
              600:  { slidesPerView: 2,    spaceBetween: 20 },
              900:  { slidesPerView: 2.5,  spaceBetween: 24 },
              1200: { slidesPerView: 3,    spaceBetween: 28 },
              1536: { slidesPerView: 3.5,  spaceBetween: 32 },
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} style={{ height: "auto", display: "flex" }}>
                <Box sx={{ width: "100%", display: "flex", p: 1 }}>
                  <CustomCard
                    title={project.title}
                    access={project.access}
                    images={project.images}
                    description={project.description}
                    technologies={project.technologies}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {[
          { dir: "prev", Icon: ArrowBackIosNewRoundedIcon, side: { left: { xs: -4, sm: 0 } } },
          { dir: "next", Icon: ArrowForwardIosRoundedIcon, side: { right: { xs: -4, sm: 0 } } },
        ].map(({ dir, Icon, side }) => (
          <IconButton
            key={dir}
            onClick={() => dir === "prev" ? swiperRef.current?.slidePrev() : swiperRef.current?.slideNext()}
            aria-label={dir === "prev" ? "Projeto anterior" : "Próximo projeto"}
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              background: "#ffffff",
              color: "#5d176b",
              boxShadow: "0 4px 16px rgba(38, 49, 56, 0.18)",
              opacity: { xs: 1, md: isHovered ? 1 : 0.7 },
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #5d176b, #1484e0)",
                color: "#ffffff",
                transform: "translateY(-50%) scale(1.08)",
                boxShadow: "0 6px 24px rgba(93, 23, 107, 0.35)",
              },
              ...side,
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;

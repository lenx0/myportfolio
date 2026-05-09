import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import CustomCard from "./card";

const projectsData = [
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
          overflow: "hidden",
          "& .swiper-wrapper": { alignItems: "stretch" },
          "& .swiper-slide": { height: "auto" },
        }}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop
          slidesPerView="auto"
          spaceBetween={24}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} style={{ width: "300px", height: "auto", display: "flex" }}>
              <Box sx={{ width: "100%", display: "flex" }}>
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
    </Box>
  );
};

export default Projects;

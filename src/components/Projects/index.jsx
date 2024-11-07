import { Grid, Typography } from "@mui/material";
import CustomCard from "./card";

const projectsData = [
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
  return (
    <Grid id="projects-section" container gap={2} m="160px 5px 20px 5px" justifyContent="center">
      <Grid textAlign="center" container justifyContent="center" direction="column">
        <Grid item>
          <Typography
            variant="h3"
            mb={5}
            fontWeight={700}
            color="#445964"
          >
            Projetos
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h7"
            fontWeight={700}
            color="#445964e6"
          >Todos os projetos estão hospedados em servidores na nuvem</Typography>
        </Grid>
      </Grid>
      {projectsData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <CustomCard
            title={project.title}
            access={project.access}
            images={project.images}
            description={project.description}
            technologies={project.technologies}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;

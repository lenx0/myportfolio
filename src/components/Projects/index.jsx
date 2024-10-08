import { Grid, Typography } from "@mui/material";
import CustomCard from "./card";

const projectsData = [
  {
    title: "WR Café Bar",
    images: generateImageArray("wr", 10),
    access: "https://wr-cafe-bar.vercel.app/",
    description:
      `Site que reformulei para um barzinho da cidade de Maringá tanto a versão mobile como desktop, nas fotos você poderá como foi o resultado final, e como era o site antes!`,
    technologies:
      "Tecnologias: React, Javascript, Material-UI, HTML, CSS",
  },
  {
    title: "Prometheus IA",
    images: generateImageArray("pro", 7),
    access: "https://prometheus-jet-one.vercel.app",
    description:
      `Página com design moderno para oferecer serviços de inteligência artificial`,
    technologies:
      "Tecnologias: React, Javascript, Tailwind, HTML, CSS",
  },
  {
    title: "Client Manager",
    images: generateImageArray("cmanager", 3),
    access: "https://front-client-manager.vercel.app",
    description:
      `Este é um sistema para gerenciar cadastro de clientes, nele desenvolvi uma tabela onde são listados todos os clientes cadastrados, também temos um
    formulário de cadastro com validação, funções para deletar ou editar clientes, notificação para visualização de atividades recentes como: novos clientes
    cadastrados, deletados ou atualizados, também podemos buscar os clientes pelo nome e visualizar gráficos na página inicial de acordo com os dados atuais disponíveis no nosso banco de dados!`,
    technologies:
      "Tecnologias: React, Javascript, React-hook-form, HTML, CSS, Redux, Chart.js, Material-UI, Node, MongoDB",
  },
  {
    title: "Lenx Delivery",
    images: generateImageArray("delivery", 3),
    access: "https://front-lenxdelivery.vercel.app",
    description:
      "Site de restaurante, com cardápio, pedidos e localização ao vivo.",
    technologies:
      "Tecnologias: React, Javascript, HTML, CSS, Material-UI, Node, MongoDB, MapBox",
  },
  {
    title: "Curious Places",
    images: generateImageArray("curious", 1),
    access: "https://curious-places.vercel.app",
    description: "Site sobre alguns dos locais mais curiosos do mundo.",
    technologies: "Tecnologias: React, Javascript, HTML, CSS",
  }

  // {
  //   title: "Barba Brutal",
  //   images: generateImageArray("barba", 4),
  //   access: "https://barba-brutal-frontend-phi.vercel.app",
  //   description:
  //     `Sistema que ainda estou construindo de barbearia com imagens geradas por inteligência artificial, possibilidade de agendar o corte escolhendo o barbeiro com hora marcada.`,
  //   technologies:
  //     "Tecnologias: Turbo, Next, React, React Native, Javascript, Typescript, Tailwind, Prisma, Nest, Node, PostgreSQL",
  // },
  // {
  //   title: "QRCode generator",
  //   images: generateImageArray("qrcode", 1),
  //   access: "https://qr-code-generator-phi-six.vercel.app",
  //   description:
  //     "Este é um gerador de QRCode simples e prático, adicionei também um histórico que salva automaticamente conforme você vai gerando seus códigos.",
  //   technologies:
  //     "Tecnologias: React, Javascript, HTML, CSS",
  // },
  // {
  //   title: "Pokemon Knowledge",
  //   images: generateImageArray("poke", 5),
  //   access: "https://poke-wiki-front.vercel.app",
  //   description:
  //     "Neste site podemos visualizar todos os detalhes dos pokémon existentes consumindo a PokeAPI.",
  //   technologies:
  //     "Tecnologias: Next, React, Javascript, HTML, CSS, Material-UI",
  // },
  // {
  //   title: "Business Manager",
  //   images: generateImageArray("manager", 5),
  //   access: "https://business-manager-liard.vercel.app",
  //   description:
  //     "Página desenvolvida para oferecer serviços de gerenciamento de negócios.",
  //   technologies:
  //     "Tecnologias: React, Vite, Javascript, HTML, CSS, Material-UI",
  // },
  // {
  //   title: "Pokedex",
  //   images: generateImageArray("pokedex", 1),
  //   access: "https://pokedex-mu-ten.vercel.app",
  //   description: "Pokedex com sprites animadas",
  //   technologies: "Tecnologias: Javascript, HTML, CSS",
  // },
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
      <Grid container justifyContent="center">
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

// Importação de imagens com aliases
import deliveryImages from "/assets/images/delivery";
import pokeImages from "/assets/images/poke";
import managerImages from "/assets/images/manager";

const projectsData = [
  {
    title: "Lenx Delivery",
    images: generateImageArray("delivery", 3), // 3 imagens de delivery
    description:
      "Projeto demonstrativo onde você consegue visualizar um cardápio, escolher o local de entrega e realizar o pedido.",
    technologies: "Tecnologias: React, Javascript, HTML, CSS, Material-UI, Node, MongoDB, MapBox"
  },
  {
    title: "PokeAPI",
    images: generateImageArray("poke", 5), // 5 imagens de poke
    description:
      "Neste site podemos visualizar todos os detalhes dos pokémon existentes consumindo a PokeAPI.",
    technologies: "Tecnologias: Next, React, Javascript, HTML, CSS, Material-UI"
  },
  {
    title: "Gerenciamento de Negócios",
    images: generateImageArray("manager", 5), // 5 imagens de manager
    description:
      "Página desenvolvida para oferecer serviços de gerenciamento de negócios.",
    technologies: "Tecnologias: React, Vite, Javascript, HTML, CSS, Material-UI"
  }
];

// Função para gerar array de caminhos das imagens
function generateImageArray(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(require(`/assets/images/${prefix}${i}.png`));
  }
  return images;
}

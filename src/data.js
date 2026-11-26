const imgs = (prefix, count) =>
  Array.from({ length: count }, (_, i) => `/assets/images/${prefix}${i + 1}.png`);

export const profile = {
  name: "Thiago de Freitas Beraldo",
  role: "Desenvolvedor Full Stack",
  location: "Maringá, PR — Brasil",
  photo: "/assets/images/profile.jpg",
  intro:
    "Construo sistemas web do banco de dados à interface. Hoje trabalho com produtos fiscais e contábeis no Grupo IOB, e nas horas livres desenvolvo sites e aplicações para pequenos negócios.",
  about: [
    "Comecei em 2022 escrevendo APIs em Node.js e C#, migrei para o front-end trabalhando com React e Next.js para clientes B2B, e hoje atuo nas duas pontas em um ambiente corporativo de larga escala, com serviços rodando na AWS.",
    "Gosto de código legível, interfaces rápidas e de entender o problema de negócio antes de escrever a primeira linha. Fora do trabalho, uso projetos pessoais para experimentar coisas novas — 3D no navegador, dashboards, sistemas de gestão.",
  ],
  links: {
    github: "https://github.com/lenx0",
    linkedin: "https://www.linkedin.com/in/thiagoberaldo06/",
    email: "thiagofreitas1106@gmail.com",
    cv: "/assets/archives/curriculo-thiago.pdf",
  },
};

export const projects = [
  { title: "Multi Idle Manager", year: "Produto", images: imgs("multidle", 1), url: "https://multidle.com.br",
    description: "Produto próprio para rodar várias contas de jogos idle de navegador ao mesmo tempo, cada uma com login e dados isolados. Modelo freemium com licença Pro única para PC e celular.",
    parts: [
      { name: "Desktop (Windows)", text: "Contas em mosaico de telas, CPU e memória por conta em tempo real, descarte de contas inativas sem perder o login e execução na bandeja.", stack: "Electron · React · TypeScript · Tailwind" },
      { name: "Android", text: "Até 4 contas na tela, perfis de WebView separados por conta e execução em segundo plano.", stack: "React Native · Expo" },
      { name: "Site e licenças", text: "Página de vendas em 3 idiomas e API de ativação de licenças com webhook de pagamento, sem guardar dados pessoais em texto puro.", stack: "Cloudflare Pages · Functions · D1" },
    ],
    stack: [], featured: true, wide: true },
  { title: "Eixo Zero", year: "Cliente · Institucional", images: imgs("eixo", 1), url: "https://eixozero.vercel.app/",
    description: "Site para loja de ferragens com Google Maps e contato via WhatsApp.",
    stack: ["React", "Google Maps"], featured: true, wide: true },
  { title: "Gestão Burger", year: "SaaS", images: imgs("gestao", 7), url: "https://gestao-burger.vercel.app/",
    description: "Sistema de gestão para restaurante: pedidos, estoque e relatórios, com autenticação e upload de imagens.",
    stack: ["Next.js", "Prisma", "Supabase", "Tailwind", "shadcn/ui"] },
  { title: "Eclipse 01", year: "Experimento 3D", images: imgs("eclipse", 1), url: "https://eclipse-01.vercel.app/",
    description: "Cena 3D interativa no navegador, com scroll inercial e animações sincronizadas à rolagem.",
    stack: ["React", "TypeScript", "Three.js", "R3F", "GSAP"] },
  { title: "Nebula Finance", year: "Web App", images: imgs("nebula", 1), url: "https://nebula-finance-rouge.vercel.app/",
    description: "Dashboard financeiro com gráficos interativos e acompanhamento de investimentos.",
    stack: ["React", "Recharts", "Zustand", "React Query"] },
  { title: "Pokémon Viewer", year: "Web App", images: imgs("pokeviewer", 1), url: "https://pokemon-viewer-six.vercel.app/",
    description: "Consulta de pokémons com busca, detalhes completos e visualização do modelo 3D.",
    stack: ["Next.js", "Three.js", "TanStack Query", "Tailwind"] },
  { title: "PrimeHaus Imobiliária", year: "Web App", images: imgs("primehaus", 1), url: "https://primehaus-imobiliaria.vercel.app/",
    description: "Listagem de imóveis com filtros para compra e locação.",
    stack: ["React", "TypeScript", "Tailwind", "Zustand"] },
  { title: "Velaris Motors", year: "Institucional", images: imgs("velaris", 1), url: "https://velaris-motors.vercel.app/",
    description: "Site para concessionária com catálogo de veículos.",
    stack: ["React", "TypeScript", "Tailwind", "Swiper"] },
  { title: "WR Café Bar", year: "Cliente", images: imgs("wr", 5), url: "https://wr-cafe-bar.vercel.app",
    description: "Site e cardápio para um bar de Maringá, com mapa de localização.",
    stack: ["React", "MUI", "Leaflet"] },
  { title: "Prometheus IA", year: "Institucional", images: imgs("pro", 7), url: "https://prometheus-jet-one.vercel.app",
    description: "Site institucional para uma empresa de inteligência artificial.",
    stack: ["React", "Tailwind"] },
  { title: "Timeline Slider", year: "Componente", images: imgs("slider-time", 1), url: "https://slider-timeline-pure-js.vercel.app",
    description: "Slider com linha do tempo em JavaScript puro, feito para embutir em WordPress.",
    stack: ["JavaScript", "CSS"] },
  { title: "Carrossel", year: "Componente", images: imgs("carrossel", 1), url: "https://carousel-pure-js.vercel.app",
    description: "Carrossel animado sem dependências, também para WordPress.",
    stack: ["JavaScript", "CSS"] },
];

export const experiences = [
  { period: "2025 — atual", role: "Desenvolvedor Full Stack Pleno", company: "Grupo IOB",
    description: "Sistemas para o mercado contábil e fiscal. Back-end em Node.js e C#, front-end em JavaScript, bancos SQL Server, MongoDB e Redis, e operação de serviços na AWS (ECS, EC2, S3, CloudWatch).",
    stack: ["Node.js", "C#", "SQL Server", "MongoDB", "AWS"] },
  { period: "2022 — 2024", role: "Desenvolvedor Front-end", company: "AG.labs",
    description: "Interfaces web e mobile para clientes B2B com Next.js e React, componentização, validação de formulários e deploy em AWS Amplify e Vercel, junto ao time de design.",
    stack: ["React", "Next.js", "MUI", "Figma"] },
  { period: "2022", role: "Desenvolvedor Júnior", company: "Alto Giro",
    description: "Primeiro emprego na área: APIs em Node.js e C#, MongoDB e páginas em React.",
    stack: ["Node.js", "C#", "MongoDB", "React"] },
];

export const stack = [
  { group: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Material-UI", "Three.js"] },
  { group: "Back-end", items: ["Node.js", "Express", "C# / .NET", "REST", "Prisma"] },
  { group: "Dados", items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: "Infra", items: ["AWS", "Docker", "CI/CD", "Vercel", "Linux", "Git"] },
];

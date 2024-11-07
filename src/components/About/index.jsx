import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import HexagonContainer from "./hexagon";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const About = () => {
  const [isPortuguese, setIsPortuguese] = useState(true);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClick = () => {
    setIsPortuguese(!isPortuguese);
  };

  return (
    <Stack id="about-section" alignItems="center" spacing={5} mt={5}>
      <Box>
        <HexagonContainer>
          <img src="/assets/images/profile.jpg" alt="Hexagon content" />
        </HexagonContainer>
      </Box>
      <Stack>
        <Typography
          fontSize={isMobile ? 25 : 48}
          fontWeight={700}
          color="#445964"
        >
          Thiago de Freitas Beraldo
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant="h6"
          textAlign="justify"

          color="#445964"
        >
          {isPortuguese ? (
            <>
              Olá, atuo na área de TI há pelo menos 10 anos, comecei a desenvolver software há 4 anos, trabalhando com HTML, CSS, JavaScript, React, Next.js, Node, MongoDB, PostgreSQL, e Material-UI.
              <br />
              <br />
              Atualmente estou buscando novas oportunidades no mercado de desenvolvimento de software. Posso atuar em projetos web e mobile.
              Possuo também habilidades para administrar infraestrutura de desenvolvimento, como utilização de containers e servidores como AWS, Vercel, Heroku, Render e Railway.
              <br />
              <br />
              Se você conseguiu saber um pouco sobre minhas habilidades, projetos, e experiências, entre em contato comigo caso haja interesse.
            </>
          ) : (
            <>
              Hello, I've been working in the IT field for at least 10 years, and I started developing software 4 years ago, working with HTML, CSS, JavaScript, React, Next.js, Node, MongoDB, PostgreSQL, and Material-UI.
              <br />
              <br />
              Currently, I am looking for new opportunities in the software development market. I can work on both web and mobile projects. I also have skills in managing development infrastructure, such as using containers and servers like AWS, Vercel, Heroku, Render, and Railway.
              <br />
              <br />
              If you've learned a bit about my skills, projects, and experiences, feel free to contact me if interested.
            </>
          )}
        </Typography>
      </Stack>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{
          width: "20%",
          height: "50px",
          backgroundColor: "#263138",
          borderRadius: 2,
          fontWeight: 700,
          transition: "transform 0.5s ease, color 0.3s ease",
            '&:hover': {
              backgroundColor: "#5d176b",
              color: "#ffffff",
              transform: "scale(1.1)",
            },
        }}
      >
        {isPortuguese ? "English" : "Portuguese"}
      </Button>
    </Stack>
  );
};

export default About;

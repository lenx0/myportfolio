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
    <Stack id="about-section" alignItems="center" spacing={5} mt={20}>
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
              Desenvolvedor Full Stack com experiência em desenvolvimento de sistemas web e mobile, utilizando tecnologias como
              React, React Native, Node, MongoDB, postgreSQL, material-ui e alguns frameworks como NextJs, NestJs e Express.
              <br />
              <br />
              Atualmente estou buscando novas oportunidades no mercado de desenvolvimento, tenho bastante experiência para desenvolver na stack que me proponho,
              mas também posso adiquirir conhecimento rapidamente em tecnologias necessárias para resolver os problemas propostos pelo projeto.
              <br />
              <br />
              Possuo também experiência para realizar deploy de aplicações front-end e back-end tanto na AWS utilizando o EC2 ou Amplify, bem como também utilizando servidores como
              Render.com, Railway, Vercel e Heroku.
              <br />
              <br />
              Devo citar que também tenho habilidades para desenvolver diagramas e design da UI para o front-end utilizando o figma.
            </>
          ) : (
            <>
              Full Stack Developer with experience in developing web and mobile systems using technologies such as React, React Native, Node, MongoDB, PostgreSQL, Material-UI, and frameworks like Next.js, NestJS, and Express.
              <br />
              <br />
              Currently, I am seeking new opportunities in the development market. I have substantial experience working with the stack I specialize in, but I can also quickly acquire knowledge in necessary technologies to address the challenges posed by the project.
              <br />
              <br />
              I also have experience deploying front-end and back-end applications on AWS using EC2 or Amplify, as well as on servers like Render.com, Railway, Vercel, and Heroku.
              <br />
              <br />
              In addition, I have skills in developing diagrams and UI designs using Figma.
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
          backgroundColor: "#263138",
          borderRadius: 2,
          fontWeight: 700
        }}
      >
        {isPortuguese ? "English" : "Portuguese"}
      </Button>
    </Stack>
  );
};

export default About;

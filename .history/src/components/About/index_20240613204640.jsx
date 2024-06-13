import { Box, Button, Stack, Typography } from "@mui/material";
import HexagonContainer from "./exagon";
import { useState } from "react";

const About = () => {
  const [isPortuguese, setIsPortuguese] = useState(true);

  const handleClick = () => {
    setIsPortuguese(!isPortuguese);
  };

  return (
    <Box
      sx={{
        mt: 10,
        mb: 20,
        display: "flex",
        width: 900,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack id="about-section" alignItems="center" spacing={5} mt={20}>
        <Box>
          <HexagonContainer>
            <img src="/assets/images/profile.jpg" alt="Hexagon content" />
          </HexagonContainer>
        </Box>
        <Stack>
          <Typography
            variant="h4"
            fontSize={64}
            fontWeight={700}
            color="#445964"
          >
            Thiago de Freitas Beraldo
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={22}
            color="#445964"
          >
            {isPortuguese ? (
              <>
                Olá, como vai? 
                <br />
                <br />
                Sou um desenvolvedor de software capaz de desenvolver aplicações do início ao fim incluindo o
                deploy na nuvem. Sou um profissional dedicado, analítico e
                cuidadoso, gosto de pensar fora da caixa, criar coisas diferentes, explorar novos universos e participar de boas equipes para
                poder contribuir com novas ideias e é claro aprender.
                <br />
                <br />
                Estou constantemente estudando diferentes tecnologias para não
                ficar para trás nessa esteira infinita que percorremos quando
                estamos no meio do desenvolvimento de software. Sou apaixonado
                por tecnologia e gosto de compartilhar minhas experiências e
                conhecimentos.
                <br />
                Possuo capacidade de atuar tanto no front-end como no back-end.
              </>
            ) : (
              <>
                Hello, I'm a Front-end Developer focused on the most used
                framework in the world, React!
                <br />
                <br />
                I'm capable of developing applications from start to finish
                including cloud deployment. I'm a persistent, analytical, and
                careful professional; I like to think outside the box, work in
                teams, and contribute with new ideas.
                <br />
                <br />
                I'm constantly studying different technologies so as not to fall
                behind on this infinite treadmill we're on when we're in the
                midst of software development. I'm passionate about technology
                and enjoy sharing my experiences and knowledge.
                <br />I have the ability to work on both the front-end and
                back-end.
              </>
            )}
          </Typography>
        </Stack>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#263138",
            borderRadius: 20,
          }}
        >
          {isPortuguese ? "Inglês" : "Português"}
        </Button>
      </Stack>
    </Box>
  );
};

export default About;

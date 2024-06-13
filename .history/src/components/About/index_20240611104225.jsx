import { Box, Button, Stack, Typography } from "@mui/material";
import SkillRating from "./rating";
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
        mt: 20,
        display: "flex",
        width: 900,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center" spacing={5} mt={20}>
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
                Olá, sou Desenvolvedor Front-end focado no framework mais
                utilizado do mundo, o React!
                <br />
                <br />
                Sou capaz de desenvolver aplicações do início ao fim incluindo o
                deploy na nuvem. Sou um profissional insistente, analítico e
                cuidadoso, gosto de pensar fora da caixa, trabalhar em equipe e
                poder contribuir com novas ideias.
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
        <Stack direction="row"
          gap={7}
          flexWrap="wrap"
          justifyContent="center">
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Hard Skills
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <SkillRating skill="React" rating={5} />
          <SkillRating skill="Javascript" rating={5} />
          <SkillRating skill="HTML" rating={5} />
          <SkillRating skill="CSS" rating={5} />
          <SkillRating skill="Material-UI" rating={5} />
          <SkillRating skill="Next" rating={4} />
          <SkillRating skill="Redux" rating={3} />
          <SkillRating skill="Node" rating={4} />
          <SkillRating skill="Styled Components" rating={3} />
          <SkillRating skill="Java" rating={3} />
          <SkillRating skill="Python" rating={3} />
          <SkillRating skill="Docker" rating={3} />
          <SkillRating skill="MongoDB" rating={3} />
          <SkillRating skill="MySQL" rating={3} />
          <SkillRating skill="PostGreSQL" rating={3} />
          <SkillRating skill="Oracle Database" rating={2} />
          <SkillRating skill="SQLite" rating={2} />
        </Stack>
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Ferramentas - Serviços
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <SkillRating skill="Git" rating={5} />
          <SkillRating skill="Github" rating={5} />
          <SkillRating skill="Asana" rating={5} />
          <SkillRating skill="Vercel" rating={5} />
          <SkillRating skill="AWS Amplify" rating={4} />
          <SkillRating skill="AWS EC2" rating={4} />
          <SkillRating skill="AWS S3" rating={4} />
          <SkillRating skill="MongoDB Atlas" rating={4} />
        </Stack>
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Soft Skills
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <SkillRating skill="Comunicação" rating={5} />
          <SkillRating skill="Trabalho em equipe" rating={5} />
          <SkillRating skill="Resolução de problemas" rating={5} />
          <SkillRating skill="Empatia" rating={5} />
          <SkillRating skill="Criatividade" rating={5} />
        </Stack>
      </Stack>
      </Stack>
    </Box>
  );
};

export default About;

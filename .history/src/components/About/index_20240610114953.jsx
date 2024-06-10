import { Box, Stack, Typography } from "@mui/material";
import SkillRating from "./rating";
import HexagonContainer from "./exagon";

const About = () => {
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
            Olá, sou Desenvolvedor Front-end focado no framework mais utilizado
            do mundo, o React!
            <br />
            <br />
            Sou capaz de desenvolver aplicações do início ao fim incluindo o
            deploy na nuvem. Sou um profissional insistente, analítico e
            cuidadoso, gosto de pensar fora da caixa, trabalhar em equipe e
            poder contribuir com novas ideias.
            <br />
            <br />
            Estou constantemente estudando e me atualizando para não ficar para
            trás nessa esteira infinita que percorremos quando estamos no meio
            do desenvolvimento de software. Sou apaixonado por tecnologia e
            gosto de compartilhar minhas experiências e conhecimentos.
          </Typography>
        </Stack>
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
        </Stack>
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Soft Skills
        </Typography>
        <Stack direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center">
          <SkillRating skill="Comunicação" rating={5} />
          <SkillRating skill="Trabalho em equipe" rating={5} />
          <SkillRating skill="Resolução de problemas" rating={5} />
          <SkillRating skill="Empatia" rating={5} />
          <SkillRating skill="Criatividade" rating={5} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;

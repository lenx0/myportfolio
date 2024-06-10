import { Box, Stack, Typography, styled, SvgIcon } from "@mui/material";
import { Hexagon } from "@mui/icons-material";

const About = () => {
  const HexagonContainer = styled(Box)(({ theme }) => ({
    // width: "100px",
    // height: "115.47px",
    width: "200px",
    height: "230.94px",
    // width: "300px",
    // height: "346.41px",
    position: "relative",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      clipPath: "inherit",
    },
  }));

  const SkillRating = ({ skill, rating }) => {
    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="h6" fontWeight={700} color="#445964">
          {skill}
        </Typography>
        <Stack direction="row" spacing={0.5}>
          {Array.from({ length: 5 }).map((_, index) => (
            <SvgIcon
              key={index}
              component={Hexagon}
              style={{ color: index < rating ? "#445964" : "#E0E0E0" }}
            />
          ))}
        </Stack>
      </Stack>
    );
  };

  return (
    <Box mt={20} display="flex" maxWidth={1600} flexDirection="column" alignItems="center">
      <Stack alignItems="center" spacing={5} mt={20}>
        <Stack>
          <HexagonContainer>
            <img src="/assets/images/profile.jpg" alt="Hexagon content" />
          </HexagonContainer>
        </Stack>
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
        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <SkillRating skill="Next" rating={4} />
          <SkillRating skill="React" rating={5} />
          <SkillRating skill="Javascript" rating={5} />
          <SkillRating skill="Java" rating={3} />
          <SkillRating skill="HTML" rating={5} />
          <SkillRating skill="CSS" rating={5} />
          <SkillRating skill="Material-UI" rating={5} />
          <SkillRating skill="Postgres" rating={2} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;

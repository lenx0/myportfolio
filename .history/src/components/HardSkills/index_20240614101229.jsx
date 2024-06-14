import { Stack, Typography } from "@mui/material";
import SkillRating from "./rating";

const HardSkills = () => {
  return (
    <Stack id="hardskills-section" direction="row" flexWrap="wrap" justifyContent="center">
      <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
        Hard Skills
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
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
      <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
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
      <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
        <SkillRating skill="Comunicação" rating={5} />
        <SkillRating skill="Trabalho em equipe" rating={5} />
        <SkillRating skill="Resolução de problemas" rating={5} />
        <SkillRating skill="Empatia" rating={5} />
        <SkillRating skill="Criatividade" rating={5} />
      </Stack>
    </Stack>
  )

};

export default HardSkills;

import { Hexagon } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Definindo um componente SvgIcon estilizado
const StyledHexagon = styled(SvgIcon)(({ theme, rating, index }) => ({
  backgroundColor: "#E0E0E0",
  borderRadius: "50%", // Isto é para garantir que o fundo do hexágono seja visível
  color: rating > index ? "#263138" : "transparent",
  border: rating > index ? "2px solid #263138" : "2px solid transparent",
}));

const SkillRating = ({ skill, rating }) => {
  return (
    <Stack direction="column" alignItems="center" spacing={1}>
      <Typography variant="h7" fontWeight={700} color="#445964">
        {skill}
      </Typography>
      <Stack direction="row" spacing={0.5}>
        {Array.from({ length: 5 }).map((_, index) => (
          <StyledHexagon
            key={index}
            component={Hexagon}
            rating={rating}
            index={index}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SkillRating;

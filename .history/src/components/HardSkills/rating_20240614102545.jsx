import { Hexagon } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";

const SkillRating = ({ skill, rating }) => {
  return (
    <Stack direction="column" alignItems="center" spacing={1}>
      <Typography fontSize={12} fontWeight={700} color="#445964">
        {skill}
      </Typography>
      <Stack direction="row" spacing={0.5}>
        {Array.from({ length: 5 }).map((_, index) => (
          <SvgIcon
            key={index}
            component={Hexagon}
            style={{ color: index < rating ? "#263138" : "#E0E0E0" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SkillRating
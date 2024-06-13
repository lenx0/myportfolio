import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const CustomCard = ({ image, title, description }) => {
  return (
    <Card>
      <CardActionArea>
        <Box sx={{ padding: 2 }}>
        <CardMedia
          component="img"
          height="230"
          image={image}
          //image="https://via.placeholder.com/140"
          alt="Imagem do card"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;

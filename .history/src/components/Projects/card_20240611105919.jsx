import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CustomCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
        //image="https://via.placeholder.com/140"
          alt="Imagem do card"
          sx={{ objectFit: 'cover' }}
        />
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

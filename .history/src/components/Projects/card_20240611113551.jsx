import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Slider from "react-slick";

const CustomCard = ({ images, title, description }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <CardActionArea key={index}>
              <CardMedia
                component="img"
                height="230"
                image={image}
                alt={`Imagem ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />
            </CardActionArea>
          ))}
        </Slider>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

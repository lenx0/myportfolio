import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Importe o CSS da barra de rolagem

const CustomCard = ({ images, title, description }) => {
  const swiperStyle = {
    width: "100%", // Garante que o Swiper ocupe todo o espaço disponível
    maxWidth: "100%", // Evita que o Swiper ultrapasse o tamanho do componente pai
  };

  return (
    <Card>
      <Swiper
        style={swiperStyle} // Aplica o estilo ao Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              component="img"
              height="230"
              image={image}
              alt={`Imagem ${index + 1}`}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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

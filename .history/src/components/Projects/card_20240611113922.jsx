import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

const CustomCard = ({ images, title, description }) => {
  return (
    <Card>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
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

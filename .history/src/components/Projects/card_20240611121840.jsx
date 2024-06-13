import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { List, ListItem, ListItemText } from "@mui/material";

const CustomCard = ({ images, title, description, technologies }) => {
  return (
    <Card>
      <Swiper
        modules={[Navigation, Pagination]}
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
                width: "50vw",
                height: "auto",
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
        <Typography variant="subtitle1" gutterBottom fontSize={24} color="#445964">
          {technologies}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default CustomCard;

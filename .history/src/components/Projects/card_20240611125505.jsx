import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const CustomCard = ({ images, title, description, technologies }) => {
  return (
    <Card sx={{ mt: 5, boxShadow: "0 4px 10px rgba(1, 5, 5, 0.4)"  }}>
      <CardContent>
        <Typography textAlign="center" variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box>
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
            </Box>
            
          </SwiperSlide>
        ))}
      </Swiper>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {technologies}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

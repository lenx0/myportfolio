import { Dialog, DialogContent } from "@mui/material";

const ImageDialog = ({
    dialogOpen,
    handleDialogClose,
    images,
    currentImageIndex,
    handleNextImage,
    handlePrevImage,
    title,
    description,
  }) => (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      maxWidth="md"
      fullWidth
    >
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleDialogClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close />
        </IconButton>
        <CardMedia
          component="img"
          height="400"
          image={images[currentImageIndex]}
          alt={title}
          sx={{ objectFit: "contain", mb: 2 }}
        />
        <Typography variant="h5" component="div" sx={{ minHeight: 64 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 2 }}
        >
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%">
          <IconButton
            onClick={handlePrevImage}
            disabled={currentImageIndex === 0}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            disabled={currentImageIndex === images.length - 1}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );

  export default ImageDialog
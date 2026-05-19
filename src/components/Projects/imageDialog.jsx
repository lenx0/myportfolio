import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Typography } from "@mui/material";

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
    maxWidth="lg"
    fullWidth
    slotProps={{
      paper: {
        sx: {
          background: "rgba(10,10,15,0.95)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 4,
          color: "#f5f5f7",
          overflow: "hidden",
        },
      },
    }}
  >
    <Box sx={{ position: "relative", p: { xs: 2, md: 3 } }}>
      <IconButton
        onClick={handleDialogClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "#fff",
          background: "rgba(255,255,255,0.08)",
          zIndex: 2,
          "&:hover": { background: "rgba(255,255,255,0.15)" },
        }}
      >
        <Close />
      </IconButton>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          background: "rgba(0,0,0,0.4)",
          borderRadius: 3,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        {images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevImage}
              disabled={currentImageIndex === 0}
              sx={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                background: "rgba(10,10,15,0.6)",
                "&:hover": { background: "rgba(168,85,247,0.6)" },
                "&.Mui-disabled": { color: "rgba(255,255,255,0.2)" },
              }}
            >
              <ArrowBackIos sx={{ ml: 0.5 }} />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              disabled={currentImageIndex === images.length - 1}
              sx={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                background: "rgba(10,10,15,0.6)",
                "&:hover": { background: "rgba(168,85,247,0.6)" },
                "&.Mui-disabled": { color: "rgba(255,255,255,0.2)" },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </>
        )}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: "#f5f5f7", mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#a8a8b3", fontSize: 14, lineHeight: 1.6 }}>
        {description}
      </Typography>

      {images.length > 1 && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 0.75 }}>
          {images.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: i === currentImageIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === currentImageIndex
                  ? "linear-gradient(135deg, #a855f7, #3b82f6)"
                  : "rgba(255,255,255,0.2)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  </Dialog>
);

export default ImageDialog;

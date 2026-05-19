import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

/**
 * SectionWrapper — reusable section with consistent spacing, animated reveal,
 * optional eyebrow label, title and subtitle.
 */
const SectionWrapper = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
  sx = {},
  maxWidth = "1280px",
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 8 },
        ...sx,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth, mx: "auto", px: "0 !important" }}>
        {(eyebrow || title || subtitle) && (
          <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: align }}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  sx={{
                    display: "inline-block",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    px: 2,
                    py: 0.75,
                    borderRadius: "999px",
                    border: "1px solid rgba(168,85,247,0.25)",
                    background: "rgba(168,85,247,0.08)",
                    color: "#c084fc",
                    mb: 2.5,
                  }}
                >
                  {eyebrow}
                </Typography>
              </motion.div>
            )}
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#f5f5f7",
                  }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <Typography
                  sx={{
                    mt: 2,
                    color: "#a8a8b3",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    maxWidth: align === "center" ? "640px" : "720px",
                    mx: align === "center" ? "auto" : 0,
                    lineHeight: 1.6,
                  }}
                >
                  {subtitle}
                </Typography>
              </motion.div>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;

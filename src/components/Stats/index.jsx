import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Anos de experiência" },
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 15, suffix: "+", label: "Tecnologias dominadas" },
  { value: 100, suffix: "%", label: "Comprometimento" },
];

const CountUp = ({ end, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        px: { xs: 3, sm: 5, md: 8 },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: "0 !important" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 2, md: 3 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(59,130,246,0.06))",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: { xs: 12, md: 14 }, color: "#a8a8b3", fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;

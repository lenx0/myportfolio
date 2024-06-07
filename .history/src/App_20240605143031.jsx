import { Box } from "@mui/material";
import Header from "./components/Header";
import "./global.css";

function App() {
  return (
    <Box
      sx={{
        margin: "0 10% 0 10%",
      }}
    >
      <Header />
      <Home />
    </Box>
  );
}

export default App;

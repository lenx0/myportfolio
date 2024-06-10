import { Box } from "@mui/material";
import Header from "./components/Header";
import "./global.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Box
        sx={{
          margin: "0 10% 0 10%",
        }}
      >
        <Header />
        <Home />
      </Box>
      <About />
    </>
  );
}

export default App;

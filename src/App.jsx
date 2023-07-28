import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import Marketplace from "./Pages/marketplace/Marketplace";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Marketplace} />
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;

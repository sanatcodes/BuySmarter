import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Marketplace from "./Pages/MarketPlace";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/marketplace" component={Marketplace} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;

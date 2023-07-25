import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Marketplace from "./Pages/Marketplace.jsx";
// import WholesalerOnobarding from "./Pages/wholesaler/WholesalerOnobarding.jsx";

const rootElement = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {`
  //   path: "/wholesale",
  //   element: <WholesalerOnobarding />,
  // },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

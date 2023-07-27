import { Flex } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Properties from "./dashboardComponents/properties";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <Flex alignItems="center" direction={["columns", "rows"]}>
        <Properties
          imgSrc="https://clipart-library.com/images/8czKn779i.png"
          address="Rue de France"
          zip="AA123Z"
          state="FR"
        />
        <Properties
          imgSrc="https://clipart-library.com/images/8czKn779i.png"
          address="Rue de France"
          zip="AA123Z"
          state="FR"
        />
        <Properties
          imgSrc="https://clipart-library.com/images/8czKn779i.png"
          address="Rue de France"
          zip="AA123Z"
          state="FR"
        />
      </Flex>
    </>
  );
}

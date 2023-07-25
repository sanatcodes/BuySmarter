import { Text, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Navbar from "../../components/NavBar";
import PropertyForm from "./PropertForm";
import WholeSalerIntroComponent from "./WholesalerIntroComponent";
// import PropertyDetailsForm from "./PropertyDetailForm";
// import Stepper from "./Stepper";

export default function WholesalerOnobarding() {
  // const [activeStep, setActiveStep] = useState(0);
  // const { toggleColorMode, colorMode } = useColorMode();
  // const bgColor = useColorModeValue("purple.200", "gray.700");
  const userStep = useSelector((state) => state.wholesaler.wholesalerStep);
  return (
    <>
      <Navbar />
      {userStep === 1 && <WholeSalerIntroComponent />}
      {userStep === 2 && <PropertyForm />}
    </>
  );
}

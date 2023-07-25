import { useSelector } from "react-redux";

import Navbar from "../../components/NavBar";
import PropertyForm from "./PropertForm";
import UploadLegalDocs from "./UploadLegalDocs";
import WholesalePictureUpload from "./WholesalePictureUpload";
import WholeSalerIntroComponent from "./WholesalerIntroComponent";
import WholesaleOnboardingSuccessful from "./WholesaleOnboardingSuccessful";

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
      {userStep === 3 && <WholesalePictureUpload />}
      {userStep === 4 && <UploadLegalDocs />}
      {userStep === 5 && <WholesaleOnboardingSuccessful />}
    </>
  );
}

import { useSelector } from "react-redux";

import Navbar from "../../components/NavBar";
import PropertyForm from "./formComponents/GenralPropertyInfo";
import WholeSalerIntroComponent from "./WholesalerIntroComponent";
import GenralPropertyInfo from "./formComponents/GenralPropertyInfo";
import FinancingForm from "./formComponents/FinancingForm";
import IncomeForm from "./formComponents/IncomeForm";
import ExpensesForm from "./formComponents/ExpensesForm";
import CashToCloseForm from "./formComponents/CashToCloseForm";
import WholesaleOnboardingSuccessful from "./WholesaleOnboardingSuccessful";
import WholesalePictureUpload from "./WholesalePictureUpload";
import StepBar from "./formComponents/StepBar";
import IdPictureUpload from "./formComponents/IdPictures";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { Box, Text } from "@chakra-ui/react";

export default function WholesalerOnobarding() {
  const userStep = useSelector((state) => state.wholesaler.wholesalerStep);

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  if (auth.currentUser == null) {
    return (
      <>
        <Navbar />
        <Box p={6}>
          <Text>You need to be logged in to list a property.</Text>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {userStep >= 2 && <StepBar currentStep={userStep} />}
      {userStep === 1 && <WholeSalerIntroComponent />}
      {userStep === 2 && <GenralPropertyInfo />}
      {userStep === 3 && <PropertyForm />}
      {userStep === 4 && <FinancingForm />}
      {userStep === 5 && <IncomeForm />}
      {userStep === 6 && <ExpensesForm />}
      {userStep === 7 && <CashToCloseForm />}
      {userStep === 8 && <WholesalePictureUpload />}
      {userStep === 9 && <IdPictureUpload />}
      {userStep === 10 && <WholesaleOnboardingSuccessful />}
    </>
  );
}

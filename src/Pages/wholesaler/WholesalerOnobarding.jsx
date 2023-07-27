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

export default function WholesalerOnobarding() {
  const userStep = useSelector((state) => state.wholesaler.wholesalerStep);
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
      {userStep === 9 && <WholesaleOnboardingSuccessful />}
    </>
  );
}

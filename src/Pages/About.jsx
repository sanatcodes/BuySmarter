// import React from 'react'

import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import CashToCloseForm from "./wholesaler/formComponents/CashToCloseForm";
import ExpensesForm from "./wholesaler/formComponents/ExpensesForm";
import FinancingForm from "./wholesaler/formComponents/FinancingForm";
import GenralPropertyInfo from "./wholesaler/formComponents/GenralPropertyInfo";
import IncomeForm from "./wholesaler/formComponents/IncomeForm";
import { PropertyForm } from "./wholesaler/formComponents/PropertyForm";

export default function About() {
  return (
    <>
      <NavBar />
      <Flex gap={20} direction="column" w="80vw">
        <GenralPropertyInfo />
        <PropertyForm />
        <FinancingForm />
        <IncomeForm />
        <ExpensesForm />
        <CashToCloseForm />
      </Flex>
    </>
  );
}

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Td,
  Tr,
  Tbody,
  Table,
} from "@chakra-ui/react";

export const FinancialInformation = ({ property }) => (
  <Accordion allowToggle allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Purchase Info:
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Offer Price or Purchase Price:</Td>
              <Td>{property.offerPrice}</Td>
            </Tr>
            <Tr>
              <Td>Repairs (incl carry costs if bldg not ready to rent):</Td>
              <Td>{property.repairs}</Td>
            </Tr>
            <Tr>
              <Td>Repairs Contingency:</Td>
              <Td>{property.repairsContingency}</Td>
            </Tr>
            <Tr>
              <Td>Mortgage Broker Fee:</Td>
              <Td>{property.mortgageBrokerFee}</Td>
            </Tr>
            <Tr>
              <Td>Environmental Study:</Td>
              <Td>{property.environmentalStudy}</Td>
            </Tr>
            <Tr>
              <Td>Inspections or Engineer Report:</Td>
              <Td>{property.inspectionsOrEngineerReport}</Td>
            </Tr>
            <Tr>
              <Td>Appraisal Fee:</Td>
              <Td>{property.appraisalFee}</Td>
            </Tr>
            <Tr>
              <Td>Misc Fees:</Td>
              <Td>{property.miscFees}</Td>
            </Tr>
            <Tr>
              <Td>Transfer Tax:</Td>
              <Td>{property.transferTax}</Td>
            </Tr>
            <Tr>
              <Td>Legal Expense:</Td>
              <Td>{property.legalExpense}</Td>
            </Tr>
            <Tr>
              <Td>Utility New Account Setup Fee:</Td>
              <Td>{property.utilityNewAccountSetupFee}</Td>
            </Tr>
            <Tr>
              <Td>Real Purchase Price (RPP):</Td>
              <Td>{property.realPurchasePrice}</Td>
            </Tr>
          </Tbody>
        </Table>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Financing (Monthly):
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Mtg Principle Amount:</Td>
              <Td>{property.firstMortgagePrincipleAmount}</Td>
            </Tr>
            <Tr>
              <Td>1st Mtg Interest Rate:</Td>
              <Td>{property.firstMortgageInterestRate}</Td>
            </Tr>
            <Tr>
              <Td>1st Mtg Amortization Period:</Td>
              <Td>{property.firstMortgageAmortizationPeriod}</Td>
            </Tr>
            <Tr>
              <Td>2nd Mtg Principle Amount:</Td>
              <Td>{property.secondMortgagePrincipleAmount}</Td>
            </Tr>
            <Tr>
              <Td>2nd Mtg Interest Rate:</Td>
              <Td>{property.secondMortgageInterestRate}</Td>
            </Tr>
            <Tr>
              <Td>2nd Mtg Amortization Period:</Td>
              <Td>{property.secondMortgageAmortizationPeriod}</Td>
            </Tr>
            <Tr>
              <Td>2nd Mtg Total Monthly Payment:</Td>
              <Td>{property.secondMortgageTotalMonthlyPayment}</Td>
            </Tr>
          </Tbody>
        </Table>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Income Annual:
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Gross Rents:</Td>
              <Td>{property.grossRents}</Td>
            </Tr>
            <Tr>
              <Td>Parking:</Td>
              <Td>{property.parking}</Td>
            </Tr>
            <Tr>
              <Td>Storage:</Td>
              <Td>{property.storage}</Td>
            </Tr>
            <Tr>
              <Td>Laundry Vending:</Td>
              <Td>{property.laundryVending}</Td>
            </Tr>
            <Tr>
              <Td>Other:</Td>
              <Td>{property.otherIncome}</Td>
            </Tr>
          </Tbody>
        </Table>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Operating Expenses (Annual):
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Property Tax:</Td>
              <Td>{property.propertyTax}</Td>
            </Tr>
            <Tr>
              <Td>Insurance:</Td>
              <Td>{property.insurance}</Td>
            </Tr>
            <Tr>
              <Td>Unit Repairs:</Td>
              <Td>{property.unitRepairs}</Td>
            </Tr>
            <Tr>
              <Td>Electricity:</Td>
              <Td>{property.electricity}</Td>
            </Tr>
            <Tr>
              <Td>Gas:</Td>
              <Td>{property.gas}</Td>
            </Tr>
            <Tr>
              <Td>Water Sewer Garbage:</Td>
              <Td>{property.waterSewerGarbage}</Td>
            </Tr>
            <Tr>
              <Td>Lawn Snow Maintenance:</Td>
              <Td>{property.lawnSnowMaintenance}</Td>
            </Tr>
            <Tr>
              <Td>Cable Phone:</Td>
              <Td>{property.cablePhone}</Td>
            </Tr>
            <Tr>
              <Td>Management:</Td>
              <Td>{property.management}</Td>
            </Tr>
            <Tr>
              <Td>Caretaking Expenses:</Td>
              <Td>{property.caretakingExpenses}</Td>
            </Tr>
            <Tr>
              <Td>Advertising:</Td>
              <Td>{property.advertising}</Td>
            </Tr>
            <Tr>
              <Td>Association Fees:</Td>
              <Td>{property.associationFees}</Td>
            </Tr>
            <Tr>
              <Td>Pest Control:</Td>
              <Td>{property.pestControl}</Td>
            </Tr>
            <Tr>
              <Td>Security Change Locks:</Td>
              <Td>{property.securityChangeLocks}</Td>
            </Tr>
            <Tr>
              <Td>Trash Removal:</Td>
              <Td>{property.trashRemoval}</Td>
            </Tr>
            <Tr>
              <Td>Miscellaneous Expenses:</Td>
              <Td>{property.miscellaneousExpenses}</Td>
            </Tr>
            <Tr>
              <Td>Common Area Maintenance:</Td>
              <Td>{property.commonAreaMaintenance}</Td>
            </Tr>
            <Tr>
              <Td>Capital Improvements:</Td>
              <Td>{property.capitalImprovements}</Td>
            </Tr>
            <Tr>
              <Td>Real Estate Taxes:</Td>
              <Td>{property.realEstateTaxes}</Td>
            </Tr>
            <Tr>
              <Td>Legal Accounting:</Td>
              <Td>{property.legalAccounting}</Td>
            </Tr>
            <Tr>
              <Td>Replacement Reserves:</Td>
              <Td>{property.replacementReserves}</Td>
            </Tr>
            <Tr>
              <Td>Eviction Costs:</Td>
              <Td>{property.evictionCosts}</Td>
            </Tr>
            <Tr>
              <Td>Total Expenses:</Td>
              <Td>{property.totalExpenses}</Td>
            </Tr>
          </Tbody>
        </Table>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Cash required to close:
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Deposit(s) made with Offer:</Td>
              <Td>{property.depositsMadeWithOffer}</Td>
            </Tr>
            <Tr>
              <Td>Less Pro-Ration of Rents:</Td>
              <Td>{property.lessProRationOfRents}</Td>
            </Tr>
            <Tr>
              <Td>Cash Required to Close:</Td>
              <Td>{property.cashRequiredToClose}</Td>
            </Tr>
          </Tbody>
        </Table>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

// import { faker } from "@faker-js/faker";

// function createProperty() {
//   return {
//     imageUrl: [
//       faker.image.url(),
//       faker.image.url(),
//       faker.image.url(),
//       faker.image.url(),
//     ],
//     imageAlt: faker.lorem.sentence(),
//     beds: faker.datatype.number({ min: 1, max: 5 }),
//     baths: faker.datatype.number({ min: 1, max: 5 }),
//     title: faker.lorem.sentence(),
//     formattedPrice: `$${faker.finance.amount()}`,
//     reviewCount: faker.datatype.number({ min: 0, max: 100 }),
//     rating: faker.datatype.float({ min: 0, max: 5, precision: 0.01 }),
//     address: faker.address.streetAddress(),
//     fairMarketValue: `$${faker.finance.amount()}`,
//     managementRate: `${faker.datatype.float({
//       min: 1,
//       max: 10,
//       precision: 0.01,
//     })}%`,
//     numberOfUnits: faker.datatype.number({ min: 1, max: 10 }),
//     estimatedAnnualAppreciation: `${faker.datatype.float({
//       min: 0,
//       max: 5,
//       precision: 0.01,
//     })}%`,
//     offerPrice: `$${faker.finance.amount()}`,
//     repairs: faker.lorem.word(),
//     repairsContingency: faker.lorem.word(),
//     mortgageBrokerFee: faker.lorem.word(),
//     environmentalStudy: faker.lorem.word(),
//     inspectionsOrEngineerReport: faker.lorem.word(),
//     appraisalFee: `$${faker.finance.amount()}`,
//     miscFees: faker.lorem.word(),
//     transferTax: faker.lorem.word(),
//     legalExpense: `$${faker.finance.amount()}`,
//     utilityNewAccountSetupFee: `$${faker.finance.amount()}`,
//     realPurchasePrice: `$${faker.finance.amount()}`,
//     firstMortgagePrincipleAmount: `$${faker.finance.amount()}`,
//     firstMortgageInterestRate: `${faker.datatype.float({
//       min: 1,
//       max: 10,
//       precision: 0.01,
//     })}%`,
//     firstMortgageAmortizationPeriod: `${faker.datatype.number({
//       min: 10,
//       max: 30,
//     })} years`,
//     secondMortgagePrincipleAmount: `$${faker.finance.amount()}`,
//     secondMortgageInterestRate: `${faker.datatype.float({
//       min: 1,
//       max: 10,
//       precision: 0.01,
//     })}%`,
//     secondMortgageAmortizationPeriod: `${faker.datatype.number({
//       min: 10,
//       max: 30,
//     })} years`,
//     secondMortgageTotalMonthlyPayment: faker.lorem.word(),
//     grossRents: `$${faker.finance.amount()}`,
//     parking: faker.lorem.word(),
//     storage: faker.lorem.word(),
//     laundryVending: faker.lorem.word(),
//     otherIncome: faker.lorem.word(),
//     propertyTax: `$${faker.finance.amount()}`,
//     insurance: faker.lorem.word(),
//     unitRepairs: `${faker.datatype.float({
//       min: 0,
//       max: 10,
//       precision: 0.01,
//     })}%`,
//     electricity: `$${faker.finance.amount()}`,
//     gas: `$${faker.finance.amount()}`,
//     waterSewerGarbage: faker.lorem.word(),
//     lawnSnowMaintenance: faker.lorem.word(),
//     cablePhone: faker.lorem.word(),
//     management: `$${faker.finance.amount()}`,
//     caretakingExpenses: faker.lorem.word(),
//     advertising: faker.lorem.word(),
//     associationFees: faker.lorem.word(),
//     pestControl: `$${faker.finance.amount()}`,
//     securityChangeLocks: `$${faker.finance.amount()}`,
//     trashRemoval: faker.lorem.word(),
//     miscellaneousExpenses: faker.lorem.word(),
//     commonAreaMaintenance: faker.lorem.word(),
//     capitalImprovements: faker.lorem.word(),
//     accounting: `$${faker.finance.amount()}`,
//     legal: faker.lorem.word(),
//     badDebts: faker.lorem.word(),
//     otherExpenses: faker.lorem.word(),
//     evictionCosts: `$${faker.finance.amount()}`,
//     totalExpenses: `$${faker.finance.amount()}`,
//     depositsMadeWithOffer: faker.lorem.word(),
//     lessProRationOfRents: faker.lorem.word(),
//     cashRequiredToClose: `$${faker.finance.amount()}`,
//   };
// }
// export function generateProperties() {
//   let properties_fake = [];

//   for (let i = 0; i < 10; i++) {
//     properties_fake.push(createProperty());
//   }

//   return properties_fake;
// }

// export const properties = generateProperties();

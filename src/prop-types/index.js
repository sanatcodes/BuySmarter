import PropTypes from "prop-types";

export const propertyPropTypes = {
  property: PropTypes.shape({
    propertyName: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.number.isRequired,
    yearBuilt: PropTypes.string.isRequired,
    squareFootage: PropTypes.number.isRequired,
    numBedrooms: PropTypes.number.isRequired,
    numBathrooms: PropTypes.number.isRequired,
    parking: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    uniqueFeatures: PropTypes.string.isRequired,
    askingPrice: PropTypes.number.isRequired,
    estimatedMarketValue: PropTypes.number.isRequired,
    estimatedRepairCost: PropTypes.number.isRequired,
    potentialRentalIncome: PropTypes.number.isRequired,
  }).isRequired,
};

export const PropertyCardPropTypes = {
  property: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    formattedPrice: PropTypes.string.isRequired,
    reviewCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

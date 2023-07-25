import { SimpleGrid, Box, Center, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PropertyCardComponent from "../components/PropertyCardComponent";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

export default function Marketplace() {
  const properties = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Spacious country house with a garden",
      beds: 4,
      baths: 3,
      title: "Beautiful Country House with Garden",
      formattedPrice: "$2,500.00",
      reviewCount: 21,
      rating: 4.5,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Luxurious penthouse with a view of the city skyline",
      beds: 2,
      baths: 2,
      title: "Stunning City Skyline Penthouse",
      formattedPrice: "$3,200.00",
      reviewCount: 45,
      rating: 4.8,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Charming cottage surrounded by nature",
      beds: 2,
      baths: 1,
      title: "Cozy Cottage Retreat",
      formattedPrice: "$1,300.00",
      reviewCount: 15,
      rating: 4.2,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Modern apartment in the bustling downtown area",
      beds: 1,
      baths: 1,
      title: "Downtown Chic Apartment",
      formattedPrice: "$1,800.00",
      reviewCount: 28,
      rating: 4.6,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Stylish townhouse with a rooftop terrace",
      beds: 3,
      baths: 2,
      title: "Elegant Townhouse with Rooftop Terrace",
      formattedPrice: "$2,700.00",
      reviewCount: 19,
      rating: 4.3,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Spacious waterfront villa with a private dock",
      beds: 5,
      baths: 4,
      title: "Luxury Waterfront Villa",
      formattedPrice: "$4,500.00",
      reviewCount: 38,
      rating: 4.9,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rustic farmhouse with a large field",
      beds: 4,
      baths: 3,
      title: "Rural Farmhouse Getaway",
      formattedPrice: "$2,000.00",
      reviewCount: 25,
      rating: 4.7,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Contemporary loft with an open floor plan",
      beds: 1,
      baths: 1,
      title: "Modern Open Loft",
      formattedPrice: "$1,600.00",
      reviewCount: 12,
      rating: 4.0,
    },
  ];

  return (
    <>
      <NavBar />
      <Box p={4}>
        <Flex>
          <Box flex={1}>
            <SearchBar />
          </Box>
          <Box>
            <Filter />
          </Box>
        </Flex>
        <Center>
          <SimpleGrid columns={[2, null, 3]} spacing={20} mt={10}>
            {properties.map((p) => (
              <PropertyCardComponent key={p.title} property={p} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

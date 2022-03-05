import { ProductProps } from "@/@types/product";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SectionSubtitle } from "../layout/SectionSubtitle";
import { SectionTitle } from "../layout/SectionTitle";
import { Product } from "./Product";

interface SectionMostSoldProps {
  products: ProductProps[];
}

export function SectionMostSold({ products }: SectionMostSoldProps) {
  return (
    <Box maxW="1120px" px="4" py="24" m="0 auto">
      <VStack fontFamily="Poppins">
        <SectionTitle>Popular</SectionTitle>
        <SectionSubtitle>Some quotes from our happy customers</SectionSubtitle>
      </VStack>
      <SimpleGrid columns={4} spacing="10">
        {products.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

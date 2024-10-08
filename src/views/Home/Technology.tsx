"use client";
import React from "react";
import Image from "next/image";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import { useAppContext } from "@/contexts/AppContext/AppContext";

const Technology = () => {
  const { technology: technologies } = useAppContext();

  return (
    <Flex direction="column" gap="1rem" justifyItems="baseline">
      <Text as="h1" fontSize="1.5rem" fontWeight="bold">
        Stack technologies that I use
      </Text>
      <Grid
        templateColumns={[
          "repeat(4, 1fr)",
          "repeat(6, 1fr)",
          "repeat(8, 1fr)",
          "repeat(12, 1fr)",
          "repeat(16, 1fr)",
        ]}
        gap={6}
      >
        {technologies?.map(({ id, label = "", media }) => {
          return (
            <GridItem
              key={id}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width={50}
                height={50}
                src={String(media?.url)}
                alt={String(label)}
              />
              <Text fontSize="0.875rem" fontWeight="light">
                {label}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Technology;

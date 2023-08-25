"use client";

import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useConfigurationContext } from "../contexts/configuration";
import { Container } from "./Container";

export const Navbar = () => {
  const pathname = usePathname();
  const { menu: links = [] } = useConfigurationContext();

  return (
    <Container
      display="flex"
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
      as="nav"
      position="absolute"
      top="0"
      left="0"
      right="0"
      w="100%"
      zIndex={10}
      minHeight="4rem"
      flex={1}
      justifyContent="center"
      px={4}
    >
      <Flex
        direction="row"
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Image
          width={32}
          height={32}
          loading="lazy"
          style={{ borderRadius: "9999px" }}
          src="/images/avatar.png"
          alt="Ibrahim Tarigan"
        />
        <Spacer />
        {/* Menu */}
        <Flex as="nav" position="relative" direction="row" gap="1rem">
          {links.map((link) => {
            return (
              <Button
                // ref={link.ref}
                key={link.pathname}
                as={NextLink}
                href={{ pathname: link.pathname }}
                variant="navigation"
              >
                {link.label}
                {link.pathname === pathname && (
                  <Box
                    as={motion.div}
                    position="absolute"
                    bottom="-1px"
                    left="0"
                    right="0"
                    height="1px"
                    background="black"
                    layoutId="xxxx"
                  />
                )}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

import { SectionImage } from "@/components/Home";
import { Header } from "@/components/layout";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Candle App | Início</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionImage />
    </Box>
  );
};

export default Home;

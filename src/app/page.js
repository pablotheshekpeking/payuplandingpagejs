import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Solution from "./_components/solution";
import Features from "./_components/features";
import Why from "./_components/why";
import BigImg from "./_components/bigimage";
import Open from "./_components/openaccount";
import FAQ from "./_components/faq";
import Contact from "./_components/contact";
import Track from "./_components/track";
import BigImgMobile from "./_components/bigimagemobile";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <Box
      bg={"#F7EBE8"}
      display={"flex"}
      flexDirection={"column"}
      maxW={"173srem"}
      m={"0 auto"}
    >
      <Box
        bg={"#F7EBE8"}
        w={"full"}
        px={["10px", "10px", "", ""]}
        scrollBehavior={"smooth"}
        m={"0px"}
        p={"0px"}
        fontFamily={"Roobert Pro"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Navbar />

        <section id="top">
          <Hero />
        </section>

        <Solution />

        <section id="about">
          <Features />
        </section>

        <Why />

        <Box display={["none", "none", "none", "flex"]}>
          <BigImg />
        </Box>

        <Box display={["flex", "flex", "flex", "none"]}>
          <BigImgMobile />
        </Box>

        <Track />

        <Open />

        <section id="faq" style={{ paddingBottom: "4rem" }}>
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Box>
      <Footer />
    </Box>
  );
}

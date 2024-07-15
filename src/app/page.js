import { Box, Center } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Solution from "./components/solution";
import Features from "./components/features";
import Why from "./components/why";
import BigImg from "./components/bigimage";
import Open from "./components/openaccount";
import FAQ from "./components/faq";
import "../../public/global.css"
import Contact from "./components/contact";
import Track from "./components/track";

export default function Home() {
  return (
    <Box
      bg={'#F7EBE8'}
      w={'full'}
      px={['10px', '10px', '', '']}
      scrollBehavior={'smooth'}
      m={'0px'}
      p={'0px'}
      fontFamily={'Roobert Pro'}
    >
      <Center w={'full'} display={'flex'} px={'24px'} justifyContent={'center'} pt={'24px'} position={'fixed'} >
        <Navbar />
      </Center>

      <Hero />

      <Solution />

      <Features />

      <Why />

      <BigImg />

      <Track />

      <Open />

      <FAQ />

      <Contact />

    </Box>
  );
}

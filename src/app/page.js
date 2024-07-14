import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Solution from "./components/solution";
import Features from "./components/features";
import Why from "./components/why";
import BigImg from "./components/bigimage";
import Open from "./components/openaccount";
import FAQ from "./components/faq";
import "../../public/global.css"

export default function Home() {
  return (
    <Box
      bg={'#F7EBE8'}
      w={'full'}
      px={['10px', '10px', '', '']}
      scrollBehavior={'smooth'}
    >
      <Box pt={'24px'} position={'fixed'} w={'100%'} px={'24px'}>
        <Navbar />
      </Box>

      <Hero />

      <Solution />

      <Features />

      <Why />

      <BigImg />

      {/**<Open />*/}

      <FAQ />

    </Box>
  );
}

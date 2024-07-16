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
import BigImgMobile from "./components/bigimagemobile";
import Footer from "./components/footer";

export default function Home() {
  return (
    <><Box
      bg={'#F7EBE8'}
      w={'full'}
      px={['10px', '10px', '', '']}
      scrollBehavior={'smooth'}
      m={'0px'}
      p={'0px'}
      fontFamily={'Roobert Pro'}
    >
      <Center w={'full'} display={'flex'} px={'24px'} justifyContent={'center'} pt={'24px'} position={'fixed'} zIndex={999} >
        <Navbar />
      </Center>

      <Hero />

      <Solution />

      <section id="about">
      <Features />
      </section>

      <Why />

      <Box display={['none', 'none', 'none', 'flex']}>
      <BigImg />
      </Box>

      <Box display={['flex', 'flex', 'flex', 'none']}>
      <BigImgMobile />
      </Box>

      <Track />

      <Open />

      <section id="faq">
      <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>
      

    </Box>
    <Footer /></>
  );
}

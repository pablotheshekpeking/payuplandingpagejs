'use client';

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

const FooterButton = ({ src, icon, iconname }) => (
  <Link href={src}>
    <Box w={'100%'} h={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={'20px'}>
      {icon && <Box as={icon} />}
      <Text fontSize={'8px'}>{iconname}</Text>
    </Box>
  </Link>
);

export default function UserFooter() {
  return (
    <Box w={'100%'} h={'50px'} display={['flex', 'flex', 'none', 'none']} bg={'#FFF239'} justifyContent={'space-between'} alignItems={'center'}>
      <FooterButton src="./dashboard" icon={IoHome} iconname={'Home'} />
      <FooterButton src="./p2p" icon={FaMoneyBillTransfer} iconname={'P2P'} />
      <FooterButton src="./transactions" icon={FaCreditCard} iconname={'Transactions'} />
      <FooterButton src="./history" icon={MdHistory} iconname={'History'} />
      <FooterButton src="./settings" icon={IoSettingsSharp} iconname={'Settings'} />
    </Box>
  );
}

import React from "react";
import { platform } from "../hooks/UseGames";
import { HStack, Icon, PropsOf } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import{MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface props {
  platforms: platform[];
}

function PlatformIconsList({ platforms }: props) {
    const iconMap:{[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,

    }
  return (
    <HStack marginY={'10px'}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color={"gray.500"}/>
        ))}
    </HStack>    
  );
}

export default PlatformIconsList;

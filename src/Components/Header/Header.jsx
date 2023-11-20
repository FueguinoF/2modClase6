import React from 'react';
import { Link, Heading, Container, IconButton, useColorMode, Button, Tooltip, } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'; 
import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion';

const Header=()=>{

    const {colorMode, toggleColorMode} = useColorMode()
    
    return(				
        <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" justifyContent={'space-around'}
            bg={'rgb(56, 77, 170)'} alignItems={'center'} >
                <Container display="flex"  flexDirection="row" alignItems={'center'} justifyContent={'space-around'} gap={{base:'2',sm:'4',md:'4',lg:'8'}} >
                    <Container fontSize={{base:'20',sm:'30',md:'36',lg:'46'}} color={'whitesmoke'} maxW={{base:'30',md:'50'}}><motion.div whileHover={{ scale: 1.2 , color:'rgb(249, 231, 159)' }}><FontAwesomeIcon icon={faIdCard} flip  /></motion.div></Container>
                    <Container><Heading as='h1' minW={{base:'80',sm:'120',md:'160',lg:'200'}} fontFamily={'Raleway'} fontWeight={'800'} fontSize={{base:'16',sm:'26',md:'36',lg:'46'}} textColor={'white'}>
                        <Link  _hover={{ textDecoration:'none'}}> Formulario </Link></Heading></Container>
                    <Tooltip label={(colorMode === 'light' ?  'Modo Nocturo' :  'Modo Diurno')}>
                        <IconButton color={'whitesmoke'} bg={'transparent'} _hover={{bg:'transparent'}} onClick={toggleColorMode} as={(colorMode === 'light' ?  MoonIcon :  SunIcon)} /></Tooltip>
                </Container>
                 
        </Container>
    );   

}

export {Header};
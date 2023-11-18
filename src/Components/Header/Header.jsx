import React from 'react';
//import './Header.css'; 
import { Box, Link, Heading, textDecoration , Container, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'; 
import { faWpforms } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Header=()=>{

    return(				
        <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" justifyContent={'space-around'}
            bg={'rgb(56, 77, 170)'} alignItems={'center'} gap={{base:'1',md:'3',lg:'5'}}>
                <Container display="flex"  flexDirection="row" alignItems={'center'} gap={{base:'1',md:'2'}} >
                    <Container fontSize={{base:'20',sm:'30',md:'36',lg:'46'}} color={'whitesmoke'} maxW={{base:'30',md:'50'}}><motion.div whileHover={{ scale: 1.1 }}><FontAwesomeIcon icon={faWpforms} /></motion.div></Container>
                    <Container fontSize={{base:'20',sm:'30',md:'36',lg:'46'}} color={'whitesmoke'} maxW={{base:'30',md:'50'}}><motion.div whileHover={{ scale: 1.1 }}><FontAwesomeIcon icon={faIdCard} /></motion.div></Container>
                    <Container><Heading as='h1' minW={{base:'220',md:'340',lg:'460'}} fontFamily={'Raleway'} fontWeight={'800'} fontSize={{base:'20',sm:'26',md:'32',lg:'40'}} textColor={'white'}>
                        <Link  _hover={{ textDecoration:'none'}}> Formulario de registro </Link></Heading></Container>
                </Container>
                 
        </Container>
    );   

}

export {Header};
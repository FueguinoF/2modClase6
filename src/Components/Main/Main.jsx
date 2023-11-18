import React from 'react';
import { Formulario } from '../Formulario/Formulario';
import { Container } from '@chakra-ui/react';
//import './Main.css'; 

const Main=()=>{

    return(		
        <Container minH="80vh" maxW="100vw" display={'flex'} flexDirection={'column'} alignItems={'center'} 
            justifyContent={'center'}  > 		
            <Formulario/>
        </Container>
    );   

}

export {Main};
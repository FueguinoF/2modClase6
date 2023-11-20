import React from 'react';
import { Container } from '@chakra-ui/react';
import { MiCard } from '../MiCard/Micard';


const Main=()=>{

    return(		
        <Container minH="80vh" maxW="100vw" display={'flex'} flexDirection={'column'} alignItems={'center'}  > 		
            <MiCard/>
        </Container>
    );   

}

export { Main };
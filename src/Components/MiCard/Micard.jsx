import { Card, CardBody,  Heading,  Box, Container  } from "@chakra-ui/react";
import { Formulario } from "../Formulario/Formulario";

const MiCard=()=>{
   
    return(	
        <Container mt='4' mb='4'>			
            <Card 
                direction='column'
                variant='elevated' 
                webkitBoxShadow=' 7px 10px 35px 12px rgba(131,114,232,1)'
                mozBoxShadow=' 7px 10px 35px 12px rgba(131,114,232,1)'
                boxShadow=' 7px 10px 35px 12px rgba(131,114,232,1)' maxW='md' mx='auto'>
         
                <CardBody>
                <Heading fontFamily={'Raleway'} size='md' mb={2} as='h2' textAlign={'center'} >Formulario de registro</Heading>  
                    <Formulario/>   
                </CardBody>
            </Card> 
        </Container>
    );   

}

export {MiCard}
import { Card, CardBody,  Heading,  Box, Container  } from "@chakra-ui/react";
import { Formulario } from "../Formulario/Formulario";

const MiCard=()=>{
   
    return(	
        <Container mt='4' mb='4'>			
            <Card 
                direction='column'
                variant='elevated' 
                webkitBoxShadow=' 0px 10px 35px 12px rgba(131,114,232,0.5)'
                mozBoxShadow=' 0px 10px 35px 12px rgba(131,114,232,0.5)'
                boxShadow=' 0px 10px 35px 12px rgba(131,114,232,0.5)' maxW='md' mx='auto'>
         
                <CardBody>
                <Heading fontFamily={'Raleway'} size='md' mb={4} as='h2' textAlign={'center'} >Formulario de registro</Heading>  
                    <Formulario/>   
                </CardBody>
            </Card> 
        </Container>
    );   

}

export {MiCard}
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement,  } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
 
const MiFormCtrlPass = ({error,touched,label,name,placeholder,handleChange,handleBlur,isSubmitting,value,enviado}) => {
  
  useEffect(() => {

    if(enviado){
      setMostrar(false)
    }

  },[enviado])
  
  
  const [mostrar,setMostrar] = useState(false);
  const verPass = () => setMostrar(!mostrar);
  
  return(
    <FormControl isRequired isInvalid={error && touched} mb={8}>
      <FormLabel mb={0}><strong>{label}</strong></FormLabel>
      <InputGroup>
        <Input type={(mostrar) ? 'text' : 'password'} name={name} 
              focusBorderColor='blue.500' autoComplete="false"
              fontFamily={'Raleway'} 
              placeholder={placeholder} 
              onChange={handleChange} onBlur={handleBlur} 
              value={value} isDisabled={isSubmitting}/>
        <InputRightElement >
            <IconButton boxSize={8} p={2} as={(!mostrar) ?  ViewIcon :  ViewOffIcon} onClick={verPass} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-2' position='absolute' isDisabled={isSubmitting}/>
        </InputRightElement>
      </InputGroup>

      
      <FormErrorMessage mt={0.5}  fontSize={{base:'8',md:'13'}} position='absolute'>{error}</FormErrorMessage>
    </FormControl>
  )
}

export { MiFormCtrlPass }
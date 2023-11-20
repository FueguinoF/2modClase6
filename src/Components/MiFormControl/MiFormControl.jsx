import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

const MiFormControl = ({error,touched,label,type,name,placeholder,handleChange,handleBlur,isSubmitting,value}) => {
  
  return(
    <FormControl isRequired isInvalid={error && touched} mb={8}> 
    <FormLabel mb={0}><strong>{label}</strong></FormLabel>
    <Input type={type} name={name} 
            focusBorderColor='blue.500'
            fontFamily={'Raleway'}
            maxW={{base:'300',sm:'400'}}
            placeholder={placeholder}
            onChange={handleChange} onBlur={handleBlur} 
            value={value} isDisabled={isSubmitting} />
            <FormErrorMessage mt={0.5} mb={0.5} fontSize={{base:'10',md:'13'}} position='absolute'>{error}</FormErrorMessage>
  </FormControl>
  )
}

export { MiFormControl }
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Container, 
    Flex,  Heading, Text, useToast } from '@chakra-ui/react';
import { React } from 'react';
//import './Formulario.css'; 
import { Formik } from 'formik';
import { ref, string, object } from 'yup';
import { motion } from 'framer-motion'
import { MiFormControl } from '../MiFormControl/MiFormControl';
import { MiFormCtrlPass } from '../MiFormCtrlPass/MiFormCtrlPass';
import { useState } from "react";


const Formulario=()=>{

    

    const formInitialValues = {
        nombre:'',
        apellido:'',
        email:'',
        tel:'',
        pass:'',
        cPass:''
        
    }

    const toast = useToast();
    const [enviado,setEnviado] = useState(false)

    const formSubmit = (values, {setSubmitting,resetForm}) => {
        setTimeout(() => {
        console.log(values);
        setEnviado(false);

          toast({
            position: 'top',
            duration: null,
            render: () => (
              <motion.div 
                  initial={{scale: 0.8}} 
                  transition={{type: 'spring',damping: 8}} 
                  animate={{scale:1}}
                  >
                <Alert status='warning' variant='subtle' flexDirection='column' alignItems='center'
                      justifyContent='center' textAlign='left' rounded='md'>
                  <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Ya casi, solo un paso mas...
                  </AlertTitle>
                  <AlertDescription maxWidth='md'>
                    <Text>
                      <Text as='strong'>{values.nombre}</Text>, le enviamos un correo con un link de confirmación de su cuenta a <Text as='strong'>{values.email}</Text>. Dicho link tiene validez por 12 hs, pasado dicho lapso deberá comenzar el registro nuevamente. Recuerde revisar la carpeta de SPAM o Correo no deseado en caso de no recibirlo.
                    </Text>
                    <Heading fontSize='md' mt={3}> - - - Aclaracion - - - </Heading>
                    <Text> Solo para ilustar el objeto con los datos del formulario se muestra en un console.log() en la linea 26.</Text>
                  </AlertDescription>
                  <Flex mt={2}>
                    <Button colorScheme="orange" onClick={() => {
                        setSubmitting(false);
                        toast.closeAll();
                        resetForm({values:formInitialValues})
                        setEnviado(true)
                      }}>Aceptar</Button>
    
                  </Flex>
                </Alert>
              </motion.div>
            ),
          })
        }, 400);
    }
    


    //yup

    const emailPtrn =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPtrn = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const fSchema = object ({
        nombre :    string().trim()
                    .matches(/^[a-zA-Z]{2,}$/,'Revise los datos, sin números, solo nombre con dos o más letras.')
                    .required('Ingrese su nombre.'),
        apellido :  string().trim()
                    .matches(/^[a-zA-Z]{2,}$/,'Revise los datos, sin números, solo apellido con dos o más letras.')
                    .required('Ingrese su apellido.'),
        email :     string().trim().lowercase()
                    .matches(emailPtrn,'Revise los datos, formato de mail inválido. Ej: juan@gmail.com')
                    .required('Ingrese su email.'),
        tel :       string().trim()
                    .matches(/^[1-9]\d{9,}$/,'Revise cantidad de dígitos, sin 0 para área ni 15 para número.')
                    .required('Ingrese su teléfono.'),
        pass :      string()
                    .matches(passPtrn,'Ingrese contraseña compuesta de al menos 8 carácteres, una letra, un número y un caracter especial ( @ $ ! % * ? & )')
                    .min(8,'Ingrese al menos 8 caracteres')
                    .required('Ingrese una contraseña'),
        cPass :     string()
                    .oneOf([ref('pass')],'Revise los datos, las contraseñas no coinciden.')
                    .required('Confirme la contraseña')
    })   

        
    

    return(				
        <Container fontFamily={'Raleway'} >
            <Formik initialValues={formInitialValues} validationSchema={fSchema} onSubmit={formSubmit} >
            
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting,}) => (
                
                <form onSubmit={handleSubmit} noValidate>
                    <MiFormControl error={errors.nombre} touched={touched.nombre} 
                                      label='Nombre' type='text' name='nombre'
                                      placeholder='Ingrese su nombre.' handleChange={handleChange}
                                      handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.nombre}/>
                    <MiFormControl error={errors.apellido} touched={touched.apellido} 
                                      label='Apellido' type='text' name='apellido'
                                      placeholder='Ingrese su apellido.' handleChange={handleChange}
                                      handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.apellido}/>
                    <MiFormControl error={errors.email} touched={touched.email} 
                                      label='Correo' type='email' name='email'
                                      placeholder='Ingrese su correo.' handleChange={handleChange}
                                      handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.email}/>
                    <MiFormControl error={errors.tel} touched={touched.tel} 
                                      label='Teléfono' type='tel' name='tel'
                                      placeholder='Ingrese su teléfono.' handleChange={handleChange}
                                      handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.tel}/>
                    <MiFormCtrlPass error={errors.pass} touched={touched.pass} 
                                          label='Contraseña' name='pass' enviado={enviado}
                                          placeholder='Ingrese su contraseña.' handleChange={handleChange}
                                          handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.pass}/>
                    <MiFormCtrlPass error={errors.cPass} touched={touched.cPass} 
                                          label='Confirmar contraseña' name='cPass' enviado={enviado}
                                          placeholder='Repita su contraseña.' handleChange={handleChange}
                                          handleBlur={handleBlur} isSubmitting={isSubmitting} value={values.cPass}/>
                    <Box display='flex' justifyContent='center'>
                      <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                        <Button type='submit' isLoading={isSubmitting} size='lg' 
                                bg='rgb(46, 134, 193)' color='whitesmoke'
                                _hover={{ bg:'rgb(52, 152, 219 )', color:'whitesmoke'}}
                                loadingText='Registrando'>Registrar</Button>
                      </motion.div>
                    </Box>

                </form>
            )}
                
            </Formik>
        </Container> 
    )  

}

export {Formulario};
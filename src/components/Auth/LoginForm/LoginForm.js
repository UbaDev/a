import { View } from 'react-native'
import React, { useState } from 'react'
import {styles} from './LoginForm.styles'
import {Input, Icon, Button} from "react-native-elements";
import { useFormik } from "formik"
import Toast from "react-native-toast-message"
import { screen } from "../../../utils"

import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { initialValues, validationSchema } from "./LoginForm.data"



export function LoginForm() {


  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const showHidenPassword = () => setShowPassword((prevState) => !prevState); 

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {

      try{
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: `Bienvenido ${formValue.email}`,

        })

        navigation.navigate(screen.cuenta.cuenta);

        
      }catch(error) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Correo o contraseña incorrectos",

        })
        console.log(error);
      }

    }

  });

  return (
    <View style={styles.content}>


      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={<Icon type="material-community" name="email" iconStyle={styles.icon} />}
        onChangeText={text => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}>
      </Input>


      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon type="material-community" name={showPassword ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon} onPress={showHidenPassword} />}
        onChangeText={text => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password} >
      </Input>



      <Button title="Iniciar sesión" containerStyle={styles.btnContainer} buttonStyle={styles.btn}
        onPress={formik.handleSubmit} loading={formik.isSubmitting}/>

    </View>
  )
}
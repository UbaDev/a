import { View, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import {Text, Image} from "react-native-elements"
import {styles} from "./LoginScreen.styles"
import {LoginForm} from "../../../components/Auth/"
import {useNavigation} from "@react-navigation/native"
import {screen} from "../../../utils"

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



export function LoginScreen() {
  
  const navigation = useNavigation();

  const goToRegister = () =>{

    navigation.navigate(screen.cuenta.registro);
  }

  return (
    <View style={styles.Container}>
    <KeyboardAwareScrollView >
    
        <ScrollView>
          <Image source={require('../../../../assets/img/logoForms.jpg')} style={styles.Image} />

          <View style={styles.content}>
            <LoginForm />
          </View>
          <View style={styles.text}>
            <Text style={styles.textRegister}>
              ¿Aún no tienes una cuenta? <Text style={styles.textReg} onPress={goToRegister}>Unete</Text>
            </Text>
          </View>


        </ScrollView>
    </KeyboardAwareScrollView>
    </View>
  )
}
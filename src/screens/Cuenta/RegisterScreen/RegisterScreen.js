import { View } from 'react-native'
import React from 'react'
import {Image} from "react-native-elements"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {styles} from "./RegisterScreen.styles"
import {RegisterForm} from "../../../components/Auth"

export  function RegisterScreen() {
  return (
    <View style={styles.Container}>
        <KeyboardAwareScrollView>
          <Image source={require("../../../../assets/img/logoForms.jpg")} style={styles.Image}/>

            <View style={styles.Content}>
              <RegisterForm />
            </View>
        </KeyboardAwareScrollView>

    </View>
  )
}
import { ScrollView, View } from 'react-native'
import {Text, Button, Image} from "react-native-elements"
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {styles} from './UserNoLog.styles'
import { screen } from "../../../utils"; 


export function UserNoLogScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.login)
  }

  return (
    <View style={styles.container}>
      <ScrollView centerContent={true} style={styles.viewBody}>

        <Image source={require('../../../../assets/img/logo.jpg')}
          style={styles.image} />
        <Text style={styles.title}>¿Aún no tienes una cuenta?</Text>
        <Text style={styles.description}>Únete y disfuta la experiencia en QroAdvisor</Text>

        <Button title="Unirme" onPress={goToLogin} buttonStyle={styles.btnStyle}></Button>
      </ScrollView>
    </View>
    
  )
}
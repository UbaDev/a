import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import {Icon} from "react-native-elements";
import {screen} from "../../../utils"; 
import {styles} from "./ExplorarScreen.styles"
import {getAuth,onAuthStateChanged} from "firebase/auth"

export function ExplorarScreen(props) {
  
  const {navigation} = props;

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    });
    
  }, []);

 


  const gotToAddAnuncios = () => {
    //Esto se usa para navegar entre la misma stack y vista
      navigation.navigate(screen.explorar.addAnuncios);

    //Esto se usa para navegar a otro stack y vista
    //navigation.navigate(screen.cuenta.tab, {screen: screen.cuenta.cuenta})
  }


  return( 
    <View style={styles.content}>
     <Text>Estamos en la screen de explorar</Text>


     {currentUser && (

    
      <Icon reverse
       type="material-community"
        name="plus" color="#000"
         containerStyle={styles.btnContainer}
        onPress={gotToAddAnuncios}
         />
      )}
     </View>
  )
}
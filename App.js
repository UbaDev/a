import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavegacion} from './src/navegacion/AppNavegacion';
import { initFirebase } from './src/utils';
import Toast from "react-native-toast-message"

LogBox.ignoreAllLogs();

export default function App(){
  return(
    <>
      <NavigationContainer>
        <AppNavegacion />
      </NavigationContainer>
    
    <Toast />
    </>
  )
}
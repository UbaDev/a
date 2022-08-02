import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon,Image,Text } from 'react-native-elements'
import { screen } from "../utils";
import {ExplorarStack} from "./ExplorarStack";
import { FavoritosStack } from './FavoritosStack';
import { PuntuacionStack } from './PuntuacionStack';
import {CuentaStack } from './CuentaStack'; 
import {BuscarStack } from './BuscarStack';



const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown:false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: "#646464",
            tabBarIcon:({color, size}) => screenOptions(route, color, size),
             })}>


            <Tab.Screen 
            name={screen.explorar.tab} 
            component={ExplorarStack}
            options={{title:"Explorar"}}>
            </Tab.Screen>

            <Tab.Screen 
            name={screen.buscar.tab} 
            component={BuscarStack}
            options={{title:"Buscar"}}>


                


            </Tab.Screen>

            <Tab.Screen
                name={screen.favoritos.tab}
                component={FavoritosStack}
                options={{ title: "Favoritos" }}>
            </Tab.Screen>

            <Tab.Screen
                name={screen.puntuacion.tab}
                component={PuntuacionStack}
                options={{ title: "Puntuación" }}
                >

            </Tab.Screen>
            
            

          
            <Tab.Screen
                name={screen.cuenta.tab}
                component={CuentaStack}
                options={{ title: "Cuenta" }}>

            </Tab.Screen>

           

           
        </Tab.Navigator>
    )
}


function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.explorar.tab){
        iconName = "compass-outline";
    }
    if (route.name === screen.buscar.tab) {
        iconName = "magnify";
    }
    if (route.name === screen.puntuacion.tab) {
        iconName = "star-outline";
    }
    if (route.name === screen.favoritos.tab) {
        iconName = "heart-outline";
    }

    if (route.name === screen.cuenta.tab) {
        iconName = "home-outline";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
    
}
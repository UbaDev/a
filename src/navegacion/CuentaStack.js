import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CuentaScreen } from '../screens/Cuenta/CuentaScreen';
import {LoginScreen} from "../screens/Cuenta/LoginScreen/LoginScreen"
import { RegisterScreen } from "../screens/Cuenta/RegisterScreen/RegisterScreen"
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.cuenta.cuenta}
                component={CuentaScreen}
                options={{ title: "Cuenta" }}>

            </Stack.Screen>

            <Stack.Screen name={screen.cuenta.login}
                component={LoginScreen}
                options={{ title: "Inicio de sesión" }}>

            </Stack.Screen>


            <Stack.Screen name={screen.cuenta.registro}
                component={RegisterScreen}
                options={{ title: "Registro de usuario" }}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}
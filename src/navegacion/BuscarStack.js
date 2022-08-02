import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BuscarScreen } from '../screens/BuscarScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function BuscarStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.buscar.buscar}
                component={BuscarScreen}
                options={{ title: "Buscar" }}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}
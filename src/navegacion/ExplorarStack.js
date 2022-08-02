import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExplorarScreen} from "../screens/Explorar/ExplorarScreen/ExplorarScreen";
import {AddAnunciosScreen} from "../screens/Explorar/AddAnunciosScreen/AddAnunciosScreen";
import {screen} from "../utils";

const Stack = createNativeStackNavigator();

export function ExplorarStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.explorar.explorars}
            component={ExplorarScreen}
            options={{title: "Explorar"}}>

            </Stack.Screen>

            <Stack.Screen name={screen.explorar.addAnuncios}
                component={AddAnunciosScreen}
                options={{ title: "Nuevo restaurante" }}>

            </Stack.Screen>


        </Stack.Navigator>
    )
}
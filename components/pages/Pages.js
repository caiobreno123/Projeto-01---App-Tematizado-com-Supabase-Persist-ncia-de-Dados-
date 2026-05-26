import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";

const Drawer = createDrawerNavigator();

export default function Pages({route}) {
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={Home}
            />
        </Drawer.Navigator>
    )
}
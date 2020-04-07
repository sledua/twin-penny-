import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PennyListScreen } from "../screens/PennyListScreen";
import { THEME } from "../../theme";

const PennyNavigator = createStackNavigator({
    Main: MainScreen,
    List: PennyListScreen

},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.PAGE_COLOR : THEME.TEXT_COLOR,
        },
        headerTintColor: Platform.OS === 'android' ? THEME.TEXT_COLOR : THEME.PAGE_COLOR,
    }
});

export const AppNavigation = createAppContainer(PennyNavigator);

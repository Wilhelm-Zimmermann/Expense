import {
    createStackNavigator
} from "@react-navigation/stack";
import {
    BottomTabNavigation
} from "./BottomTabNavigation";

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator id={"StackNavigation"} screenOptions={{
            headerStyle: {
                backgroundColor: "#351401",
            },
            headerTintColor: "white",
            cardStyle: {
                backgroundColor: "#3f2f25",
            },
        }}>
            <Stack.Screen name="ExpensesStack" component={BottomTabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};
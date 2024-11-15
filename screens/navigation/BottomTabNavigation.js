import {
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {
    ExpensesScreen
} from "../ExpensesScreen";
import {
    LinkButton
} from "../../components/BottomTabNavigation/LinkButton";
import {
    RecentExpensesScreen
} from "../RecentExpensesScreen";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator id={"BottomTabNavigation"} screenOptions={{
            headerStyle: {
                backgroundColor: "#37188c",
            },
            headerTintColor: "white",
            tabBarActiveTintColor: "white",
            sceneStyle: {
                backgroundColor: "#4923ad",
            },
            tabBarStyle: {
                backgroundColor: "#37188c",
            },
        }}>
            <BottomTab.Screen name="Expenses" component={ExpensesScreen} options={{
                tabBarIcon: ({ size, color}) => <LinkButton color={color} size={size} icon="list-outline" location="Expenses" />
            }}/>
            <BottomTab.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{
                tabBarIcon: ({size, color, focused}) => <LinkButton color={color} size={size} icon={!focused ? "time-outline" : "time-sharp"} location="RecentExpenses" />
            }}/>
        </BottomTab.Navigator>
    )
}
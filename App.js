import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  ExpenseProvider
} from "./store/context/expenseContext";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    StackNavigation
} from "./screens/navigation/StackNavigation";
import "./gesture-handler";

export default function App() {
  return (
      <>
          <StatusBar style="light"/>
          <ExpenseProvider>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
          </ExpenseProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

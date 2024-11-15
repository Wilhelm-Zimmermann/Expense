import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    useExpense
} from "../store/context/expenseContext";
import {
    ExpenseItem
} from "../components/ExpenseItem";
import {
    useNavigation
} from "@react-navigation/native";

import {
    useLayoutEffect,
    useState
} from "react";
import {
    ActionButton
} from "../components/ActionButton";
import {
    ExpenseModal
} from "../components/ExpenseModal";


export const ExpensesScreen = () => {
    const { expenses } = useExpense();
    const { setOptions } = useNavigation();
    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

    const handleToggleExpenseModal = () => {
        setIsExpenseModalOpen(!isExpenseModalOpen);
    }

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => {
                return <ActionButton styles={{marginRight: 8}} icon="add-outline" color="white" size={24} onPress={handleToggleExpenseModal}/>
            }
        })
    }, [])

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => item.id?.toString()}
                    renderItem={({item}) => <ExpenseItem item={item} />}
                />
            </View>

            <ExpenseModal action={"create"} visible={isExpenseModalOpen} onClose={handleToggleExpenseModal} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
})
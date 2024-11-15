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
import {
    IExpense
} from "../shared/interfaces/IExpense";


export const ExpensesScreen = () => {
    const { expenses } = useExpense();
    const { setOptions } = useNavigation();
    const [expense, setExpense] = useState<IExpense>({
        description: "",
        amount: 0,
        id: 0,
        date: new Date(),
    });
    const [modalAction, setModalAction] = useState<"create"|"update">("create");

    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

    const handleToggleExpenseModal = () => {
        setIsExpenseModalOpen(!isExpenseModalOpen);
    }

    const handleCreateExpense = () => {
        setModalAction("create");
        setExpense({
            description: "",
            amount: 0,
            id: 0,
            date: new Date(),
        });
        handleToggleExpenseModal();
    }

    const handleEditExpense = (expenseData: IExpense) => {
        setExpense(expenseData);
        setModalAction("update");
        handleToggleExpenseModal();
    }

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => {
                return <ActionButton styles={{marginRight: 8}} icon="add-outline" color="white" size={24} onPress={handleCreateExpense}/>
            }
        })
    }, [])

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => {
                        console.log(item.id)
                        return item.id?.toString()
                    }}
                    renderItem={({item}) => <ExpenseItem item={item} handleEditExpense={handleEditExpense}/>}
                />
            </View>

            <ExpenseModal action={modalAction} expenseData={expense} visible={isExpenseModalOpen} onClose={handleToggleExpenseModal} />
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
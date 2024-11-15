import {
    Button,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {
    useExpense
} from "../store/context/expenseContext";
import {
    useCallback,
    useState
} from "react";
import {
    IExpense
} from "../shared/interfaces/IExpense";

interface ExpenseModalProps {
    visible: boolean;
    onClose: () => void;
    action: "create" | "update";
}

export const ExpenseModal = ({ visible, onClose, action }: ExpenseModalProps) => {
    const [expense, setExpense] = useState<IExpense>({
        description: "",
        amount: 0,
    } as IExpense);
    const { addExpense, getLastExpense } = useExpense();

    const handleAddExpense = () => {
        const lastExpenseId = getLastExpense().id;
        console.log(expense);
        setExpense({
            ...expense,
            id: lastExpenseId + 1,
            date: new Date(),
        });
        onClose();
    }

    return (
        <SafeAreaView>
            <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
                <View style={styles.container}>
                    <TextInput value={expense.description} placeholder="Expense description" placeholderTextColor="white" style={styles.textInput} onChangeText={value => setExpense({ ...expense, description: value })} />
                    <TextInput value={expense.amount?.toString()} placeholder="Expense amount" placeholderTextColor="white" keyboardType="number-pad" style={styles.textInput} onChangeText={value => setExpense({ ...expense, amount: parseFloat(value) })} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={onClose} color="#eb4034"/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Create" onPress={handleAddExpense} />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#4923ad',
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8
    },
    button: {
        width: "49%",
        borderRadius: 5,
    },
    textInput: {
        color: "white",
        borderWidth: 1,
        borderColor: "#7c4dee",
        borderRadius: 4,
        marginBottom: 8,
        paddingLeft: 8,
    }
})
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
    useEffect,
    useState
} from "react";
import {
    IExpense
} from "../shared/interfaces/IExpense";

interface ExpenseModalProps {
    visible: boolean;
    onClose: () => void;
    action: "create" | "update";
    expenseData: IExpense;
}

export const ExpenseModal = ({ visible, onClose, action, expenseData }: ExpenseModalProps) => {
    const [expense, setExpense] = useState<IExpense>(expenseData);
    const { addExpense, updateExpense, getLastExpense } = useExpense();

    useEffect(() => {
        setExpense(expenseData);
    }, [action, expenseData]);

    const handleExpense = () => {
        const lastExpenseId = getLastExpense().id;
        if(action === "create") {
            setExpense({
                ...expense,
                id: lastExpenseId + 1,
                date: new Date(),
            });
            addExpense(expense);
        } else {
            updateExpense(expense);
        }
        onClose();
    }

    const handleCancel = () => {
        onClose();
    }

    return (
        <SafeAreaView>
            <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
                <View style={styles.container}>
                    <TextInput
                        value={expense.description}
                        placeholder="Expense description"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        onChangeText={value => setExpense({ ...expense, description: value })}
                    />
                    <TextInput
                        value={expense.amount?.toString()}
                        placeholder="Expense amount"
                        placeholderTextColor="white"
                        keyboardType="number-pad"
                        style={styles.textInput}
                        onChangeText={value => setExpense({ ...expense, amount: parseFloat((value == "" || !value) ? "0" : value) })}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={handleCancel} color="#eb4034"/>
                        </View>
                        <View style={styles.button}>
                            <Button title={action == "create" ? "Create" : "Update"} onPress={handleExpense} />
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
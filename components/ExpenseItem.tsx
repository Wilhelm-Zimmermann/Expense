import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    ActionButton
} from "./ActionButton";
import {
    useExpense
} from "../store/context/expenseContext";
import {
    IExpense
} from "../shared/interfaces/IExpense";
import {
    ExpenseModal
} from "./ExpenseModal";
import {
    useState
} from "react";

interface ExpenseItemProps {
    item: IExpense;
    handleEditExpense: (id: IExpense) => void;
}

export const ExpenseItem = ({ item, handleEditExpense }:ExpenseItemProps) => {
    const { removeExpense } = useExpense();

    return (
        <>
            <Pressable style={styles.container} onPress={() => handleEditExpense(item)}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{item.description}</Text>
                    <Text style={[styles.title, {marginTop: 4}]}>{item.date?.toLocaleDateString('en-GB')}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[styles.title, styles.priceAmount ]}>R$ {item.amount}</Text>
                </View>
                <View style={styles.trashContainer}>
                    <ActionButton icon="trash-outline" color="#eb4034" size={24} onPress={() => removeExpense(item.id)}/>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#37188c',
        marginTop: 8,
        padding: 16,
        flex: 1,
        flexDirection: "row",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        borderRadius: 4,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "white",
    },
    descriptionContainer: {
        width: "70%",
    },
    amountContainer: {
        width: "18%",
    },
    trashContainer: {
        width: "7%",
        alignSelf: "center",
        justifyContent: "center",
    },
    priceAmount: {
        fontSize: 18,
        color: "#74eb34",
    }
})
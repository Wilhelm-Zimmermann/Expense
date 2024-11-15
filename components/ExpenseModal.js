import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export const ExpenseModal = ({ visible, onClose }) => {
    return (
        <Modal animationType="slide" visible={visible} onClose={onClose}>
            <View style={styles.container}>
                <TextInput placeholder="Expense description" placeholderTextColor="white" style={styles.textInput} onChangeText={() => console.log("testo")} />
                <TextInput placeholder="Expense amount" placeholderTextColor="white" keyboardType="number-pad" style={styles.textInput} onChangeText={() => console.log("testo")} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onClose} color="#eb4034"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Create" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
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
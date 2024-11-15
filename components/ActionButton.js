import {
    Pressable
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export const ActionButton = ({onPress, icon, size, color, styles}) => {
    return (
        <Pressable style={[styles]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} onPress={onPress} />
        </Pressable>
    )
}
import {
    Pressable,
    StyleSheet,
    ViewStyle
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
    IconProps
} from "@expo/vector-icons/build/createIconSet";
import {
    ComponentProps
} from "react";

interface IActionButtonProps {
    onPress?: () => void;
    icon?: ComponentProps<typeof Ionicons>['name'];
    size: number;
    color?: string;
    styles?:  ViewStyle;
}

export const ActionButton = ({ onPress, icon, size, color, styles }:IActionButtonProps) => {
    return (
        <Pressable style={[styles]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} onPress={onPress} />
        </Pressable>
    )
}
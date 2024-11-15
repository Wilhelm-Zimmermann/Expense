import {
    Pressable
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
    useNavigation
} from "@react-navigation/native";

export const LinkButton = ({ location, icon, size, color }) => {
    const { navigate } = useNavigation();

    const handleNavigateScreen = () => {
        navigate(location);
    }

    return (
        <Pressable>
            <Ionicons name={icon} size={size} color={color} onPress={handleNavigateScreen} />
        </Pressable>
    );
}
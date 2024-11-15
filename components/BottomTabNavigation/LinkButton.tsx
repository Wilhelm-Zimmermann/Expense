import {
    Pressable
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
    NavigationProp,
    useNavigation
} from "@react-navigation/native";
import {
    ComponentProps
} from "react";

interface ILinkButtonProps {
    location: string;
    icon: ComponentProps<typeof Ionicons>['name'];
    size: number;
    color?: string;
}

export const LinkButton = ({ location, icon, size, color }: ILinkButtonProps) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleNavigateScreen = () => {
       navigation.navigate(location);
    }

    return (
        <Pressable>
            <Ionicons name={icon} size={size} color={color} onPress={handleNavigateScreen} />
        </Pressable>
    );
}
import { Text } from "react-native";
import { Container } from "./styles";
import { Trash } from 'phosphor-react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function TaskItem() {
    return (
        <Container>
            <BouncyCheckbox
            />
            <Text>Integer urna interdum massa libero auctor neque turpis turpis semper. </Text>
            <Trash></Trash>
        </Container>
    )
}
import { Text } from "react-native";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <Text>HOme</Text>
        </Container>
        
    )
}
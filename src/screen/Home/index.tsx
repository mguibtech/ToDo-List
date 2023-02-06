import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { InputForm } from "../../components/InputForm";
import theme from "../../theme";
import { Container, HeaderContent, TextTaskCreated, TextTaskDone, TextCont } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <InputForm/>
            <HeaderContent>
                <View style={{alignItems: "center", flexDirection:"row"}}>
                    <TextTaskCreated>Criadas</TextTaskCreated>
                    <TextCont>0</TextCont>
                </View>
                <View style={{alignItems: "center", flexDirection:"row"}}>
                    <TextTaskDone>Concluídas</TextTaskDone>
                    <TextCont>0</TextCont>
                </View>
                
                
            </HeaderContent>
        </Container>
        
    )
}
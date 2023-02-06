import { Container, Button, Input } from "./styles"
import { Trash, PlusCircle} from 'phosphor-react-native'
import theme from "../../theme"

export function InputForm(){
    return(
        <Container>
            <Input placeholder="Adicione uma nova tarefa"/>
            <Button><PlusCircle color={theme.COLORS.GRAY_100}/></Button>
        </Container>
    )
}
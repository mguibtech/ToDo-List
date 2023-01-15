import { Container, Logo } from "./styles";
import logoApp from "../../assets/Logo.png"

export function Header(){
    return(
        <Container>
            <Logo source={logoApp}/>
        </Container>
    )
}
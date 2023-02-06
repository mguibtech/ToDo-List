import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const HeaderContent =  styled.View`
    flex-direction: row;
    margin-top: 32px;
    margin-bottom: 20px;

    justify-content: space-between;

    
    padding: 0 24px;
`;

export const TextTaskCreated = styled.Text`
    color: ${({theme}) => theme.COLORS.BLUE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;
export const TextTaskDone = styled.Text`
    color: ${({theme}) => theme.COLORS.PURPLE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;

export const TextCont = styled.Text`
    width: 25px;
    height: 19px;
    margin-left: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_400};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Tasks = styled.View`
    width: 100%;
    padding: 0 24px 0 24px;
`;
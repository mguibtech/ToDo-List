import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;

    padding: 0 24px;
    margin-top: -30px;

    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.TextInput.attrs(({theme}) => ({
    color: theme.COLORS.GRAY_100,
    placeholderTextColor: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR

}))`
    padding: 12px 16px;
    flex: 1;
    background: ${({theme}) => theme.COLORS.GRAY_500};

    border-radius: 6px;
    margin-right: 4px;
    size: 54px;
    line-height: 140px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_700};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

    /* font-size: ${({theme}) => theme.FONT_SIZE.SM}; */
`;

export const Button = styled.TouchableOpacity.attrs(({theme}) => ({
}))`
    width: 52px;
    height: 52px;

    border-radius: 6px;

    background: ${({theme}) => theme.COLORS.BLUE_DARK};

    align-items: center;
    justify-content: center;
`;
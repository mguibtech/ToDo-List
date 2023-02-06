import styled from "styled-components/native"

export const Container = styled.View`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 8px 12px 12px;
    gap: 8px;

    width: 327px;
    height: 64px;

    background: ${({theme}) => theme.COLORS.GRAY_500};

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;
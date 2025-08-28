import styled from "styled-components/native";

interface StylesProps{
    $player?: number;
}

export const Container = styled.View`
    margin-top: 70%;
    margin-left: 32px;
    margin-right: 32px;

    border-radius: 8px;

    padding: 16px;

    justify-content: center;
    align-items: center;
    gap: 16px;

    background-color: ${({theme}) => theme.colors.background_secondary};

    height: 200px;
`

export const Title = styled.Text`
    color: aliceblue;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
`

export const TextPlayer = styled.Text<StylesProps>`
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    color: ${
        props => props.$player === 1 ? props.theme.colors.blue_text : props.theme.colors.red_text
    };
`
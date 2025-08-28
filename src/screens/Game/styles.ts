import styled from "styled-components/native";

interface StylesProps{
    $player: number;
}

export const Container = styled.View`
    width: 100%;
    flex: 1;

    background-color: ${({theme}) => theme.colors.background_primary};

    justify-content: center;
    align-items: center;

    padding: 0 32px;
`

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 16px 0;
    
    width: 100%;
`

export const TitleText = styled.Text`
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 28px;
`

export const PlayerTurnTextCard = styled.Text<StylesProps>`
    font-size: 28px;

    color: ${
        props => {
            if(props.$player === 1) return props.theme.colors.blue_text
            else return props.theme.colors.red_text
        }
    };
`

export const Main = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const Footer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 16px 80px;
`
export const AuxText = styled.Text`
    color: ${({theme}) => theme.colors.text_span};
    font-size: 14px;
`
import styled from "styled-components/native";

interface StylesProps{
    $player: number;
}

export const Container = styled.View`
    width: 100%;
    flex: 1;

    background-color: ${({theme}) => theme.colors.background_ass};

    justify-content: center;
    align-items: center;

    padding: 0 32px;
`

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 8px;
    border-width: .5px;
    border-color: ${({theme}) => theme.colors.background_light};

    padding: 16px 0;
    
    width: 100%;
`

export const TitleText = styled.Text`
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 16px;
`

export const PlayerTurnCard = styled.View<StylesProps>`
    padding: 16px;
    border-radius: 8px;
    border-width: 1.5px;

    border-color: ${
        props => {
            if(props.$player === 1) return props.theme.colors.blue_icon
            else return props.theme.colors.red_icon
        }
    };

    background-color: ${
        props => {
            if(props.$player === 1) return props.theme.colors.blue_bg
            else return props.theme.colors.red_bg
        }
    };

`

export const PlayerTurnTextCard = styled.Text<StylesProps>`
    font-size: 16px;

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
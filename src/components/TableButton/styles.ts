import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface StylesProps{
    $tag?: string;
}

export const Button = styled(TouchableOpacity)<StylesProps>`
    width: 95px;
    height: 95px;
    margin: 4px;
    
    background-color: ${
        props => {
            if(props.$tag === 'X') return props.theme.colors.blue_bg
            else if(props.$tag === 'O') return props.theme.colors.red_bg
            else return 'transparent'
        }
    };

    border-width: 1.5px;
    border-radius: 16px;
    border-color: ${
        props => {
            if(props.$tag === 'X') return props.theme.colors.blue_icon
            else if(props.$tag === 'O') return props.theme.colors.red_icon
            else return 'gray'
        }
    };

    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text<StylesProps>`
    font-size: 32px;
    font-weight: bold;
    color: ${
        props => {
            if(props.$tag === 'X') return props.theme.colors.blue_text
            else if(props.$tag === 'O') return props.theme.colors.red_text
            else return 'gray'
        }
    };
`
import { processColor, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface StylesProps{
    $x?: number;
    $y?: number;
    $tag?: string;
}

export const Button = styled(TouchableOpacity)<StylesProps>`
    width: 104px;
    height: 95px;

    background-color: ${
        props => {
            if(props.$tag === 'X') return props.theme.colors.blue_bg
            else if(props.$tag === 'O') return props.theme.colors.red_bg
            else return 'transparent'
        }
    };
    ${
        props => {
            if(props.$x === 0) return 'border-right-width: 1px;'
            else if(props.$x === 2) return 'border-left-width: 1px;'
        }
    }
    ${
        props => {
            if(props.$y === 0) return 'border-bottom-width: 1px;'
            if(props.$y === 2) return 'border-top-width: 1px;'
        }
    }
    ${
        props => {
            if(props.$x === 0 && props.$y === 0) return 'border-top-left-radius: 8px;'
            else if(props.$x === 0 && props.$y === 2) return 'border-bottom-left-radius: 8px;'
            else if(props.$x === 2 && props.$y === 0) return 'border-top-right-radius: 8px;'
            else if(props.$x === 2 && props.$y === 2) return 'border-bottom-right-radius: 8px;'
        }
    }
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
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface StylesPros{
    $background?: string;
}

export const Button = styled(TouchableOpacity).attrs({
    activeOpacity: 0.8
})<StylesPros>`
    width: 100%;
    padding: 14px;
    
    border-radius: 16px;

    background-color: ${
        props => props.$background ? props.$background : 'aliceblue'
    };
`

export const ButtonText = styled.Text<StylesPros>`
    color: ${
        props => props.$background ? props.theme.colors.text_primary : 'black'
    };
    font-size: 16px;
    text-align: center;
`
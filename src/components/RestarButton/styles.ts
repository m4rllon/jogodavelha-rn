import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Button = styled(TouchableOpacity)`
    width: 100%;
    background-color: aliceblue;
    padding: 14px;

    border-radius: 16px;
`

export const ButtonText = styled.Text`
    color: 'black';
    font-size: 16px;
    text-align: center;
`
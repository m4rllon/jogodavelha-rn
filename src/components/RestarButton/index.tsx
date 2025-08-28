import { TouchableOpacityProps } from "react-native";
import { 
    Button,
    ButtonText
 } from "./styles";

interface RestartButtonProps extends TouchableOpacityProps{
    background?: string;
    label: string;
}

export function RestartButton({label, background, ...rest}:RestartButtonProps){
    return (
    <Button
    {...rest}
    $background={background}>
        <ButtonText
        $background={background}>
            {label}
        </ButtonText>
    </Button>
    )
}
import { Text } from "react-native";
import { 
    Container,
    Title,
    TextPlayer,
 } from "./styles";
import { RestartButton } from "../RestarButton";

interface EndGameModalProps{
    playerWin: number;
    restartGame: () => void;
}

export function EndGameModal({playerWin, restartGame}:EndGameModalProps){
    const namePlayerWin = playerWin === 1 ? 'X' : 'O'
    if(playerWin !== -1){
        return <Container>
        <Title> 
            <TextPlayer $player={playerWin}>
                {namePlayerWin}
            </TextPlayer>
            {' '} victory
        </Title>

        <RestartButton
        onPress={restartGame}
        label="RESTART"/>
    </Container>
    } else {
        return <Container>
        <Title>
            Draw! Try again.
        </Title>

        <RestartButton
        onPress={restartGame}
        label="RESTART"/>
    </Container>
    } 
}
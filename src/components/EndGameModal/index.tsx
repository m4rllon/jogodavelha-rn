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

    return <Container>
        <Title>
            VITÓRIA DO JOGADOR {' '} 
            <TextPlayer $player={playerWin}>
                {namePlayerWin}
            </TextPlayer>
        </Title>

        <RestartButton
        onPress={restartGame}
        label="Jogar novamente"
        background="#212121ff"/>
    </Container>
}
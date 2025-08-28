import { TableGame } from "@/components/TableGame";
import { 
    Container,
    Header,
    TitleText,
    PlayerTurnCard,
    Main,
    Footer,
    PlayerTurnTextCard,
    AuxText,
 } from "./styles";
import { useState } from "react";
import { RestartButton } from "@/components/RestarButton";
import { Modal } from "react-native";
import { EndGameModal } from "@/components/EndGameModal";

export function Game(){
    const [player, setplayer] = useState(1)
    const [gameStatus, setGameStatus] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [table, setTable] = useState<Array<Array<Number>>>(
        [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
    )

    const handleChangePlayer = () => {
        setplayer( prev => prev === 1 ? 0 : 1)
    }

    const finishGame = () => {
        setModalStatus(true)
    }

    const handleRestartGame = () => {
        setplayer(1)
        setTable(
            [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
        )
        setGameStatus(prev => !prev)
        setModalStatus(false)

    }

    return <Container>
        <Header>
            <TitleText>
                JOGO DA VELHA
            </TitleText>
            <PlayerTurnCard
            $player={player}>
                <PlayerTurnTextCard
                $player={player}>
                    Vez do jogador {player === 1 ? 'X' : 'O'}
                </PlayerTurnTextCard>
            </PlayerTurnCard>
        </Header>

        <Main>
            <TableGame
            table={table}
            setTable={setTable}
            finishGame={finishGame}
            gameStatus={gameStatus}
            player={player}
            changePlayer={handleChangePlayer}/>
            <RestartButton
            label="RECOMEÇAR"
            onPress={handleRestartGame}/>
        </Main>
        <Footer>
            <AuxText>
                Criado por m4rllon!
            </AuxText>
        </Footer>

        <Modal
        animationType='fade'
        transparent={true}
        visible={modalStatus}>
            <EndGameModal
            restartGame={handleRestartGame}
            playerWin={player}/>
        </Modal>
    </Container>
} 
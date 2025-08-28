import { TableGame } from "@/components/TableGame";
import { 
    Container,
    Header,
    TitleText,
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

    const finishGame = (status:number) => {
        if(status === 1) setModalStatus(true)
        else {
            setplayer(-1)
            setModalStatus(true)
        }
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
                It's {' '}
                <PlayerTurnTextCard
                $player={player}>
                    {player === 1 ? 'X' : 'O'}
                </PlayerTurnTextCard>
                {' '} movement
            </TitleText>
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
            label="RESTART"
            onPress={handleRestartGame}/>
        </Main>
        <Footer>
            <AuxText>
                Created by m4rllon!
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
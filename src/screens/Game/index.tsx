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

export function Game(){
    const [player, setplayer] = useState(1)

    const handleChangePlayer = () => {
        setplayer( prev => prev === 1 ? 0 : 1)
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
            player={player}
            changePlayer={handleChangePlayer}/>
            <RestartButton/>
        </Main>
        <Footer>
            <AuxText>
                Criado por m4rllon!
            </AuxText>
        </Footer>
    </Container>
}
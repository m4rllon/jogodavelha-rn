import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { 
    Container,
 } from "./styles";
import { TableButton } from "../TableButton";

interface TableGameProps{
    player: number;
    changePlayer: () => void;
    finishGame: (status:number) => void;
    gameStatus: boolean;
    table: Array<Number[]>;
    setTable: Dispatch<SetStateAction<Array<Number[]>>>;
}

export function TableGame({player, changePlayer, gameStatus, finishGame, table, setTable}:TableGameProps){
    const handleChangeTable = (x:number, y:number, player:number) => {
        const newTable = table.slice()
        newTable[y][x] = player
        setTable(newTable)
    }

    const verifyTable = (player:number) => {
        function verifyRow(rowIndex:number){
            if(table[rowIndex][0] === player && table[rowIndex][0] === table[rowIndex][1] && table[rowIndex][0] === table[rowIndex][2]) return true
            else return false
        }

        function verifyColumn(columnIndex:number){
            if(table[0][columnIndex] === player && table[0][columnIndex] === table[1][columnIndex] && table[0][columnIndex] === table[2][columnIndex]) return true
            else return false
        }

        function verifyDiagonal(){
            if(table[0][0] === player && table[0][0] === table[1][1] && table[0][0] === table[2][2]) return true
            else if(table[0][2] === player && table[0][2] === table[1][1] && table[0][2] === table[2][0]) return true
            else return false
        }

        for(let i = 0; i < 3; i++){
            if(verifyColumn(i)) return 1
            else if(verifyRow(i)) return 1
            else if(verifyDiagonal()) return 1
        }

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(table[i][j] === -1) return 0
            }
        }

        return -1
    }

    useEffect(()=>{
        let controller = verifyTable(player) 
        if(controller !== 0){
            finishGame(controller)
        }
        else {
            changePlayer()
        }
    }, [table])

    return <Container>
        <TableButton
        x={0}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={1}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={2}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={0}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={1}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={2}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={0}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={1}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
        <TableButton
        x={2}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}
        gameStatus={gameStatus}/>
    </Container>
}
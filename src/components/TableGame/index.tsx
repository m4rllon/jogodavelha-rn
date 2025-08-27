import { useEffect, useState } from "react";
import { 
    Container,
 } from "./styles";
import { TableButton } from "../TableButton";

interface TableGameProps{
    player: number;
    changePlayer: () => void;
}

export function TableGame({player, changePlayer}:TableGameProps){
    const [gameStatus, setGameStatus] = useState(false)
    const [table, setTable] = useState<Array<Array<Number>>>(
        [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
    )

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
            if(verifyColumn(i)) return true
            else if(verifyRow(i)) return true
            else if(verifyDiagonal()) return true
            return false
        }
    }

    useEffect(()=>{
        if(verifyTable(player)){
            setGameStatus(true)
            console.log('FIM')
        } else {
            changePlayer()
        }
    }, [table])

    return <Container>
        <TableButton
        x={0}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={0}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={0}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={1}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={1}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={1}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={2}
        y={0}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={2}
        y={1}
        player={player}
        handleChangeTable={handleChangeTable}/>
        <TableButton
        x={2}
        y={2}
        player={player}
        handleChangeTable={handleChangeTable}/>
    </Container>
}
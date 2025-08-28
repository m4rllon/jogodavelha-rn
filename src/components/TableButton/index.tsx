import { useEffect, useState } from "react";
import { 
    Button,
    TextButton,
 } from "./styles";

interface TableButtonProps{
    x: number;
    y: number;
    player: number;
    handleChangeTable: (x:number, y:number, player:number) => void;
    gameStatus: boolean;
}

export function TableButton({x, y, player, handleChangeTable, gameStatus}: TableButtonProps){
    const [buttonTag, setButtonTag] = useState('')
    
    const getPlayerTag = () => {
            return player === 1 ? 'X' : 'O'
    }
    
    const handleChoosePosition = () => {
        handleChangeTable(x, y, player)
        setButtonTag(getPlayerTag())
    }

    useEffect(() => {
        setButtonTag('')
    }, [gameStatus])

    return <Button 
    onPress={() => handleChoosePosition()}
    $tag={buttonTag}>
        <TextButton
        $tag={buttonTag}>
            {buttonTag}
        </TextButton>
    </Button>
}
import React,{useState} from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xisNext, setXisNext] = useState(true);

    const winner = calculateWinner(board);

    const styles = {
        width: '200px',
        margin: '20px auto'
    };


    const handleClick = (i) => {
        const boardCopy = [...board];
        // if user clicks an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // put an X or an O in the clicked square
        boardCopy[i] = xisNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xisNext)

    }
    const jumpTo = () => {


    }
    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next player: ' + (xisNext ? 'X':'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game

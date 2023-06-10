import ticTacToeImage from '../images/tic-tac-toe.png';
export default function Home(){
    return(
        <div className='mainContainer'>
            <img src = {ticTacToeImage} alt='Tic Tac Toe Image'/>
            <div className='buttonContainer'>
                <button className='singlePlayerButton'>Single Player</button>
                <button className='multiplayerButton'> Multiplayer</button>
                <button className='localMultiplayerButton'>Local Multiplayer</button>
            </div>
        </div>
    )
}
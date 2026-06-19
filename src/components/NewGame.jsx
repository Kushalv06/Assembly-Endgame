export default function NewGame(props){
    return (
        <button onClick={props.newGame} className="bg-blue-500 text-white px-10 py-3 block mx-auto my-10 rounded-md border border-white">New Game</button>
    )
}
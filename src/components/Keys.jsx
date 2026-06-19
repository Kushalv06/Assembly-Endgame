export default function Keys(props){
    const alphabets = []
 
    for(let i=65;i<=90;i++){
        const letter = String.fromCharCode(i)
        const style = {backgroundColor : !props.guessed.includes(letter)? 'gold' :         props.word.toUpperCase().includes(letter)? 'lightgreen' : 'lightcoral',
            opacity : props.incorrect === 8? 0.25 : 1
        }

        alphabets.push(<button disabled={props.incorrect === 8} key={i} className='w-10 h-10 rounded-md cursor-pointer' style={style} onClick={() => props.togglekey(letter)} >{letter}</button>)
    }
    return (
        <div className='flex flex-wrap justify-center w-85 ml-auto mr-auto mt-8 gap-1'>
            {alphabets}
        </div>
    )
}
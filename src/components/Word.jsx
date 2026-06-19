export default function Word(props) {
    const word = props.word
    const guessed = props.guessed

    const btns = []


    for (let i = 0; i < word.length; i++) {
        btns.push(<button 
                    key={i} 
                    style={{color : guessed.includes(word[i].toUpperCase())? 'white' : 'red' }} 
                    className='w-12 h-12 border border-white bg-[#3e3e3e] rounded-md text-xl'>
                        {guessed.includes(word[i].toUpperCase()) && word[i].toUpperCase() || props.incorrect === 8 && word[i].toUpperCase()}
                </button>)
    }

    return (
        <>
            <div className='flex gap-1 justify-center mt-8'>
                {btns}
            </div>
        </>
    )
}
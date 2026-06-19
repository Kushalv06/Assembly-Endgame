export default function Deathinfo(props){
    let render = 1
    if(!props.guessed.length || props.word.toUpperCase().includes(props.guessed[props.guessed.length-1])) render=0

    let style = render? {visibility : 'visible'} : {visibility : 'hidden'}

    const language = props.incorrect? props.languages[props.incorrect-1].name : null

    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ]
    let choice = options[Math.floor(Math.random()*options.length)]

    if(props.incorrect === 8){
        choice = 'Game Over! You lose! Better start learning Assembly 😭'
        style = {backgroundColor : 'red'}
    }
    else if(props.correct === new Set(props.word).size){
        choice = 'Yayyy youu wonn!!'
        style = {backgroundColor : 'green'}
    }

    return (
        <div className="flex justify-center items-center bg-purple-400 py-5 px-10 w-fit mx-auto my-6 rounded-lg" style={style}>
            <p className="text-white font-medium text-lg" style={style}>{choice}</p>
        </div>
    )
}
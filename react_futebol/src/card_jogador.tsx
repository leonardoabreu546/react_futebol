type Props = {
    nome: string
    clube: string
    idade: number
}

function CardJogador (props: Props) {
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>{props.clube}</p>
            <p>{props.idade}</p>
        </div>
    )
}

export default CardJogador
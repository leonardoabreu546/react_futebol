type Props = {
    nome: string
    clube: string
    idade: number
}

function CardJogador (props: Props) {
    return(
        <div className="card">
            <div className="card-body">
                <h2>Nome: {props.nome}</h2>
                <p>Clube: {props.clube}</p>
                <p>Idade: {props.idade}</p>
            </div> 
        </div>
    )
}

export default CardJogador
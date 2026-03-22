type Props = {
    nome: string
    cor: string
    ano: number
    cidade: string
}

function CardEquipa(props: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{props.nome}</h2>
        <p>{props.cor}</p>
        <p>{props.ano}</p>
        <p>{props.cidade}</p>
      </div>
    </div>
  )
}

export default CardEquipa

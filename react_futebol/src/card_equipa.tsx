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
        <h2>Nome: {props.nome}</h2>
        <p>Cor: {props.cor}</p>
        <p>Ano: {props.ano}</p>
        <p>Cidade: {props.cidade}</p>
      </div>
    </div>
  )
}

export default CardEquipa

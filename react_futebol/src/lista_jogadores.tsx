const jogadores = [
  { nome: "Ronaldo", clube: "Real Madrid", idade: 40 },
  { nome: "Messi", clube: "Barcelona", idade: 39 }
]

function ListaJogadores(){
    return(
        <div>        
            {jogadores.map(jogador=>(
                <p>{jogador.nome}</p>
            ))}
        </div>
    )
}

export default ListaJogadores
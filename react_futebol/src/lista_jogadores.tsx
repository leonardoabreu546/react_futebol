import CardJogador from './card_jogador'

const jogadores = [
  { nome: "Ronaldo", clube: "Real Madrid", idade: 40 },
  { nome: "Messi", clube: "Barcelona", idade: 39 }
]

function ListaJogadores(){
    return(
        <div>        
            {jogadores.map((jogador, index) =>(
                <CardJogador key={index} nome={jogador.nome} clube={jogador.clube} idade={jogador.idade}></CardJogador>
            ))}
        </div>
    )
}

export default ListaJogadores
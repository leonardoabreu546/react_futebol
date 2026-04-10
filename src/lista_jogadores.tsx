import CardJogador from './card_jogador'
import { useState } from 'react'

const jogadores = [
  { nome: "Ronaldo", clube: "Real Madrid", idade: 40 },
  { nome: "Messi", clube: "Barcelona", idade: 39 }
]


function ListaJogadores(){
    const [jogador, setJogador] = useState("")
    return(
        

        <div>        
            {jogadores.filter(j => j.nome.includes(jogador)).map((jogador, index) =>(
                <CardJogador key={index} nome={jogador.nome} clube={jogador.clube} idade={jogador.idade}></CardJogador>
            ))}

            <input onChange={e => setJogador(e.target.value)}></input>

        </div>

        
    )
}

export default ListaJogadores
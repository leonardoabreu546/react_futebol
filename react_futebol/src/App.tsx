import CardEquipa from './card_equipa'
import CardJogador from './card_jogador'

function App() {
  return (
    <div className="card">
      <div className="card-body">
        <CardEquipa nome="Sporting CP" cor="Verde" ano={1906} cidade="Lisboa" />
        <CardEquipa nome="Porto" cor="Azul" ano={1905} cidade="Porto" />


        <CardJogador nome="Ronaldo" clube="Real Madrid" idade={40} />
        <CardJogador nome="Messi" clube="Barcelona" idade={39} />
      </div>
    </div>
  )
}

export default App
import CardEquipa from './card_equipa'
import CardJogador from './card_jogador'

function App() {
  return (
    <div>
      <CardEquipa nome="Sporting CP" cor="Verde" ano={1906} cidade="Lisboa" />
      <CardEquipa nome="Porto" cor="Azul" ano={1905} cidade="Porto" />

    </div>
  )
}

export default App
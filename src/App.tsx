import CardEquipa from './card_equipa'
import CardJogador from './card_jogador'
import ListaJogadores from './lista_jogadores'
import ListaEquipas from './lista_equipas'
import EquipaAleatoria from './jogador_aleatorio'
import { useState } from 'react'

function App() {
  const [pagina, setPagina] = useState("home")
  return (
    <div>
      {pagina === "home" && 
      <div>
        <div className="row">
          <div className="col">
            <CardEquipa nome="Sporting CP" cor="Verde" ano={1906} cidade="Lisboa" />
          </div>   
          <div className="col">
            <CardEquipa nome="Porto" cor="Azul" ano={1905} cidade="Porto" />
          </div>  
        </div>  
        <div className="row">
          <div className="col">
            <CardJogador nome="Ronaldo" clube="Real Madrid" idade={40} />
          </div>
          <div className="col">
            <CardJogador nome="Messi" clube="Barcelona" idade={39} />
          </div> 
        </div>
        <button onClick={() => setPagina("jogadores")}>Ver Jogadores</button>
        <button onClick={() => setPagina("equipas")}>Ver equipas</button>
      </div>  
}
      {pagina === "jogadores" && 
      <div>Página de jogadores
        <ListaJogadores></ListaJogadores>
      </div>
}
      {pagina === "equipas" &&
      <div>Página de equipas
        <ListaEquipas></ListaEquipas>
      </div> 
}
      {pagina === "aleatoria" &&
      <div>Página de equipa aleatória
        <EquipaAleatoria></EquipaAleatoria>
      </div> 
}
    </div>
)    
}

export default App
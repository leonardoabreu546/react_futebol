import CardEquipa from './card_equipa.tsx'
import { useState } from 'react'

const equipas =[ 
    {nome:"Sporting CP", cor:"Verde", ano:1906, cidade:"Lisboa"},
    {nome:"Porto", cor:"Azul", ano:1905, cidade:"Porto"}
]

function ListaEquipas (){
    const [equipa, setEquipa] = useState ("")

    return(
        <div>

            {equipas.filter(e => e.nome.includes(equipa)).map((equipa, index)=> (
            <CardEquipa key={index} nome={equipa.nome} cor={equipa.cor} ano={equipa.ano} cidade = {equipa.cidade}></CardEquipa>
            ))}

            <input onChange = {e => setEquipa (e.target.value)}></input> 
        </div>
    

)}

export default ListaEquipas
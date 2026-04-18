import { useState } from 'react'

function EquipaAleatoria() {
    const [equipa, setEquipa] = useState<{ nome: string, cor: string, ano: number, cidade: string } | null>(null);

    const equipas = [
        { nome: "Sporting CP", cor: "Verde", ano: 1906, cidade: "Lisboa" },
        { nome: "Porto", cor: "Azul", ano: 1905, cidade: "Porto" }
    ];

    const gerarEquipaAleatoria = () => {
        const equipaAleatoria = equipas[Math.floor(Math.random() * equipas.length)];
        setEquipa(equipaAleatoria);
    };

    return (
        <div>
            {equipa && (
                <div>
                    <h2>{equipa.nome}</h2>
                    <p>Cor: {equipa.cor}</p>
                    <p>Ano de Fundação: {equipa.ano}</p>
                    <p>Cidade: {equipa.cidade}</p>
                </div>
            )}
            <button onClick={gerarEquipaAleatoria}>Gerar Equipa Aleatória</button>
        </div>
    );

}

export default EquipaAleatoria
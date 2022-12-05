import { useState } from "react"

export default function Container() {
    const [input, setInput] = useState("")
    const [peso, setPeso] = useState("")
    const [resultado, setResultado] = useState("Resultado")

    function pesquisar() {
        setPeso("")
        setInput("")
        setResultado("Resultado")
    }

    function calcular() {
        let altura = input
        altura = altura.replace(",", ".")
        let p = peso
        let r = (p / (altura * altura)).toFixed(2)
        if(r !== "NaN" && altura && p){
            setResultado(`Seu IMC é: ${r}`)
        }
    }

    const tab = [
        { descricao: "MENOR QUE 18,5", estado: "MAGREZA", valor: 0 },
        { descricao: "ENTRE 18,5 E 24,9", estado: "NORMAL", valor: 0 },
        { descricao: "ENTRE 25,0 E 29,9", estado: "SOBREPESO", valor: "I" },
        { descricao: "ENTRE 30,5 E 39,0", estado: "OBESIDADE", valor: "II" },
        { descricao: "MAIOR QUE 40,0", estado: "OBESIDADE GRAVE", valor: "III" },
    ]

    return (
        <main>
            <h1>Calculadora de IMC</h1>
            <div>
                <div>
                    <h2>Altura</h2>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <br />
                    <button onClick={pesquisar}>Limpar</button>
                </div>
                <div>
                    <h2>Peso</h2>
                    <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    <br />
                    <button onClick={calcular}>Calcular</button>
                </div>
            </div>
            <div className="resultado">{resultado}</div>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Grau</th>
                    </tr>
                </thead>
                <tbody>
                    {tab.map((p, i) =>
                        <Tabela
                            key={i}
                            descricao={p.descricao}
                            estado={p.estado}
                            valor={p.valor}
                        />)}
                </tbody>
            </table>
        </main>
    )
}
function Tabela({ descricao, estado, valor}) {
    return (
        <tr bgcolor={""}>
            <td>{descricao}</td>
            <td>{estado}</td>
            <td>{valor}</td>
        </tr>
    )
}
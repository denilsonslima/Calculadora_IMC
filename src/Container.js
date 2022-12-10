import { useState } from "react"

export default function Container() {
    const [input, setInput] = useState("")
    const [peso, setPeso] = useState("")
    const [resultado, setResultado] = useState("Resultado")
    const [valorImc, setFaixa] = useState(0)

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
        if (r !== "NaN" && altura && p) {
            setResultado(`Seu IMC é: ${r}`)
            selecionarFaixa(Number(r))
        }
    }


    function selecionarFaixa(calculoImc) {
        if (calculoImc <= 18.5) {
          setFaixa(1);
        } else if (calculoImc > 18.5 && calculoImc <= 24.9) {
          setFaixa(2);
        } else if (calculoImc > 24.9 && calculoImc <= 29.9) {
          setFaixa(3);
        } else if (calculoImc > 29.9 && calculoImc <= 39.9) {
          setFaixa(4);
        } else if (calculoImc > 39.9) {
          setFaixa(5);
        }
      }

    const tab = [
        { id: 1, descricao: "MENOR QUE 18,5", estado: "MAGREZA", valor: 0 },
        { id: 2, descricao: "ENTRE 18,5 E 24,9", estado: "NORMAL", valor: 0 },
        { id: 3, descricao: "ENTRE 25,0 E 29,9", estado: "SOBREPESO", valor: "I" },
        { id: 4, descricao: "ENTRE 30,5 E 39,0", estado: "OBESIDADE", valor: "II" },
        { id: 5, descricao: "MAIOR QUE 40,0", estado: "OBESIDADE GRAVE", valor: "III" },
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
                    {tab.map((p) =>
                        <tr key={p.id} bgcolor={valorImc === p.id ? "#CDEAE3" : "#ffffff"}>
                            <td>{p.descricao}</td>
                            <td>{p.estado}</td>
                            <td>{p.valor}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

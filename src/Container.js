import { useState } from "react"

export default function Container() {
    const [input, setInput] = useState("")
    const [peso, setPeso] = useState("")
    const [resultado, setResultado] = useState("Resultado")

    function pesquisar(){
        setPeso("")
        setInput("")
        setResultado("Resultado")
    }

    function calcular(){
        let altura = input
        let p = peso
        let r = (p/(altura * altura)).toFixed(2)
        setResultado(`Seu IMC é: ${r}`)
    }

    return (
        <main>
            <h1>Calculadora de IMC</h1>
            <div>
                <div>
                    <h2>Altura</h2>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
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
            <div>{resultado}</div>
        </main>
    )   
}
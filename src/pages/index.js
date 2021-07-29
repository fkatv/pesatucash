import React, {useState, useEffect} from "react"
import calculator from '../utils/calculator.js'
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {

  const [tara, setTara] = useState(0);
  const [peso, setPeso] = useState(0);
  const [total, setTotal] = useState(0);
  const [monedaFocus, setMonedaFocus] = useState(0)
  const [resultado_count, setRCount] = useState("")
  const monedas_label = ['$10','$50','$100','$500']

  useEffect(()=>{})

  const calcular = () => {
    const data = calculator(tara, peso, monedaFocus);
    console.log(data)
    if (data) {
      const txt = data[0]
      const valor = data[1]
      setTotal(valor)
      setRCount(txt)
    }
  }



  return (
    <main style={pageStyles}>
      <title>Pesa Cash</title>
      <h1 style={headingStyles}>
        Pesa Cash
        <span>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
        </span>
        <br />
        <span style={headingAccentStyles}>— Laurelito Project! </span>
      </h1>

      <h2>
        Escoja la moneda a pesar
        <br/>
        {monedas_label.map((item, i) => (
          <button key={i} onClick={() => setMonedaFocus(i)} style={{color:monedaFocus === i ? 'green' : "black"}}>{item}</button>
        ))}
      </h2>

      <label>
        Tara en gramos
        <br/>
        <input type="number" placeholder="Tara" min={0} value = {tara} onChange = {(e) => setTara(e.target.value)}/>
      </label>

      <br />

      <label>
        Peso Total en gramos
        <br/>
        <input type="number" placeholder="Peso total" min={0} value = {peso} onChange = {(e) => setPeso(e.target.value)}/>
      </label>

      <h2>${total}</h2>
      <h3>{resultado_count}</h3>

      <button onClick={()=> calcular()}>calcular</button>

      <br/>

      <footer>
      <br/><br/>
      <a href="https://github.com/fkatv/Laurelito"> Ésta página es de Código abierto sin fines de lucro ni analíticas </a>
      </footer>

    </main>
  )
}

export default IndexPage

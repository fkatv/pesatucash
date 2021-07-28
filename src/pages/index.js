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
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


// markup
const IndexPage = () => {

  const [tara, setTara] = useState(0);
  const [peso, setPeso] = useState(0);
  const [total, setTotal] = useState(0);
  const [monedaFocus, setMonedaFocus] = useState(0)
  const monedas_label = ['$10','$50','$100','$500']
  const monedas_valor = [10,50,100,500]

  useEffect(()=>{})

  const calcular = () => {
    const valor = calculator(tara, peso, monedaFocus);
    setTotal(valor)
  }



  return (
    <main style={pageStyles}>
      <title>Test fff</title>
      <h1 style={headingStyles}>
        Moneas
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
        <input type="number" placeholder="Tara" value = {tara} onChange = {(e) => setTara(e.target.value)}/>
      </label>

      <br />

      <label>
        Peso Total en gramos
        <br/>
        <input type="number" placeholder="Peso total" value = {peso} onChange = {(e) => setPeso(e.target.value)}/>
      </label>
      <h2>${total}</h2>
      <button onClick={()=> calcular()}>calcular</button>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage

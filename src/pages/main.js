import React, {useState, useEffect} from "react"
import calculator from '../utils/calculator.js'
// styles
import { Button, Label, Input, Heading, Paragraph, Box} from 'theme-ui'

const headingAccentStyles = {
  color: "#663399",
}

// markup
const MainPage = () => {

  const [tara, setTara] = useState(0);
  const [peso, setPeso] = useState(0);
  const [total, setTotal] = useState(0);
  const [monedaFocus, setMonedaFocus] = useState(0)
  const [resultado_count, setRCount] = useState("")
  const monedas_label = ['$10','$50','$100','$500']

  useEffect(()=>{})

  const calcular = () => {
    if (peso <= 15000) {
      const data = calculator(tara, peso, monedaFocus);
      console.log(data)
      if (data) {
        const txt = data[0]
        const valor = data[1]
        setTotal(valor)
        setRCount(txt)
      }
    } else {
      alert("Máximo 15 kilos (15000 grs.)")
    }
  }


  return (
    <main sx={
      {color: "#232129",
      fontFamily: "-apple-system, Roboto, sans-serif, serif",}
    }>
      <Heading sx={{fontFamily: "-apple-system, Roboto, sans-serif, serif",}}>
        Pesa Tu Cash
        <span>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
        </span>
        <br />
        <span style={headingAccentStyles}>— Laurelito Project! </span>
      </Heading>

    <Box sx={{fontFamily: "-apple-system, Roboto, sans-serif, serif",}}>
        <h2>
          <Label>Escoja la moneda a pesar</Label>
          <br/>
          {monedas_label.map((item, i) => (
            <Button key={i} onClick={() => setMonedaFocus(i)}
            style={{color:monedaFocus === i ? 'green' : "black"}}
            >{item}</Button>
          ))}
        </h2>


        <Label>Tara en gramos</Label>
        <Input type="number" mb={3} placeholder="Tara" min={0}
        value = {tara} onChange = {(e) => setTara(e.target.value)}/>


        <br />

        <Label>Peso Total en gramos</Label>
        <Input type="number" mb={3} placeholder="Peso total" min={0}
        value = {peso} onChange = {(e) => setPeso(e.target.value)}/>


        <Heading as="h3" sx={{fontFamily: "-apple-system, Roboto, sans-serif, serif",}}
        >${total}</Heading>
        <Paragraph mb={2} sx={{fontFamily: "-apple-system, Roboto, sans-serif, serif",}}
        >{resultado_count}</Paragraph>

        <Button onClick={()=> calcular()} sx={{color:'#604848', bg:"#c0d860"}}
        >Calcular</Button>
      </Box>


      <footer>
      <br/><br/>
      <a href="https://github.com/fkatv/Laurelito">
       Ésta página es de Código abierto sin fines de lucro ni analíticas </a>
      </footer>

    </main>
  )
}

export default MainPage

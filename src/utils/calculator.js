const monedas = [
  {"nombre":"$10","peso":3.5, "valor":10, "imagen":""},
  {"nombre":"$50","peso":7.0, "valor":50, "imagen":""},
  {"nombre":"$100 mapuche","peso":7.58, "valor":100, "imagen":""},
  {"nombre":"$500","peso":6.5, "valor":500, "imagen":""},
  {"nombre":"$100 antigua","peso":9, "valor":100, "imagen":""},

]
/** *
Retorna numero de monedas y su valor en un pesaje de monedas comprobatorio.
P: peso en gramos de las monedas
M: array de tipos de monedas que pueden haber en un conjunto de monedas [prediccion si hay mas de 2.]
*/
const tolerancia = 0.5

const estimaMoneys = (peso, gramo_monedas) => {
  return peso / gramo_monedas
}

const calculaValor = (x,y,m1,m2) => {
  return x*m1+y*m2
}

const eAbsoluto = (v) => {
  return v - parseInt(v)
}

const prueba_y_Error = (i,j,m1,m2,P) => {
  const test = Math.abs(i*m1+j*m2 -P)
  console.log(i,j, test)
  if (test === 0) return true
  if (-tolerancia <= test <= tolerancia) return true

  return false
}

const calcularMonto = (tara, P, M) => {

  const m_nombre = monedas[M].nombre
  const m_valor = monedas[M].valor
  const m_peso = monedas[M].peso
  console.log(tara, P, M, m_nombre, m_valor,m_peso)
  P = Math.abs(P - tara)
  const _x = estimaMoneys(P, m_peso)
  const e_x = eAbsoluto(_x)
  console.log(m_valor)
  if ( m_valor < 100 ||  m_valor === 500){
    if (e_x === 0 || -tolerancia <= e_x <= tolerancia) {
      return valorCondicionado(e_x,_x, m_valor, m_nombre)
    } else {
        const txt = parseInt(_x) + " moneda(s)* de " + m_nombre
        return [txt , parseInt(_x) * m_valor ]
    }
  }
  else
    {
      // para las dos monedas de 100
      const m100_antigua = monedas[4]
      const m100_mapu = monedas[2]
      return calcularSiHayDosTiposMoneda(P,_x,e_x,100,m100_mapu, m100_antigua);
    }
    alert("Sus monedas tienen scotchs o estan con peso extra / o su balanza está demasiado descalibrada")
    return(['#Mala medición, recalibre', 0])
  }

  const calcularSiHayDosTiposMoneda = (P,_x,e_x,m_valor,moneda1,moneda2) => {
    const mpeso1 = moneda1.peso
    const mpeso2 = moneda2.peso
    const _y = estimaMoneys(P, mpeso2)
    const e_y = eAbsoluto(_y)

    if (e_x === 0 || e_y === 0) {
      if(-tolerancia <= e_x <= tolerancia){
        return valorCondicionado(e_x, _x, m_valor, moneda1.nombre)
      } else {
        return valorCondicionado(e_y, _y, m_valor, moneda2.nombre)
      }
    } else {
      console.log('entro a calcular los 100')
      for (const i of Array(Math.ceil(_x)+1).keys()) {
        for (const j of Array(Math.ceil(_y)+1).keys()) {
          if (prueba_y_Error(i,j,mpeso1,mpeso2,P)){
            return [`${i} moneda(s) nuevas y ${j} moneda(s) antiguas.`,calculaValor(i,j,100,100)]
          }
        }
      }
      alert("Sus monedas tienen scotchs o estan con peso extra / o su balanza está demasiado descalibrada")
      return(['*Mala medición, recalibre', 0])
    }
  }

  const valorCondicionado = (e_, __x, valor, coin_name) => {
    if(e_ < 0) __x += tolerancia
    const x = parseInt(__x)
    return [Math.ceil(__x) + " moneda(s)# de "+coin_name, x * valor]
  }


export default calcularMonto;

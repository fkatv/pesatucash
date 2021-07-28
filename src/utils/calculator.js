const monedas = [
  {"nombre":"$10","peso":3.5, "valor":10, "imagen":""},
  {"nombre":"$50","peso":7.0, "valor":50, "imagen":""},
  {"nombre":"$100 mapuche","peso":7.58, "valor":100, "imagen":""},
  {"nombre":"$100 antigua","peso":9, "valor":100, "imagen":""},
  {"nombre":"$500","peso":6.5, "valor":500, "imagen":""},
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
  alert(x+""+y)
  return x*m1+y*m2
}

const eAbsoluto = (v) => {
  return v - parseInt(v)
}

const prueba_y_Error = (i,j,m1,m2,P) => {
  test = Math.abs(i*m1+j*m2 -P)
  if (-tolerancia <= test < tolerancia) return true
  return false
}

const extraeValor_Peso = (M) => {
  let coins = M.map((item, i) => monedas[item])
  return [ coins.map((i) => i.valor), coins.map((i) => i.peso) ]
}

const calcularMonto = (tara, P, M) => {
  const data = extraeValor_Peso(M);
  const m_valor = data[0]
  const m_peso = data[1]
  P = Math.abs(P - tara)
  const _x = estimaMoneys(P, m_peso[0])
  const e_x = eAbsoluto(_x)
  if (m_valor !== 100){
    if (e_x ==0 || -tolerancia <= e_x <= tolerancia) {
      return valorCondicionado(e_x,_x, m_valor[0])
    } else {
        // for (const i of Array(Math.ceil(_x)+1).keys()) {
        //   let test = Math.abs(i*m_peso[0] -P)
        //   if (-tolerancia <= test < tolerancia) return i*m_valor
        // }
        return parseInt(_x)*m_valor[0]
      }
    }
    else
    {
      // para las dos monedas de 100
      const _y = estimaMoneys(P, m_peso[0])
      const e_y = eAbsoluto(_y)

      if (e_x === 0 || e_y === 0) {
        if(-tolerancia <= e_x <= tolerancia){
          return valorCondicionado(e_x, _x, m_valor[0])
        } else {
          return valorCondicionado(e_y, _y, m_valor[0])
        }
      } else {
        for (const i of Array(Math.ceil(_x)+1).keys()) {
          for (const j of Array(Math.ceil(_y)+1).keys()) {
            if (prueba_y_Error(i,j,9,7.58,P)) return calculaValor(i,j,100,100)
          }
        }
      }
    }
  }

  const valorCondicionado = (e_, __x, valor) => {
    if(e_ < 0) __x += tolerancia
    const x = parseInt(__x)
    return x * valor
  }


export default calcularMonto;

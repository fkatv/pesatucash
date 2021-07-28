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
  const m_valor = monedas[M].valor
  const m_peso = monedas[M].peso
  console.log(M)
  P = Math.abs(P - tara)
  console.log('peso sin tara:'+P)
  const _x = estimaMoneys(P, m_peso)
  const e_x = eAbsoluto(_x)
  if (100 < m_valor  >= 500){
    if (e_x === 0 || -tolerancia <= e_x <= tolerancia) {
      return valorCondicionado(e_x,_x, m_valor)
    } else {
        return parseInt(_x)*m_valor
    }
  }
  else
    {
      // para las dos monedas de 100
      const _y = estimaMoneys(P, m_peso)
      const e_y = eAbsoluto(_y)

      if (e_x === 0 || e_y === 0) {
        if(-tolerancia <= e_x <= tolerancia){
          return valorCondicionado(e_x, _x, m_valor)
        } else {
          return valorCondicionado(e_y, _y, m_valor)
        }
      } else {
        console.log('entro a calcular los 100')
        for (const i of Array(Math.ceil(_x)+1).keys()) {
          for (const j of Array(Math.ceil(_y)+1).keys()) {
            if (prueba_y_Error(i,j,9,7.58,P)) return calculaValor(i,j,100,100)
          }
        }
      }
    }
    alert('Sus monedas tienen scotchs o estan con peso extra / o su balanza está demasiado descalibrada')
  }

  const valorCondicionado = (e_, __x, valor) => {
    if(e_ < 0) __x += tolerancia
    const x = parseInt(__x)
    return x * valor
  }


export default calcularMonto;

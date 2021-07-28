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
const calcularMonto = (tara, P, M) => {
  console.log(P, M)
  P = Math.abs(P - tara)
  let coins1 = [3.5,10]

  return (P/coins1[0] * coins1[1])
}

export default calcularMonto;

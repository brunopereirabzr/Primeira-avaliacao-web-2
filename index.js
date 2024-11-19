import cifra from './cesar.js'

let teste = cifra.cifraLetra('a',3)
let teste2 = cifra.decifrarLetra('z',3)

let teste3 =  cifra.criptografia("bruno",2,cifra.cifraLetra)

console.log(teste)
console.log(teste2)
console.log(teste3)
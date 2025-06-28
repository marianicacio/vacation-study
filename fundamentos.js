//Variaveis

//variavel que varia
let nome = "Maria"
nome = "Carlos"

console.log(nome)

//variavel constante
const idade = 20
// idade = 30

console.log(idade)

//Arrays

const pessoa = {nome : "carlos"}
pessoa.nome = "Maria"

console.log(pessoa)

//Atividade 1 Arrumar o codigo

const frutas = ['maçã', 'banana'];
frutas.push = ('laranja'); //Adicionar na array

let idad = 30;
idad = 31; 

console.log(frutas)

//Arrow function

//Forma pratica de criar funções
const somar = (a, b) => a + b
console.log(somar(2,5))

const dobro = x => x * 2
console.log(dobro(2))

//?
const objeto = () => ({nome: 'maria'})
console.log(objeto())

//Atividade 2 Transformar em Arrow function

// function mostrarMensagem(nome) {
//   return "Olá, " + nome;
// }

const mostrarMensagem2 = (nome) => `Ola, ${nome}`
console.log(mostrarMensagem2('maria'))

//Manipulação de Array
const numeros = [2,3,4]

const num = numeros.map(n => n *2) //dobra os valores da array
console.log(num)

const filtro = numeros.filter(n => n % 2 == 0) //trazer todos os pares, ele filtra os valores da array
console.log(filtro)

const soma = numeros.reduce((acc, val) => acc + val, 0); // 6

console.log(soma)

// Atividade 3 Manipular arrays

const number = [1,2,3,4,5]


//1
const prompt = require("prompt-sync")();

const vip = ['Amanda', 'Diego', 'Beatriz', 'Carlos']
const codigoPista = "PISTA123"

const nome = prompt("Digite seu nome: ")
const idade = Number(prompt("Digite sua idade: "))

if (idade < 18) {
  console.log(`Acesso negado, ${nome}. Evento restrito para maiores de idade.`)
}
else if (vip.includes(nome)) {
  console.log(`Bem-vindo(a) à Área VIP, ${nome}!`)
}
else {

  console.log(`Olá, ${nome}. Seu nome não está na lista VIP.`)

  let tentativas = 3

  while (tentativas > 0) {

    const codigo = prompt("Digite o código da pista: ")

    if (codigo === codigoPista) {
      console.log(`Código correto! Bem-vindo(a) à Pista Comum, ${nome}!`)
      break
    }

    tentativas--
    console.log("Código incorreto")

    if (tentativas === 0) {
      console.log("Acesso negado. Você esgotou suas tentativas.")
    }
  }
}

//2
const prompt = require("prompt-sync")();

const numero = Math.floor(Math.random() * 20) + 1

let palpite

while (palpite !== numero) {

  palpite = Number(prompt("Adivinhe o número (1-20): "))

  if (palpite > numero) {
    console.log("Muito alto")
  }
  else if (palpite < numero) {
    console.log("Muito baixo")
  }
}

console.log("Parabéns! Você acertou!")

//3
const prompt = require("prompt-sync")();

function ehPalindromo(palavra) {

  const invertida = palavra.split("").reverse().join("")
  return palavra === invertida
}

const palavra = prompt("Digite uma palavra: ")

if (ehPalindromo(palavra)) {
  console.log("É um palíndromo")
}
else {
  console.log("Não é um palíndromo")
}

//4
const prompt = require("prompt-sync")();

function calcularIMC(peso, altura) {
  return peso / (altura * altura)
}

function interpretarIMC(imc) {

  if (imc < 18.5) return "Abaixo do peso"
  if (imc < 25) return "Peso normal"
  if (imc < 30) return "Sobrepeso"

  return "Obesidade"
}

const nome = prompt("Nome: ")

let peso
let altura

do {
  peso = Number(prompt("Peso: "))
} while (peso <= 0 || isNaN(peso))

do {
  altura = Number(prompt("Altura: "))
} while (altura <= 0 || isNaN(altura))

const imc = calcularIMC(peso, altura)
const classificacao = interpretarIMC(imc)

const paciente = {
  nome,
  peso,
  altura,
  imc,
  classificacao
}

console.log(`Relatório de ${nome}`)
console.log(paciente)

//5const prompt = require("prompt-sync")();

const tarefas = []

while (true) {

  const entrada = prompt("Digite tarefa ou 'parar': ")

  if (entrada.toLowerCase() === "parar") break

  tarefas.push({
    descricao: entrada,
    concluida: false
  })
}

console.log(tarefas)
console.log(`Você tem ${tarefas.length} tarefas pendentes`)

//6
const prompt = require("prompt-sync")();

function criarPerfilDev() {

  const nome = prompt("Nome: ")
  const email = prompt("Email: ")
  const idade = Number(prompt("Idade: "))

  const habilidades = []

  while (true) {

    const skill = prompt("Adicione habilidade ou 'fim': ")

    if (skill.toLowerCase() === "fim") break

    habilidades.push(skill)
  }

  return {
    nome,
    email,
    idade,
    habilidades,
    isAdmin: false
  }
}

const perfil = criarPerfilDev()

console.log(perfil)

//7
const prompt = require("prompt-sync")();

const senhaMestre = "admin123"

function promoverParaAdmin(usuario, senha) {

  if (senha === senhaMestre) {
    usuario.isAdmin = true
    return "Promoção concedida! Status Admin: true"
  }

  return "Senha incorreta. Acesso negado."
}

const usuario = {
  nome: "João",
  isAdmin: false
}

const senha = prompt("Digite senha admin: ")

console.log(promoverParaAdmin(usuario, senha))
console.log(usuario)

//8
const alunos = [
  {nome:"Ana", notaFinal:5},
  {nome:"Bruno", notaFinal:8},
  {nome:"Carlos", notaFinal:9},
  {nome:"Diego", notaFinal:3}
]

let soma = 0
let melhor = alunos[0]
let pior = alunos[0]

for (const aluno of alunos) {

  soma += aluno.notaFinal

  if (aluno.notaFinal > melhor.notaFinal) melhor = aluno
  if (aluno.notaFinal < pior.notaFinal) pior = aluno
}

const media = soma / alunos.length

const relatorioFinal = {
  mediaDaTurma: media,
  melhorAluno: melhor.nome,
  piorAluno: pior.nome
}

console.log(relatorioFinal)

//9
const alunos = [
  {nome:"Ana", notaFinal:5},
  {nome:"Bruno", notaFinal:8},
  {nome:"Carlos", notaFinal:9},
  {nome:"Diego", notaFinal:3}
]

let soma = 0
let melhor = alunos[0]
let pior = alunos[0]

for (const aluno of alunos) {

  soma += aluno.notaFinal

  if (aluno.notaFinal > melhor.notaFinal) melhor = aluno
  if (aluno.notaFinal < pior.notaFinal) pior = aluno
}

const media = soma / alunos.length

const relatorioFinal = {
  mediaDaTurma: media,
  melhorAluno: melhor.nome,
  piorAluno: pior.nome
}

console.log(relatorioFinal)

//10
const produtos = [
{id:1,nome:"TV",preco:2000,categoria:"Eletrônicos"},
{id:2,nome:"Camisa",preco:80,categoria:"Roupas"},
{id:3,nome:"Sofá",preco:1200,categoria:"Casa"},
{id:4,nome:"Celular",preco:1500,categoria:"Eletrônicos"},
{id:5,nome:"Calça",preco:120,categoria:"Roupas"}
]

const totalEletronicos = produtos
.filter(p => p.categoria === "Eletrônicos")
.reduce((s,p)=>s+p.preco,0)

const inventarioPorCategoria = {}

for(const p of produtos){

if(!inventarioPorCategoria[p.categoria]){
inventarioPorCategoria[p.categoria] = []
}

inventarioPorCategoria[p.categoria].push(p)
}

console.log(totalEletronicos)
console.log(inventarioPorCategoria)

//questao 1
class ContaCorrente {

  #numeroConta
  #saldo
  #limite
  #historico

  constructor(numeroConta, saldoInicial, limite) {

    if (saldoInicial < 0) {
      throw new Error("Saldo inicial não pode ser negativo")
    }

    if (limite < 0) {
      throw new Error("Limite não pode ser negativo")
    }

    this.#numeroConta = numeroConta
    this.#saldo = saldoInicial
    this.#limite = limite
    this.#historico = []
  }

  getSaldo() {
    return this.#saldo
  }

  getNumeroConta() {
    return this.#numeroConta
  }

  getHistorico() {
    return this.#historico
  }

  setLimite(limite) {
    if (limite >= 0) {
      this.#limite = limite
    }
  }

  depositar(valor) {

    if (valor <= 0) {
      throw new Error("Valor inválido")
    }

    this.#saldo += valor
    this.#historico.push(`DEPÓSITO: +R$ ${valor}`)
  }

  sacar(valor) {

    if (valor <= 0) {
      throw new Error("Valor inválido")
    }

    if (valor > this.#saldo + this.#limite) {
      throw new Error("Saldo insuficiente")
    }

    this.#saldo -= valor
    this.#historico.push(`SAQUE: -R$ ${valor}`)
  }

  transferir(valor, contaDestino) {

    this.sacar(valor)
    contaDestino.depositar(valor)

    this.#historico.push(`TRANSFERÊNCIA ENVIADA: -R$ ${valor}`)
    contaDestino.#historico.push(`TRANSFERÊNCIA RECEBIDA: +R$ ${valor}`)
  }

  exibirHistorico() {
    return this.#historico.join("\n")
  }

  toString() {
    return `Conta: ${this.#numeroConta}
Saldo: R$ ${this.#saldo}
Limite: R$ ${this.#limite}`
  }
}

//questao 2
class Retangulo {

  #base
  #altura

  constructor(base, altura) {

    if (base <= 0 || altura <= 0) {
      throw new Error("Base e altura devem ser maiores que 0")
    }

    this.#base = base
    this.#altura = altura
  }

  calcularArea() {
    return this.#base * this.#altura
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura)
  }

  ehQuadrado() {
    return this.#base === this.#altura
  }

  redimensionar(fator) {
    this.#base *= fator
    this.#altura *= fator
  }

  toString() {

    const tipo = this.ehQuadrado() ? "Quadrado" : "Retângulo"

    return `Base: ${this.#base}
Altura: ${this.#altura}
Área: ${this.calcularArea()}
Perímetro: ${this.calcularPerimetro()}
Tipo: ${tipo}`
  }
}

//questao 3
class Data {

  constructor(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }

  getDia() {
    return this.dia
  }

  setDia(dia) {
    this.dia = dia
  }

  getMes() {
    return this.mes
  }

  setMes(mes) {
    this.mes = mes
  }

  getAno() {
    return this.ano
  }

  setAno(ano) {
    this.ano = ano
  }

  toString() {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

//questao 4
class Data {

  constructor(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }

  getDia() {
    return this.dia
  }

  setDia(dia) {
    this.dia = dia
  }

  getMes() {
    return this.mes
  }

  setMes(mes) {
    this.mes = mes
  }

  getAno() {
    return this.ano
  }

  setAno(ano) {
    this.ano = ano
  }

  toString() {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

//questao 5
class Produto {

  constructor(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
  }

  calcularTotal() {
    return this.preco * this.quantidade
  }

  getNome() {
    return this.nome
  }

  setNome(nome) {
    this.nome = nome
  }

  getPreco() {
    return this.preco
  }

  setPreco(preco) {
    this.preco = preco
  }

  getQuantidade() {
    return this.quantidade
  }

  setQuantidade(q) {
    this.quantidade = q
  }
}

//questao 6
class Cliente {

  constructor(nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, escolaridade) {

    this.nome = nome
    this.cpf = cpf
    this.dataNascimento = dataNascimento
    this.endereco = endereco
    this.email = email
    this.ocupacao = ocupacao
    this.rendaAnual = rendaAnual
    this.escolaridade = escolaridade
  }

  toString() {
    return `
Nome: ${this.nome}
CPF: ${this.cpf}
Nascimento: ${this.dataNascimento}
Endereço: ${this.endereco}
Email: ${this.email}
Ocupação: ${this.ocupacao}
Renda Anual: ${this.rendaAnual}
Escolaridade: ${this.escolaridade}
`
  }
}

//questao 7
class Livro {

  #titulo
  #autor
  #editora
  #anoPublicacao
  #disponivel

  constructor(titulo, autor, editora, anoPublicacao) {

    this.#titulo = titulo
    this.#autor = autor
    this.#editora = editora
    this.#anoPublicacao = anoPublicacao
    this.#disponivel = true
  }

  emprestar() {

    if (!this.#disponivel) {
      throw new Error("Livro já emprestado")
    }

    this.#disponivel = false
  }

  devolver() {
    this.#disponivel = true
  }

  estaDisponivel() {
    return this.#disponivel
  }

  idadeLivro() {
    const anoAtual = new Date().getFullYear()
    return anoAtual - this.#anoPublicacao
  }

  toString() {

    const status = this.#disponivel ? "Disponível" : "Emprestado"

    return `
Título: ${this.#titulo}
Autor: ${this.#autor}
Editora: ${this.#editora}
Ano: ${this.#anoPublicacao}
Idade: ${this.idadeLivro()} anos
Status: ${status}
`
  }
}

//questao 8 
class Endereco {

  constructor(rua, numero, complemento, bairro, cidade, estado, cep) {

    this.rua = rua
    this.numero = numero
    this.complemento = complemento
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
    this.cep = cep
  }

  getRua() { return this.rua }
  setRua(v) { this.rua = v }

  getNumero() { return this.numero }
  setNumero(v) { this.numero = v }

  getComplemento() { return this.complemento }
  setComplemento(v) { this.complemento = v }

  getBairro() { return this.bairro }
  setBairro(v) { this.bairro = v }

  getCidade() { return this.cidade }
  setCidade(v) { this.cidade = v }

  getEstado() { return this.estado }
  setEstado(v) { this.estado = v }

  getCep() { return this.cep }
  setCep(v) { this.cep = v }
}

//questao 9
//veiculo
class Veiculo {

  constructor(placa, modelo, capacidade) {
    this.placa = placa
    this.modelo = modelo
    this.capacidade = capacidade
    this.passageiros = 0
  }

  verificarLotacao() {

    if (this.passageiros > this.capacidade) {
      console.log("Capacidade ultrapassada!")
    } else {
      console.log("Lotação dentro do limite")
    }
  }
}

//onibus
class Onibus extends Veiculo {

  constructor(placa, modelo, capacidade, linha) {
    super(placa, modelo, capacidade)
    this.linha = linha
  }
}

//metro
class Metro extends Veiculo {

  constructor(placa, modelo, capacidade, numeroDeVagoes) {
    super(placa, modelo, capacidade)
    this.numeroDeVagoes = numeroDeVagoes
  }
}

//bilhete
class Bilhete {

  constructor(codigo, saldo) {
    this.codigo = codigo
    this.saldo = saldo
  }

  recarregar(valor) {
    this.saldo += valor
  }
}

//QUESTAO 10 RPG
//personagem
class Personagem {

  constructor(nome, vida, forca) {

    if (this.constructor === Personagem) {
      throw new Error("Classe abstrata")
    }

    this.nome = nome
    this.pontosDeVida = vida
    this.forca = forca
    this.nivel = 1
    this.experiencia = 0
  }

  atacar() {
    throw new Error("Método deve ser implementado")
  }

  defender() {
    throw new Error("Método deve ser implementado")
  }

  ganharExperiencia(xp) {

    this.experiencia += xp

    if (this.experiencia >= 100) {
      this.nivel++
      this.forca += 5
      this.pontosDeVida += 10
      this.experiencia = 0
    }
  }
}

///guerreiro
class Guerreiro extends Personagem {

  atacar(inimigo) {
    inimigo.defender(this.forca)
  }

  defender(dano) {
    this.pontosDeVida -= dano / 2
  }
}

//mago
class Mago extends Personagem {

  atacar(inimigo) {
    inimigo.defender(this.forca)
  }

  defender(dano) {
    this.pontosDeVida -= dano
  }

  lancarFeitico(inimigo) {
    inimigo.defender(this.forca * 2)
  }
}

//item
class Item {

  constructor(nome, bonusForca) {
    this.nome = nome
    this.bonusForca = bonusForca
  }

  aplicar(personagem) {
    personagem.forca += this.bonusForca
  }
}

//batalha
class Batalha {

  iniciar(p1, p2) {

    while (p1.pontosDeVida > 0 && p2.pontosDeVida > 0) {

      p1.atacar(p2)

      if (p2.pontosDeVida <= 0) break

      p2.atacar(p1)
    }

    if (p1.pontosDeVida > 0) {
      console.log(`${p1.nome} venceu`)
    } else {
      console.log(`${p2.nome} venceu`)
    }
  }
}


//Exercício de interpretação de código
//1)

//a) 10 e 50

//b) Não apareceria nada


//2)

//a) A função nos responde verdadeiro ou falso se há no texto digitado a palavra cenoura

//b) Nos 3 casos a resposta veio "true"

//Exercícios de escrita de código

//1)

//a)
/*
function imprimirFrase() {
	console.log("Eu sou Leonardo, tenho 32 anos, moro em São Leopoldo e sou estudante")
}

imprimirFrase();
*/

//b)
/*function fraseCompleta() {
	
	const nome = prompt("Qual seu nome?")
	const idade = prompt("Qual sua idade?")
	const mora = prompt("Onde você mora?")
	const profissao = prompt("Qual sua profissão?")
	console.log(`Eu sou, ${nome}, tenho ${idade}, anos, moro em ${mora} e sou ${profissao}`)
}
fraseCompleta()
*/
//2)
//a)
/*
	function soma() {
	let numero1 = prompt("Digite um número")
	let numero2 = prompt("Digite um número")
	let valorTotal = (Number(numero1) + Number(numero2))
	return valorTotal
}

	console.log(soma())


//b) 

	function maior(primeroValor, segundoValor) {
	const resultadoUm = (Number(primeroValor) >= Number(segundoValor))
	
		return resultadoUm
	}

	let numero1 = prompt("Digite um número")
	let numero2 = prompt("Digite um número")

	const result = maior(numero1 , numero2)
	console.log(result)
*/

//c) 
	function divPorDois (numeroUsuario) {
		const Div2 = Number(numeroUsuario) % 2 

		return Div2
	}
	const numeroUsuario = prompt("Digite um número")
	const total = divPorDois()
	console.log(total)

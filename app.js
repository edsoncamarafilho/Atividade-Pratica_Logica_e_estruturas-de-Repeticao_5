//05 PRÁTICA Estruturas Condicionais e de repetição 1 30/10/2023 | DESPERTAR.DEV | Carla Silva

/*1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo. */

    let aluno = 0
    let idade = 0
    let media = 0

    while(idade < 999) {

        idade = Number(prompt('Digite a idade de um aluno'))
        
        if(idade < 999) {
            media = media + idade
            aluno ++
          
        }
    }

    document.write(`Essa é a media dos alunos ${media / aluno} <br><br>`)
    document.write(`Essa é a quantidade de alunos ${aluno}<br><br>`)




/*2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.*/


let salarioHomens = 0
let salarioMulheres = 0

continuar = true

while(continuar) {

    let salario = Number(prompt('Qual o salário?'))
    let sexo = prompt('O salário é pago à um homem ou à uma mulher?')

    if (sexo === "homem"){
        salarioHomens += salario
    }

    else if (sexo === "mulher"){
        salarioMulheres += salario
    }

    continuar = confirm('Deseja continuar?')

}

document.write(`O salário pago aos homens é de R$${salarioHomens} <br><br>`)

document.write(`O salário pago as mulheres é de R$${salarioMulheres}<br><br>`)



/*3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/


const valorInicial = Number(prompt("Digite o valor INICIAL da contagem:"))
const valorFinal = Number(prompt("Digite o valor FINAL da contagem:"))
const valorIncremento = Number(prompt("Digite o valor de INCREMENTO da contagem:"))

document.write("Contagem: ")
for (let valor = valorInicial; valor <= valorFinal; valor += valorIncremento) {
    document.write(valor + " ")
} 
document.write(`${valorFinal}<br>`)
document.write(" Acabou!")



/*4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
b. Mulheres ganham 13% de desconto*/



    let nome = prompt('Digite o seu nome')
    let sexo = prompt('Digite F para Feminino ou M para Masculino').toUpperCase()
    let valorCompra = Number(prompt('Digite o valor da sua compra'))
   
    if (sexo === 'F') {
       valorCompra = valorCompra * 0.87 // 13% de desconto
    } else if (sexo === 'M') {
       valorCompra = valorCompra * 0.92 // 8% de desconto
    } else {
       alert('Caracter invalido, insira F ou M para validar a sua promoção.')
    }
   
    document.write(`O valor final da sua compra é de R$${valorCompra.toFixed(2)}<br><br>`)



/*5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.*/



const distancia = Number(prompt('Digite a distância.'))


if ( distancia <= 200) {

    document.write (`Valor da passagem igual R$${(distancia * 0.5).toFixed(2).replace('.',',')}<br><br>`)
} 

else {

    document.write (`Valor da passagem é R$${(distancia * 0.45).toFixed(2).replace('.',',')}<br><br>`)

}


/*6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP*/


let largura = Number(prompt('Digite a largura do seu terreno'))
let comprimento = Number(prompt('Digite o comprimento do seu terreno'))

let terreno = largura * comprimento

if (terreno <  100) {
    document.wrrite ('É um terreno popular.<br><br>')

} else if (terreno >= 500) {
    document.write ('É um terreno vip.<br><br>')

} else {
    document.write ('É um terreno master.<br><br>')
}
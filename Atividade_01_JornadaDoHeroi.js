const prompt= require ("prompt-sync")();

/* Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
0 respostas Sim: Você falha miseravelmente.
1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.*/

console.clear();

console.log('A jornada do Heroi')

let name = prompt('Qual o seu nome?')
let introduction = ('Olá,'+name, ',seja bem vindo(a), você estará participando da jornada do Heroi, a jornada do heroi se baseia em cinco questões que levarão em conta suas respostas, sendo estas sim ou não para cada pergunta, ao final são contabilizadas as pontuções e então decidido o seu futuro')

let history = (+name,', por algum motivo, então desconhecido, você acorda em uma Dungeon em um mundo de fantasia, e para escapar você passará por cinco provações, e dependendo do seu desempenho consiguira desta Dungeon, se estiver preparado para inicializar a sua jornada,')



console.log(introduction);
let next = prompt('(Press Enter)')


console.log();
console.log(history);
let next1 = prompt('Press Enter para iniciar')
console.log();


//Aplicando o toLoweCase diretamente ao prompt, para que a resposta captada seja em letra minuscula
console.log('Ao se situar que esta dentro uma Dungeon, você percebe sons no mínimo curiosos, ao ir analisar, percebe que são lobos da Dungeon, e com isso também percebe, a habilidade de análise, e percebe que os lobos em comparação com seu nivél não são fortes, ao olhar novamente, percebe que os lobos estão farejando algo, você ao olhar em volta encontra armas de outros aventureiros que acabaram perecendo por ali, você nesse momento encontra no seguinte dilema: "pegar uma arma ou não", você irá pegar uma arma SIM ou NÂO ')
const quest1 = prompt ('').toLowerCase();

console.log('Ohando novamente para os lobos, observa que eles o dectaram e estão correndo em sua direção, e então, vocÊ acaba entrando em confronto com os lobos, apesar de você ter hablidades superiores, acaba sendo uma batalha difícil devido a sua falta de experiência, mas você consegue matar os lobos e seguindo. ')
console.log('Você acaba subindo alguns andares da Dungeon rumo a saída, e em um dos andares encontra uma pessoa cercada pro ogros, e decide ajudá-lá, ao ajudá-lá, ela o agradece e se oferece como guia até o final da Dungeon, você a aceita como guia? SIM ou NÃO?')
const quest2 = prompt ('').toLowerCase();

console.log('Essa pessoa na verdade é bem extrovertida e a pergunta acaba sendo retórica kkkk...(mas dependo de sua resposta poderá afetar seu futuro na Dungeon...)')
console.log('Ao subir mais alguns andares, junto a sua nova companhia, voces se deparam com um escudo e espada notóriamente estranhos, mas de acordo com sua análise aparece como: "equipamento de ferro fraco", você irá pegá-los? SIM ou NÃO')
const quest3 = prompt ('').toLowerCase();

console.log('Após sua decisão voces seguem sua jornada!')
console.log('Vocês estão porximos ao final da Dungeon, isto é nítido devido ao nível dos monstros, sendo extremamente fortes.')
console.log('Continuando a jornada voces se deparam com um montro gigante, diferente de tudo que você viu até ali, o monstro, em instantes o atacam quase sem tempo para reações, voces tem uma batalha extremamente difícil, mas acabam matando o montro a batalha deixa sequelas, a pessoa que até ali o acompanhava, oferece a única poção de vitalidade que ela obtinha, voce aceita a poção? SIM ou NÃO')
const quest4 = prompt ('').toLowerCase();

console.log('Dado o momento, o proxímo andar, se trata do andar do chefe final para finalização da Dungeon')
console.log('Chegando ao andar do chefe final, voces sentem uma energia extremamente forte em sua direção, mas não veêm absolutamente, então, o chefe final decide aparecer, em uma fração de segundo ataca os ataca de forma extremamente violenta, voces trocam diversos golpes, mas ao decorrer da batalha, a vitalidade de vocês está se esgotando, mas o chefe sequer parecia estar em uma batalha, você ao perceber isso utiliza de uma habilidade que utiliza sua energia vital, e acaba dando certo, o chefe final acaba ficando impossibilitado de lutar.')
console.log('Aproximando para dar o golpe final, uma voz dentro da cabeça de voces diz:"Não matem-me....."')
console.log('Mas isto parecia uma habilidade estranha, e então a decisão, voces irão sacrificar o chefe final? SIM ou NÃO')
const quest5 = prompt ('').toLowerCase();

/*Adicionado a variável sim, para identificação posterior.*/

let sim = ('sim')


//Utilizando a condição tercenária para caso a resposta seja sim, retone o valor de 1,
//caso a respota seja não retornará o valor 0.
const resp1 = (quest1 === sim ? 1 : 0);
const resp2 = (quest2 === sim ? 1 : 0);
const resp3 = (quest3 === sim ? 1 : 0);
const resp4 = (quest4 === sim ? 1 : 0);
const resp5 = (quest5 === sim ? 1 : 0);

//Caso a resposta tenha sido sim, é feita a soma de todas as respostas.
plus = resp1 + resp2 + resp3 + resp4 + resp5;


if (plus === 5){
  console.log( name,', você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
} else if (plus === 4){
  console.log(name,', depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.')
} else if (plus === 3 ) {
  console.log(name,', você chegou perto de conseguir alcançar seu objetivo, mas acabou falhando por pouco.')
} else if (plus <= 2 && plus >=1){
    console.log(name,', você falhou, mas ainda conseguiu fugir da situação.')
} else{
    console.log(name, ',você falhou miseravelmente. :(')
}
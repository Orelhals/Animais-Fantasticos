 // Para chamar Id.

//const animais = document.getElementById('animais');
//console.log(animais.innerText);

// Para chamar Class.

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]); // O número dentro da "Array" serve para identificar qual class está sendo selecionada!!

//  Seletor geral único. ("querySelector")

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// querySelectorAll => Seleciona todos os elementos que possueirem a mesma Classe ou Id!

//const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg)

// HTMLCollection vs NodeList
// As mudanças feitas no HTMLCollection são atualiazidas, já as feitas com "querySelectorAll (NodeList)" não são feitas. Ex.: 

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens


gridSectionNode.forEach(function(item, index){
    console.log(index)
}); 

// Retorne no console todas as imagens do site

const AllImg = document.querySelectorAll('img');


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensInicial = document.querySelectorAll('img[src^="img/imagem"');

// Selecione todos os links internos (onde o href começa com #)

//const linkInterno = document.querySelector('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao

const kj = document.querySelector('.animais-descricao h2');

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length -1]);

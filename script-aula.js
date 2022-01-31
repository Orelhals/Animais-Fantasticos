//Para chamar Id.

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

// Mostre no console cada parágrado do site

const paragrafo = document.querySelectorAll('p'); 
console.log(paragrafo);

paragrafo.forEach ((item) => {
    console.log(paragrafo);
});

// CLASSES E ATRIBUTOS

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');


// ATTRIBUTES 

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// GET E SET

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// READ AND ONLY 

//const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only


// Adicione a classe ativo a todos os itens do menu

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu



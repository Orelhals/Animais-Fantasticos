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

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg)

// HTMLCollection vs NodeList
// As mudanças feitas no HTMLCollection são atualiazidas, já as feitas com "querySelectorAll (NodeList)" não são feitas. Ex.:

const gridSelectinHTML = document.getElementsByClassName('grid-selection');
const gridSectionNode = document.querySelectorAll('.grid-selection');

primeiraUl.classList.add('grid-section')

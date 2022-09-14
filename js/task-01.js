

const сategories = document.querySelectorAll('#categories .item');
const сategoriesСount = сategories.length;

console.log('Number of categories: ' + сategoriesСount);

const сategoriesName = document.querySelectorAll('h2');
const elementsСount = document.querySelectorAll('#categories .item ul');

console.log('Category: ' + [...сategoriesName][0].innerText);
console.log('Elements: ' + [...elementsСount][0].childElementCount);

console.log('Category: ' + [...сategoriesName][1].innerText);
console.log('Elements: ' + [...elementsСount][1].childElementCount);

console.log('Category: ' + [...сategoriesName][2].innerText);
console.log('Elements: ' + [...elementsСount][2].childElementCount);








const Categories = document.querySelectorAll('#categories .item');
const countCategories = Categories.length;

console.log('Number of categories: ' + countCategories);

const CategoriesName = document.querySelectorAll('h2');
console.log('Category: ' + [...CategoriesName][0].innerText);

const Category = item.querySelector('ul');
console.log(Category.firstChild);

console.log('Elements: ' + [...CategoriesName][0].innerText);

console.log('Category: ' + [...CategoriesName][1].innerText);
console.log('Category: ' + [...CategoriesName][2].innerText);
//const CategoriesCount = //
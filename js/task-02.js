const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredient = document.querySelector('#ingredients');
  
for (let i = 0; i <= ingredients.length - 1; i++) {
	let li = document.createElement('li');
  li.innerHTML = ingredients[i];
  li.classList.add('item');
	ingredient.append(li);
}



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector("#ingredients");

const ingredientsArray = ingredients.map((elem) => {
  const itemList = document.createElement("li");
  itemList.textContent = elem;
  itemList.classList.add("item");
  return itemList;
});

ingridientsList.append(...ingredientsArray);
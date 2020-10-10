function nameMenuItem(nameMenuItem) {
  return `Delicious ${nameMenuItem}`;
};

function createMenuItem(name, price, type) {
  var menuItemName = nameMenuItem(name);
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping, ingredients)) {
    return ingredients;
  } else {
    ingredients.push(topping);
  };
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(initialPrice) {
  decreasedPrice = initialPrice - (initialPrice * .10);
  return decreasedPrice;
};

function createRecipe(title, ingredients, menuItemType) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

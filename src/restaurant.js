function createRestaurant(name, menus) {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  var menuType = restaurant.menus[menuItem.type];
  if (menuType.includes(menuItem)) {
    return menuType;
  } else {
    menuType.push(menuItem);
  };
};

function removeMenuItem(restaurant, menuItemName, menuType) {
  for (var i = 0; i < restaurant.menus[menuType].length; i++) {
    if (restaurant.menus[menuType][i].name === menuItemName) {
      restaurant.menus[menuType].splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuType} menu!`;
    };
  };
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

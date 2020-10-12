class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };
  greetCustomer(customerName, morning) {
    if (morning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    };
  };
  checkForFood(foodItem) {
    for (var i = 0; i < this.restaurant.menus[foodItem.type].length; i++) {
      if (foodItem === this.restaurant.menus[foodItem.type][i]) {
        return `Yes, we're serving ${foodItem.name} today!`;
      }
    };
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  };
};

module.exports = Chef;

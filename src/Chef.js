class Chef {
  constructor(name, restaurant, menu) {
    this.name = name;
    this.restaurant = restaurant;
    this.menu = [];
  };
  greetCustomer(customerName, morning) {
    if (morning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    };
  };
  addMenuItem(foodItem) {
    this.menu.push(foodItem);
  }
  checkForFood(foodItem) {
    return `Yes, we're serving ${foodItem.name} today!`;
  };
  // checkForFood(requestedItem) {
  //   if (requestedItem === this.menu[foodItem.name]) {
  //     return `Yes, we're serving ${this.menu[foodItem.name]} today!`;
  //   } else {
  //     return `Sorry, we aren't serving ${this.menu[foodItem.name]} today.`;
  //   };
  // };
};

module.exports = Chef;

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  } else {
    return deliveryOrders;
  };
};

function refundOrder(orderNumber, deliveryOrders) {
  deliveryOrders.splice(orderNumber - 1, 1);
};

function listItems(deliveryOrders) {
  return `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`;
};

function searchOrder(deliveryOrders, searchedItem) {
  var defaultReturn = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === searchedItem) {
    defaultReturn = true;
    };
  };
  return defaultReturn;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

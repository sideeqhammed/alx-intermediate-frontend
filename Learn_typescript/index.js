const menu = [
  {name: "Rice", price: 10},
  {name: "beans", price: 8},
  {name: "porridge", price: 7}
]

const cashInRegister = 100;
const orderQueue = []

function order (orderName) {
  orderQueue.push(orderName)
  console.log(orderQueue)
}
order(menu[1].name);
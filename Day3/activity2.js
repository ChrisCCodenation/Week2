let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} + ${topping2}`);
    orderCount++;
}

takeOrder("Pineapple", "Pepperoni");

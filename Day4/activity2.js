Activity2

const eat = () => {
    return `${pet.name} is eating.`;
};

const drink = () => {
    return `${pet.name} is drinking.`;
};

let pet = {
    name: "Kyra",
    typeOfPet: "Ragdoll Cat",
    age: 4,
    colour: "Brown/ Cream",
    eat: eat,
    drink: drink
};

console.log(pet.eat());
console.log(pet.drink()); 

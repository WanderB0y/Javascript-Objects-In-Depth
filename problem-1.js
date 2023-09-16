const myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"]
}

console.log(myPet);

myPet.colour = "Black";

console.log(myPet)

myPet.breed = "Beagle"

console.log(myPet) 

myPet.friends.pop();

console.log(myPet)

myPet.friends.push("Chip")

console.log(myPet)
const houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000]
}

console.log(houseForSale);

delete houseForSale.built;

console.log(houseForSale);

houseForSale.owner.age = 30;

console.log(houseForSale.owner)

const offerPrice = houseForSale.offers.reduce((accumulator, offer) => {
    if (accumulator < offer){
        accumulator = 0;
        return accumulator + offer;
    }
    return accumulator
}, 0)

console.log(offerPrice)

houseForSale["sale price"] = 312000;

console.log(houseForSale)
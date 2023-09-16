const banana = {name: "banana", quantity: 1, price:1.95}
const apple = {namne:"apple", quantity:1, price:1.45}
const candy = {name: "candy", quantity:1, price: 3.50}

 const store = {
    storeNumber: 5,
    locationCity: "Milan",
    locationCountry: "Italy",
    products: [banana, apple, candy]
 }

 console.log(store);

 console.log(store.products);

 console.log(store.products[2]);

 store.products[store.products.indexOf(banana)].price = 1.75;


 console.log(store);
 console.log(store.products[0]);
 
 store.products[store.products.indexOf(candy)].price = 4.99;

 console.log(store);
 console.log(store.products[2]);
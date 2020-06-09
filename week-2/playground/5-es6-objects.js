// ------------- Object property shorthand

const name = 'Juan'
const userAge = 27

const user = {
    name, // when object property and value comming from a variable have the same name
    age: userAge,
    location: 'Tandil'
}

console.log(user);


// ------------- Object destructuring: 
// To easily extract properties of an object creating individual variables that store those property values

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product)




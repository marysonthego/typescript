let message: string = 'Hello, Test!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

// npm install -g typescript
// tsc --v
// npm install -g ts-node

// app.ts
//tsc app.ts

//node app.js
//or
//ts-node app.ts

// index.html calls app.js script

//open the Live Server from the VS code by right-mouse click the index.html
//and select the Open with Live Server option

// define the shape of an object with an interface

interface Product{
  id: number,
  name: string,
  price: number
};

function getProduct(id: number) : Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

const showProduct = (name: string, price:number)  => {
  console.log(`The product ${name} costs ${price}$.`);
};

// const product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.price}`);

const product = getProduct(1);
showProduct(product.name, product.price);

//Errors on compile tsc:
//cannot redeclare block-scoped variable 'message'
//duplicate function implementation (getProduct)
//cannot redeclare block-scoped variable 'showProduct'
//cannot redeclare block-scoped variable 'product'

// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable

//To fix, add an empty export statement to the app.ts file:

export {};

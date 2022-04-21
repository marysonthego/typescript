
var message = 'Hello, Test!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
// const product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.price}`);
var product = getProduct(1);
showProduct(product.name, product.price);

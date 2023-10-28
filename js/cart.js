const addProducts = () =>{
    const productsField = document.getElementById("products-name");
    const quantityField = document.getElementById("quantity-amount");
    const product = productsField.value;
    const quantity = quantityField.value;
    productsField.value = "";
    quantityField.value = "";
    console.log(product, quantity);
    displayProducts(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProducts = (product, quantity) =>{
    const ul = document.getElementById("product-container");
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
   
}
const getStoredShoppingCart = () => {
    let cart = {};
const storedCart = localStorage.getItem('cart');
if(storedCart){
    cart = JSON.parse(storedCart);
};
return cart;

};

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem("cart", cartStringified)
}
const displayProductsFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product, quantity);
        displayProducts(product, quantity);
    }

};
displayProductsFromLocalStorage();



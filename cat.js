const addProduct =()=>{
    const productName = document.getElementById("product-name")
    const productPrce = document.getElementById("product-quantity")
    const product = productName.value;
    const price = productPrce.value;
    productName.value ='';
    productPrce.value='';
    displayAllData(product,price)
    // for locals data save
    saveProductQuantity(product,price)
}
const displayAllData = (product,price) =>{
    const ul = document.getElementById('store-container')
    const li = document.createElement('li')
    li.innerText=`${product}:${price}`
    ul.appendChild(li)
}


// jodi cart e data na thake thle {empty} dibe ,r thakle parsefloat kore object dibe
const getStoreShopingCart = ()=>{
    let cart = {}
    const storeCart = localStorage.getItem('cart')
    if(storeCart){
        cart = JSON.parse(storeCart)
    }
    return cart;
}
const saveProductQuantity = (product,price) =>{
    const cart = getStoreShopingCart()
    cart[product] = price;
    const stringyfy = JSON.stringify(cart)
    localStorage.setItem('cart',stringyfy)
}
// local storage theke data ta indwx e show koranor jonno
const displayProductfromLocalStorage = ()=>{
    const savecart = getStoreShopingCart();
    for(const product in savecart){
        const quantity = savecart[product]
        displayAllData(product,quantity)
    }
}
displayProductfromLocalStorage();
const addButtons = document.querySelectorAll(".add-to-cart");

const cart = [];

const addToCart = (event) => {
    const parent = event.target.parentElement;
    const nameTag = parent.getElementsByTagName("h4")[0];
    const priceTag = parent.getElementsByTagName("span")[0];
    const data = {
        name: nameTag.innerHTML,
        price: priceTag.innerHTML,
    };
    cart.push(data);
    localStorage.setItem("bikes-cart-items", JSON.stringify(cart));
};

addButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
});

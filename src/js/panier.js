const init = () => {
    const cart = localStorage.getItem("bikes-cart-items");
    const items = JSON.parse(cart);
    const holder = document.querySelector(".cart-article-holder");

    items.forEach((item) => {
        const view = bikeView(item);
        holder.insertAdjacentHTML("afterbegin", view);
    });
}

const bikeView = (data) => {
    return `
        <section id="section3" class="hidden">
            <img src="../images/VTT/96323-52-sj-evo-comp-alloy-04-1514923.jpeg" alt="image">
            <div class="product-info">
                <h4>${data.name}</h4>
                <span>${data.price}</span>
            </div>
        </section>
    `;
}

init();

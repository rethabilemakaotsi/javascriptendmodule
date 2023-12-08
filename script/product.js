let product = [
    {
        id: 0,
        image: "https://i.postimg.cc/gkwFfmMN/Jagermeister-removebg-preview.png",
        title: 'Jagermister',
        price: 120,
    },
    {
        id: 1,
        image: "https://i.postimg.cc/13nYNd39/10800904-EA-checkers515-Wx515-H-removebg-preview.png",
        title: 'Ballianto',
        price: 120,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/SQc13VVs/remmy-removebg-preview.png",
        title: 'Ballianto',
        price: 120,
    },
    {
        id: 3,
        image: "https://i.postimg.cc/wMRskDys/don-removebg-preview.png",
        title: 'Donjlio',
        price: 120,
    },
    {
        id: 4,
        image: "https://i.postimg.cc/s21SXFjc/azul-removebg-preview.png",
        title: 'Azul',
        price: 120,
    }
];

document.getElementById('root').innerHTML = product.map((item, i) => {
    let { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <p>ITEM:${title}</p>
            <h2> PRICE: R ${price}.00</h2>
            <button onclick='addtocart(${i})'>Add to cart</button>
        </div>`
    );
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({ ...product[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R" + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            let { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "R" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>R ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}



function sortProductsByPrice() {
    // Implement your logic for sorting products by price
    console.log("Sort by Price button clicked");
}
let product = [
    {
        id: 0,
        image: "https://i.postimg.cc/4NdVxjwd/product-2-removebg-preview.png",
        
        title: 'Jagermister',
        price: 120,
    },
    {
        id: 1,
        image: "https://i.postimg.cc/W3kYChFB/HENNESSY-removebg-preview.png",
        title: 'Ballianto',
        price: 120,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/DzWx48gS/product3-removebg-preview.png",
        title: 'Ballianto',
        price: 120,
    },
    {
        id: 3,
        image: "https://i.postimg.cc/DzjKnJzm/product-1-removebg-preview.png",
        title: 'Donjlio',
        price: 120,
    },
    {
        id: 4,
        image: "https://i.postimg.cc/W38q27kg/product4-removebg-preview.png",
        title: 'Azul',
        price: 120,
    }
];

document.getElementById('root').innerHTML = product.map((item, i) => {
    let { image, title, price } = item;
    return (
    
        `  <div class="col d-flex ">
          <div class="card "" style="width: 18rem;" >
        <img src="${image}" class="card-img-top w-100" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-dark">R ${price}</p>
            <button onclick='addtocart(${i})'>Add to cart</button>
        </div>
        </div>`

    );

}).join('');

localStorage.setItem('Product', JSON.stringify(product));
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
                `
            
               
                </div>
              </div>
                   
                </div>`
               
            );
        }).join('');
    }
}
displaycart()



function sortProductsByPrice() {
    // Implement your logic for sorting products by price
    console.log("Sort by Price button clicked");
}
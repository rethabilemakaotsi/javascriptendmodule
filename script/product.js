
// created an array of objects

let product = JSON.parse(localStorage.getItem('Product')) || [
    {
        id: 1,
        image: "https://i.postimg.cc/4NdVxjwd/product-2-removebg-preview.png",
        title: 'Jagermister',
        price: 370,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/W3kYChFB/HENNESSY-removebg-preview.png",
        title: 'Ballianto',
        price: 500,
    },
    {
        id: 3,
        image: "https://i.postimg.cc/DzWx48gS/product3-removebg-preview.png",
        title: 'Ballianto',
        price: 450,
    },
    {
        id: 4,
        image: "https://i.postimg.cc/DzjKnJzm/product-1-removebg-preview.png",
        title: 'Donjlio',
        price: 700,
    },
    {
        id: 5,
        image: "https://i.postimg.cc/W38q27kg/product4-removebg-preview.png",
        title: 'Azul',
        price: 950,
    }
];
// item store at local storage and the search function
localStorage.setItem('Product', JSON.stringify(product));
let productWrapper = document.querySelector('#root');
let searchInput = document.querySelector('[product-search]')
function displayItems(items) {
    productWrapper.innerHTML = ""
    try{
        if(items) {
            // console.log(items);
            items.forEach( item =>{
                productWrapper.innerHTML +=`
                    <div class="card" >
                    <img src="${item.image}" class="card-img-top w-100" alt="${item.title}" >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-dark">R ${item.price}</p>
                        <button onclick='addToCart(${JSON.stringify(item)})'>Add to cart</button>
                    </div>
                ` 
            })
        }
    }catch(e) {

    }
}
displayItems(product)

searchInput.addEventListener('keyup', ()=>{
    try{
        let itemFound = product.filter(item=>{
            return item.title.toLowerCase().includes(searchInput.value.toLowerCase())
        })
        if(itemFound) {
            displayItems(itemFound)
        }else {
            productWrapper.innerHTML = "Loading"
        }
    }catch(e) {

    }
})


let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

let addToCArt = []
function addToCart(item) {
    if(item){
        cart.push(item);
        localStorage.setItem('shoppingCart', JSON.stringify(cart))
    }
 }

function displaycart() {
    let j = 0, total = 0;
    // document.getElementById("count").innerHTML = cart.length;

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
//function for my sort butt

function sortitems() {
    let sortedarray = product.sort((data1, data2) => {
      console.log(data1, data2);
      return item1.price - item2.price;
    });
  
    productWrapper.innerHTML = "";
    sortedarray.forEach((item) => {
      productWrapper.innerHTML += `
       <div class="card" style="width: 15rem; height:20rem;">
              <img src="${item.image}" class="card-img-top" alt="products" loading=lazy >
              <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">R${item.price}</p>
                  <button href="#" class="btn btn-secondary" onclick='addToCart(${JSON.stringify(
                    item
                  )})'>Add to Cart</button></div>`;
    });
  }
  
  document.getElementById('sortByPrice').addEventListener("click", sortitems);

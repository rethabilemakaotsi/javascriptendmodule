let yr = new Date().getFullYear();
document.getElementById("thisYear").textContent = "TST" + yr;

let products = JSON.parse(localStorage.getItem('shoppingCart')) || []
let output= document.querySelector('.output');

let groupProducts = Object.groupBy(products, (id) => {
    return id.id
})
let amount = []
function getProduct(){

    let totalPrice = 0;
    let quantity = 0;
output.innerHTML = ""
    console.log(groupProducts.id);
    for (let key in groupProducts) {

        groupProducts[key].forEach(item => {
            // totalPrice += item.price * ;
            quantity += item.quantity;
        });
        amount.push(totalPrice)
        
        console.log(groupProducts);
        output.innerHTML +=
        `
        <tr>
            <td>${groupProducts[key][0].title}</td>
            <td>${groupProducts[key][0].price}</td>
            <td>${groupProducts[key].length}</td>

        </tr>
        `
    }

}
getProduct(products)

function clearProduct(value) {
  
      output.innerHTML = "";
    localStorage.removeItem("shoppingCart");
    

}

document.querySelector('.clearBtn').addEventListener('click', clearProduct);

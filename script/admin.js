let yr = new Date().getFullYear();
document.getElementById("thisYear").textContent = "TST" + yr;




let display = document.querySelector('.output')
// let localSt = localStor

let data = JSON.parse(localStorage.getItem('shoppingCart'))


function displayData(value){

    value.forEach(i => {
        console.log(i);

        display.innerHTML += 
        `
        <tr>
        <td>${i.title}</td>
        <td>${i.price}</td>
        <td>
        <button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-success">Edit</button>

        </td>


</tr>
        `
    });
}

displayData(data)
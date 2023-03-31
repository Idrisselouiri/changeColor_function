const Inputs = document.querySelector('.inputs')
const Name = document.getElementById('name');
const Price = document.getElementById('price');
const Stock = document.getElementById('stock');
const Submit = document.getElementById('submit');
const add = document.getElementById("add");
let index ;
let mode = "save";
const product = [
{
    name:'Apple Tab',
    price:1800,
    stock:102
},
{
    name:'Dell 1800',
    price:800,
    stock:355
},
{
    name:'Mobile Samsang',
    price:1800,
    stock:98
}
]

let dataPro = [];
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.getItem("product"))
}else{
    dataPro = []
}

Submit.onclick = function(){
    let container = {
        name : Name.value, 
        price : Price.value,
        stock : Stock.value
    }
    if(mode == "save"){
    dataPro.push(container);
    }else{
        dataPro[index] = container;
        Submit.innerHTML = "save";
        mode = "save";
    }
    localStorage.setItem("product" , JSON.stringify(dataPro));
    showData()
    deleteValue()
}
// delete value
function deleteValue(){
    Name.value = "";
    Price.value = "";
    Stock.value = "";
}
function showData(){
    let table = "";
    for(let i = 0; i < dataPro.length; i++){
        table += `
    <tr>    
        <td>${i}</td>
        <td>${dataPro[i].name}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].stock}</td>
        <td><button onclick = "Delete(${i})">delete</button></td>
        <td><button onclick = "update(${i})">update</button></td>    
    </tr>
    `   
    }
    document.getElementById('tbody').innerHTML = table;
}
showData()

//delete

function Delete(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}

// update

function update(i){
    Submit.style.display = "flex";
    Name.value = dataPro[i].name;
    Price.value = dataPro[i].price;
    Stock.value = dataPro[i].stock;
    Submit.innerHTML = "update";
    mode = "update";
    index = i;
    Inputs.style.display = " flex"
}

// add
add.onclick = function(){
    Inputs.style.display = "flex";
}

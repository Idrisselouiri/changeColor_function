let names = ["porsh" , "ferrari" , "lamborghini"];
let images = ['car3.jpg','car4.jpg','car6.jpg']
//create container
const container = document.createElement('div');
document.body.appendChild(container);
container.style.width = "95%";
container.style.minHeight = "100vh";
container.style.margin = "auto";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexWrap = "wrap";
container.style.border = "1px solid black";
container.style.backgroundColor = "#333";
// items container
function itemsContainer(name , loupImage){
const items = document.createElement('div');
items.style.width = "350px";
items.style.border = "1px solid black";
items.style.padding = "20px";
items.style.backgroundColor = "#fff";
items.style.color = "#000";
items.style.display = "flex";
items.style.justifyContent = "center";
items.style.alignItems = "center";
items.style.flexWrap = "wrap";
items.style.flexDirection = "column";
items.style.margin = "20px 20px";
items.style.gap = "30px";
const textItems = document.createElement('h1');
const image = document.createElement('img');
image.style.width = "100%"
// content
let textNode = document.createTextNode(name);
image.src = loupImage;
items.appendChild(textItems);
items.appendChild(image);
textItems.appendChild(textNode);
container.appendChild(items);
}
for(let i = 0 ; i <names.length; i++){
    itemsContainer(names[i] ,images[i])
}


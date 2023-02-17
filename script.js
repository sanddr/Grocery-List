let userInput = document.getElementById("userInput");
let items = document.getElementById("items").innerHTML;
let i=0;


//Adding "ENTER" button
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

function addItem(){
    items += `<h2 id="item${i}" onclick='ereaseOne(${i})'>${userInput.value}</h2>`;
    document.getElementById("items").innerHTML = items;
    userInput.value = '';
    i++;
    console.log(items);
}

function ereaseAll(){
    items='';
    document.getElementById("items").innerHTML = items;
    console.log(items);
}
function ereaseOne(i){
   let target = document.getElementById("item"+i);
   document.getElementById("items").removeChild(target);
   items = document.getElementById("items").innerHTML;

}

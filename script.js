const colorDisplay = document.getElementById("color-display");

const purple = document.getElementById("purple");
const pink = document.getElementById("pink");
const colorless = document.getElementById("colorless");
const aqua = document.getElementById("aqua");
const teal = document.getElementById("teal");
const hide = document.getElementById("hide-show");

teal.onclick = function(){
    colorDisplay.style.backgroundColor = "teal";
    colorDisplay.textContent = "teal";
}

aqua.onclick = function(){
    colorDisplay.style.backgroundColor = "aqua";
    colorDisplay.textContent = "aqua";
}

pink.onclick = function(){
    colorDisplay.style.backgroundColor = "pink";
    colorDisplay.textContent = "pink";
}

colorless.onclick = function(){
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.textContent = "colorless";
}

purple.onclick = function(){
    colorDisplay.style.backgroundColor = "purple";
    colorDisplay.textContent = "purple";
}


hide.onclick = function(){
    if(colorDisplay.style.display == "none"){
        colorDisplay.style.display = "flex";
        hide.textContent = "hide";
    }else{
        colorDisplay.style.display = "none";
        hide.textContent = "show";
    } 
}
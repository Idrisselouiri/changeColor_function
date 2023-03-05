function changeColor(){
    var names = [ "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F"];
   var hex_code = '';
    for (let i = 0 ;i <6 ; i++){
        let random_hex = Math.floor(Math.random()
        * names.length);
        hex_code += names[random_hex]
    }
    document.getElementsByClassName("Code").innerHTML = hex_code;
    document.getElementsByTagName("body")[0].style.background = '#' + hex_code ;
}
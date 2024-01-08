const input = document.getElementById("srch-box");

input.addEventListener("input",function(event){
    let value = input.value;
    let length = value.length;
    let last_index =  length-1;
    let lastChar = value.charAt(last_index);
    let prevValue = value.slice(0,last_index);
    
    if ("0123456789".includes(lastChar) != true){
        input.value = prevValue;
    }
})
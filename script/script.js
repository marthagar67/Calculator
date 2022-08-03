function addValue(){
    var val1Str = document.getElementById("input_a").value;
    var val2Str = document.getElementById("input_b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 + val2;

    // display sum result in text-area with operands values- 
    document.querySelector("textarea").value = `${val1} + ${val2} = ${result}`;
}


function mulValue(){
    var val1Str = document.getElementById("input_a").value;
    var val2Str = document.getElementById("input_b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 * val2;
  
    // display multiplication result in text-area with operands values- 
    document.querySelector("textarea").value = `${val1} * ${val2} = ${result}`;
}


function divValue() {
    var val1Str = document.getElementById("input_a").value;
    var val2Str = document.getElementById("input_b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 / val2;
        
    // display division result in text-area with operands values-          
    document.querySelector("textarea").value = `${val1} / ${val2} = ${result}`;
}
        

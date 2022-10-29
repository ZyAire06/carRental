window.onload = function(){
    
};

function perDay(){
    let numdays = document.getElementById("numDays");

    if (numdays <= 1){
        days = numdays*29.99;
    }
    
}
console.log(perDay);

function isOptions(){

    let options = document.getElementById("options");
    options = 0;


    let tollTag = document.getElementById("tollTag").checked;
   
    if (tollTag) {
        options =+3.95;
        console.log(options);
    }

    let gps = document.getElementById("gps").checked;

    if (tollTag) {
        options =+3.95;
        console.log(options);
    }


    let roadSide = document.getElementById("roadSide").checked;

    if (tollTag) {
        options =+3.95;
        console.log(options);
    }


    
}

console.log(isOptions);



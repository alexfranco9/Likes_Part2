var count = [0,0,0]
var countneil = document.querySelector("#countneil");
var countnichole = document.querySelector("#countnichole");
var countjim = document.querySelector("#countjim");


function add1(element) {
    if(element == countneil){
        count[0]++
        element.innerText = count[0];
    }
    else if(element == countnichole){
        count[1]++
        element.innerText = count[1];
    }
    else {
        count[2]++
        element.innerText = count[2];
    }
    console.log(count);
}

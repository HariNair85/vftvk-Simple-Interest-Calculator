function compute()
{
    let amount = document.getElementById("principal").value;
    let noofyears = document.getElementById("noofyears").value;
    let interestrate = document.getElementById("inRange").value;
    let interest = 0;
/*     for (let index = 1; index <= noofyears ; index++) {
        total = total + ( total * ( interestrate / 100 ) );
    } */
    interest = ( parseInt(amount) * ( 1 + ( interestrate / 100) * parseInt(noofyears) ) ) 
                        - parseInt(amount);
    document.getElementById("firstline").innerHTML = 
            'If you deposit '.concat(amount);
    document.getElementById("secondline").innerHTML = 
            'at an interest rate of '.concat(interestrate).concat("%");
    document.getElementById("thirdline").innerHTML = 
            'You will receive an amount of '.concat(parseInt(interest));
    let currentyear = new Date().getFullYear();
    document.getElementById("fourthline").innerHTML = 
            'in the year '.concat(parseInt(noofyears)+currentyear);
}


function showRange(self){
    let slider = document.getElementById("inRange").value;
    let output = document.getElementById("setRange");
    output.innerHTML = slider.concat("%");
}
        
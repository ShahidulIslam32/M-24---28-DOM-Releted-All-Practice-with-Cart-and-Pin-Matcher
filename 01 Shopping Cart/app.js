// common function for casing code shorting //
function UpdateCasingNumber(product,price, isIncreasing){
    let casingInput = document.getElementById(product +'-qty')
    let casingNumber = casingInput.value; 
    if(isIncreasing == true){
        casingNumber = parseInt(casingNumber) + 1;
    }
    else if(casingNumber > 1){
        casingNumber = parseInt(casingNumber) - 1;
    } 
    
    casingInput.value = casingNumber;
    // update case balance
    let caseTotalBalance = document.getElementById(product +'-total');
    caseTotalBalance.innerText = casingNumber * price;

    // calculate total
    calculateTotal()
    
}

function getInputValue(product){
    let casingInput = document.getElementById(product + '-qty')
    let phoneNumber = parseInt(casingInput).value ;
    return phoneNumber
}
function calculateTotal(){
    let phoneTotal = getInputValue('phone') * 1219
    let casingTotal = getInputValue('casing') * 59
    let SubTotal = phoneTotal + casingTotal
   // update on html
   
}

// PHONE INCREASE AND DECREASE FUNCTION // 

document.getElementById('phone-plus').addEventListener('click', function(){
    UpdateCasingNumber('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    UpdateCasingNumber('phone',1219,false)
})


// cover increse / decrease 
document.getElementById('casing-plusBtn').addEventListener('click', function(){
    UpdateCasingNumber('casing',59,true) ;
})
document.getElementById('casing-minusBtn').addEventListener('click', function () {
    UpdateCasingNumber('casing',59,false) ;  
})










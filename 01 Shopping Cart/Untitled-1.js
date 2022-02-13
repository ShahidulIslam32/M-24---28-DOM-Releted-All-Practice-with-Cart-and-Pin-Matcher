// common function for short code 


// phone increse / decrese  
document.getElementById('phone-plus').addEventListener('click', function () {
    let phonePlusInput = document.getElementById('phone-qty')
    let phoneNumber = phonePlusInput.value
    phonePlusInput.value = parseInt(phoneNumber) + 1

})
document.getElementById('phone-minus').addEventListener('click', function () {
    let phoneMinusInput = document.getElementById('phone-qty')
    let phoneNumber = phoneMinusInput.value
    phoneMinusInput.value = parseInt(phoneNumber) - 1

})
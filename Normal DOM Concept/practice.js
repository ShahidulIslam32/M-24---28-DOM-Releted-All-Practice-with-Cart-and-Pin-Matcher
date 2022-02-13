
document.getElementById('updateBtn').addEventListener('click',function(){
    let updateText = document.getElementById('previousText')
    updateText.innerText = 'this is change text'
})

document.getElementById('InputTextBtn').addEventListener('click', function(){
    let numberOne = document.getElementById('numberOne')
    let resultOne = parseInt(numberOne.value)
    let numberTwo = document.getElementById('numberTwo')
    let resultTwo = parseInt(numberTwo.value)
    let finalSum = resultOne + resultTwo
    show.innerText = finalSum
    numberOne.value = '';
    numberTwo.value = '';
})
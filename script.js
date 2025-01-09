
let generatedNumbers = [];

document.getElementById('genbtn').addEventListener('click', function () {

    let startValue = parseInt(document.getElementById('startvalue').value);
    let endValue = parseInt(document.getElementById('endvalue').value);

    if (isNaN(startValue) || isNaN(endValue) || startValue >= endValue) {
        document.querySelector('.num').textContent = 'Please enter valid numbers!';
        return;
    }

    let possibleNumbers = [];
    for (let i = startValue; i <= endValue; i++) {
        if (!generatedNumbers.includes(i)) {
            possibleNumbers.push(i);
        }
    }

    if (possibleNumbers.length > 0) {
        let randomIndex = Math.floor(Math.random() * possibleNumbers.length);
        let randomNumber = possibleNumbers[randomIndex];

        generatedNumbers.push(randomNumber);
        document.querySelector('.num').textContent = randomNumber;
    } else {
        document.querySelector('.num').textContent = 'All numbers have been generated.';
    }

    document.getElementById('startvalue').style.padding= "5px"
    document.getElementById('endvalue').style.padding= "5px"
    document.getElementById('endvalue').style.margin= "10px 0px"
    document.getElementById('startvalue').style.margin= "10px 0px"
});

//reset
document.getElementById('resetbtn').addEventListener('click', function () {
    document.getElementById('startvalue').value = '';
    document.getElementById('endvalue').value = '';
    document.querySelector('.num').textContent = 'Number will appear here';
    generatedNumbers = [];
    document.getElementById('startvalue').style.padding= "12px"
    document.getElementById('endvalue').style.padding= "12px"
    document.getElementById('endvalue').style.margin= "15px 0px"
    document.getElementById('startvalue').style.margin= "15px 0px"
});


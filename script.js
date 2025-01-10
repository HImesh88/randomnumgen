let generatedNumbers = [];

document.getElementById('genbtn').addEventListener('click', function () {
    let startValue = parseInt(document.getElementById('startvalue').value);
    let endValue = parseInt(document.getElementById('endvalue').value);

    if (isNaN(startValue) || isNaN(endValue) || startValue >= endValue) {
        document.getElementById('announcement').textContent = 'Please enter valid numbers!';
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
        document.getElementById('number-display').textContent = randomNumber;
        document.getElementById('announcement').textContent = '';
    } else {
        document.getElementById('number-display').textContent = '-';
        document.getElementById('announcement').textContent = 'All numbers have been generated.';
    }
    document.getElementById('startvalue').style.padding= "5px"
    document.getElementById('endvalue').style.padding= "5px"
    document.getElementById('endvalue').style.margin= "10px 0px"
    document.getElementById('startvalue').style.margin= "10px 0px"
    document.getElementById('number-display').style.fontSize="45px"
    document.getElementById('number-display').style.color="#9400D3"
});

// Reset functionality
document.getElementById('resetbtn').addEventListener('click', function () {
    document.getElementById('startvalue').value = '';
    document.getElementById('endvalue').value = '';
    document.getElementById('number-display').textContent = 'Number will appear here';
    document.getElementById('announcement').textContent = '';
    document.getElementById('startvalue').style.padding= "12px"
    document.getElementById('endvalue').style.padding= "12px"
    document.getElementById('endvalue').style.margin= "15px 0px"
    document.getElementById('startvalue').style.margin= "15px 0px"
    document.getElementById('number-display').style.fontSize="20px"
    document.getElementById('number-display').style.color=""
    generatedNumbers = [];
});

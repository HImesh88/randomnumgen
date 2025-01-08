let generatedNumbers = [];

document.getElementById('genbtn').addEventListener('click', function() {
    let startValue = parseInt(document.getElementById('startvalue').value);
    let endValue = parseInt(document.getElementById('endvalue').value);

    if (isNaN(startValue) || isNaN(endValue) || startValue >= endValue) {
        document.querySelector('.num').textContent = 'Please enter valid values!';
        return;
    }

    let randomNumber;

    // Ensure the random number is unique
    do {
        randomNumber = Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;
    } while (generatedNumbers.includes(randomNumber) && generatedNumbers.length < (endValue - startValue + 1));

    if (generatedNumbers.length < (endValue - startValue + 1)) {
        generatedNumbers.push(randomNumber);
        document.querySelector('.num').textContent = randomNumber;
    } else {
        document.querySelector('.num').textContent = 'All numbers have been generated.';
    }
});

document.getElementById('resetbtn').addEventListener('click', function() {
    document.getElementById('startvalue').value = '';
    document.getElementById('endvalue').value = '';
    document.querySelector('.num').textContent = 'Number will appear here';
    generatedNumbers = [];
});

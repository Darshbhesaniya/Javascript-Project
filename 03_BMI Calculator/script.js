console.log('BMI calculator');

const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    console.log(height);
    console.log(weight);
     result.innerHTML = '';

    if (height <= 0 || isNaN(height)) {
        alert('Enter a valid height in Cm');
    } else if (weight <= 0 || isNaN(weight) ) {
        alert('Enter a valid weight in KG');
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);

        const span = document.createElement('span');
        span.textContent = `${bmi} kg/m2 `;
       result.appendChild(span);
    }


})


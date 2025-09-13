const form = document.querySelector('.bmi-input-form');

form.addEventListener('submit', function onSubmit(event) {
    console.log("submit event !!!");

    event.preventDefault();

    const height = parseFloat(document.querySelector('#height-input').value);
    const weight = parseFloat(document.querySelector('#weight-input').value);
    const calculatedValue = document.querySelector('.calulated-value');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        calculatedValue.innerHTML = `Please enter valid height and weight.`;
        return;
    } else {
        const heightM = height / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(2);

        let category = "";
        if (bmi < 18.6) category = "Underweight";
        else if (bmi <= 24.9) category = "Normal";
        else category = "Overweight";

        calculatedValue.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> (${category})</p>`;

        return;
    }
});

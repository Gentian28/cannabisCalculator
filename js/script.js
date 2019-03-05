document.addEventListener('DOMContentLoaded', function () {

    // data values object
    var recipe = {
        cannabisWeight: document.querySelector('input[name="cannabisWeight"]'),
        thcPercent: document.querySelector('input[name="thcPercent"]'),
        servingsNr: document.querySelector('input[name="servingsNr"]'),
        thcPerServing: document.querySelector('#thcPerServing'),
        thcaToThcPerServing: document.querySelector('#thcaToThcPerServing')
    }

    // iterates over every record in the data object
    // binds event to input
    // calls calculate() function
    for (var field in recipe) {
        recipe[field].addEventListener('keyup', function () {
            calculateCannabutter();
        });
        recipe[field].addEventListener('change', function () {
            calculateCannabutter();
        });
        recipe[field].addEventListener('click', function () {
            calculateCannabutter();
        });
        recipe[field].addEventListener('input', function () {
            calculateCannabutter();
        });
    }

    // error fields
    var cannabisWeightError = document.querySelectorAll('.cannabisWeightError')[0];
    var servingsNrError = document.querySelectorAll('.servingsNrError')[0];

    function calculateCannabutter() {

        var thcPercent = parseFloat(recipe.thcPercent.value);

        if (recipe.cannabisWeight.value > 99) {
            cannabisWeightError.style.display = "block";
            cannabisWeightError.innerHTML = "Can't go beyond 99!";
        }

        if (recipe.cannabisWeight.value < 0.5) {
            cannabisWeightError.style.display = "block";
            cannabisWeightError.innerHTML = "Minimum Required Value is 0.5";
        }

        if (recipe.cannabisWeight.value <= 99 && recipe.cannabisWeight.value >= 0.5) {
            cannabisWeightError.style.display = "none";
        }

        if (recipe.servingsNr.value > 99) {
            servingsNrError.style.display = "block";
            servingsNrError.innerHTML = "Can't go beyond 99!";
        }

        if (recipe.servingsNr.value < 1) {
            servingsNrError.style.display = "block";
            servingsNrError.innerHTML = "Minimum Required Value is 1";
        }


        if (recipe.servingsNr.value <= 99 && recipe.servingsNr.value >= 0.5) {
            servingsNrError.style.display = "none";
        }

        if (recipe.cannabisWeight.value <= 99 && recipe.cannabisWeight.value >= 0.5 && recipe.servingsNr.value <= 99 && recipe.servingsNr.value >= 1) {
            var thcPerServing = ((recipe.cannabisWeight.value * 1000) * (thcPercent / 100) * 0.6) / recipe.servingsNr.value;
            var thcaToThcPerServing = thcPerServing * 0.88;

            recipe.thcPerServing.textContent = thcPerServing.toFixed(1) + " Mg";
            recipe.thcaToThcPerServing.textContent = thcaToThcPerServing.toFixed(1) + " Mg";
        }


    }

    // range slider functionality
    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");
    var rangeFill = document.getElementById("rs-fill");

    rangeSlider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
        rangeBullet.innerHTML = rangeSlider.value;
        var bulletPosition = (rangeSlider.value / rangeSlider.max);
        rangeFill.style.width = bulletPosition * 100 + "%";
        rangeBullet.style.left = "calc(" + bulletPosition * 100 + "% - " + (bulletPosition * 100) / 2 + "px)";
    }

    calculateCannabutter();
});

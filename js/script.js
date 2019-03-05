document.addEventListener('DOMContentLoaded', function () {

    // data values object
    var data2 = {
        cannabisWeight: document.querySelector('input[name="cannabisWeight"]'),
        thcPercent: document.querySelector('input[name="thcPercent"]'),
        servingsNr: document.querySelector('input[name="servingsNr"]'),
        thcPerServing: document.querySelector('#thcPerServing'),
        thcaToThcPerServing: document.querySelector('#thcaToThcPerServing')
    }

    // iterates over every record in the data object
    // binds event to input
    // calls calculate() function
    for (var field in data2) {
        data2[field].addEventListener('keyup', function () {
            calculateCannabutter();
        });
        data2[field].addEventListener('change', function () {
            calculateCannabutter();
        });
        data2[field].addEventListener('click', function () {
            calculateCannabutter();
        });
        data2[field].addEventListener('input', function () {
            calculateCannabutter();
        });
    }

    var cannabisWeightError = document.querySelectorAll('.cannabisWeightError')[0];
    var servingsNrError = document.querySelectorAll('.servingsNrError')[0];

    function calculateCannabutter() {

        var thcPercent = parseFloat(data2.thcPercent.value);

        if (data2.cannabisWeight.value > 99) {
            cannabisWeightError.style.display = "block";
            cannabisWeightError.innerHTML = "Can't go beyond 99!";
        }

        if (data2.cannabisWeight.value < 0.5) {
            cannabisWeightError.style.display = "block";
            cannabisWeightError.innerHTML = "Minimum Required Value is 0.5";
        }

        if (data2.servingsNr.value > 99) {
            servingsNrError.style.display = "block";
            servingsNrError.innerHTML = "Can't go beyond 99!";
        }

        if (data2.cannabisWeight.value <= 99 && data2.cannabisWeight.value >= 0.5) {
            cannabisWeightError.style.display = "none";
        }

        if (data2.servingsNr.value <= 99 && data2.servingsNr.value >= 0.5) {
            servingsNrError.style.display = "none";
        }

        if (data2.servingsNr.value < 1) {
            servingsNrError.style.display = "block";
            servingsNrError.innerHTML = "Minimum Required Value is 1";
        }

        if (data2.cannabisWeight.value <= 99 && data2.cannabisWeight.value >= 0.5 && data2.servingsNr.value <= 99 && data2.servingsNr.value >= 1) {
            var thcPerServing = ((data2.cannabisWeight.value * 1000) * (thcPercent / 100) * 0.6) / data2.servingsNr.value;
            var thcaToThcPerServing = thcPerServing * 0.88;

            data2.thcPerServing.textContent = thcPerServing.toFixed(1) + " Mg";
            data2.thcaToThcPerServing.textContent = thcaToThcPerServing.toFixed(1) + " Mg";
        }


    }

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
});;


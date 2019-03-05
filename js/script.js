document.addEventListener('DOMContentLoaded', function () {

    var data2 = {
        cannabisWeight: document.querySelector('input[name="cannabisWeight"]'),
        thcPercent: document.querySelector('input[name="thcPercent"]'),
        servingsNr: document.querySelector('input[name="servingsNr"]'),
        thcPerServing: document.querySelector('#thcPerServing'),
        thcaToThcPerServing: document.querySelector('#thcaToThcPerServing')
    }
    // data values object
    var data = {
        plantPercentThc: document.querySelector('input[name="plantPercentThc"]'),
        plantWeight: document.querySelector('input[name="plantWeight"]'),
        oilCups: document.querySelector('input[name="oilCups"]'),
        teaSpoons: document.querySelector('input[name="teaSpoons"]'),
        servings: document.querySelector('input[name="servings"]'),
        totalThcMg: document.querySelector('#totalThcMg'),
        teaSpoonThcMg: document.querySelector('#teaSpoonThcMg'),
        recipeThcMg: document.querySelector('#recipeThcMg'),
        servingThcMg: document.querySelector('#servingThcMg'),
    }



    // iterates over every record in the data object
    // binds event to input
    // calls calculate() function
    for (var field in data2) {
        data2[field].addEventListener('keyup', function (event) {
            calculateCannabutter();
        });
        data2[field].addEventListener('change', function (event) {
            calculateCannabutter();
        });
        data2[field].addEventListener('click', function (event) {
            calculateCannabutter();
        });
        data2[field].addEventListener('input', function (event) {
            calculateCannabutter();
        });
    }

    // function to calculate dosage
    // function calculate() {
    //     var totalThcMg = (data.plantPercentThc.value / 100) * data.plantWeight.value * 1000
    //     var teaSpoonThcMg = (totalThcMg / data.oilCups.value) / 48
    //     data.totalThcMg.textContent = totalThcMg.toFixed(2)
    //     data.teaSpoonThcMg.textContent = teaSpoonThcMg.toFixed(2)
    //     var recipeThcMg = teaSpoonThcMg * data.teaSpoons.value
    //     var servingThcMg = recipeThcMg / data.servings.value || 0
    //     data.recipeThcMg.textContent = recipeThcMg.toFixed(2)
    //     data.servingThcMg.textContent = servingThcMg.toFixed(2)
    // }

    // calculate();

    function calculateCannabutter() {
        console.log(data2.cannabisWeight.value);
        // console.log(data2.thcPercent.value);
        var range = data2.thcPercent.value;
        var toInt = parseInt(range, 10);
        console.log(toInt);
        // console.log(data2.servingsNr.value);
        var thcPerServing = ((data2.cannabisWeight * 1000) * (toInt / 100) * 0.6) / data2.servingsNr;
        var thcaToThcPerServing = thcPerServing * 0.88;

        console.log(thcPerServing);
        data2.thcPerServing.textContent = thcPerServing.toFixed(2)
        data2.thcaToThcPerServing.textContent = thcaToThcPerServing.toFixed(2)

    }

    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");

    rangeSlider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
        rangeBullet.innerHTML = rangeSlider.value;
        var bulletPosition = (rangeSlider.value / rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * 578) + "px";
    }

});;


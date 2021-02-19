const hourHand = document.querySelector('.clock__hand--hour');
const minuteHand = document.querySelector('.clock__hand--minute');
const secondHand = document.querySelector('.clock__hand--second');

// console.log(new Date().getHours());

// console.log(new Date().getMinutes());

let currentSecondValue = new Date().getSeconds();
console.log(currentSecondValue);

secondHand.style.transform = 'rotate('+ (new Date().getSeconds() * 6) + exceedThreeSixtyDegree(currentSecondValue) +'deg)';

function exceedThreeSixtyDegree(degreeValue) {
    if(degreeValue > 360) {
        return 0;
    }

    return 90;
}

// console.log(exceedThreeSixtyDegree(currentSecondValue))
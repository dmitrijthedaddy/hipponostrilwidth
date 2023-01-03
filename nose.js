function countDistance() {
    const weightField = document.querySelector('#weight')
    const lengthField = document.querySelector('#length')
    const mouthField = document.querySelector('#mouth')
    const ageField = document.querySelector('#age')


    let distance = weightField.value * 0.1 + lengthField.value * 0.05 + mouthField.value * 0.2

    switch (ageField.value) {
        case 'young':
            distance *= 1.1
            break;
        case 'middle':
            distance *= 1.2
            break;
        case 'old':
            distance *= 1.3
            break;
        default:
            break;
    }

    const resultDiv = document.querySelector('.result')
    const distanceSpan = document.querySelector("#nose__length")
    resultDiv.style.display = 'block'
    distanceSpan.innerText = distance.toFixed(1)
}

document.querySelector('#count').addEventListener('click', countDistance)

const keys = document.querySelector('.keys');

document.addEventListener('keydown', (e) => {
    const keyCode = e.code;

    switch(keyCode) {
        case 'KeyA':
            addSound('KeyA');
            break;
        case 'KeyS':
            addSound('KeyS');
            break;
        case 'KeyD':
            addSound('KeyD');
            break;
        case 'KeyF':
            addSound('KeyF');
            break;
        case 'KeyG':
            addSound('KeyG');
            break;
        case 'KeyH':
            addSound('KeyH');
            break;
        case 'KeyJ':
            addSound('KeyJ');
            break;
        case 'KeyK':
            addSound('KeyK');
            break;
        case 'KeyL':
            addSound('KeyL');
            break;
        default:
            console.log('This is from default');
    }
})

document.addEventListener('transitionend', (e) => {
    const keyCode = e.code;
    switch(keyCode) {
        case 'KeyA':
            removeSound('KeyA');
            break;
        case 'KeyS':
            removeSound('KeyS');
            break;
        case 'KeyD':
            removeSound('KeyD');
            break;
        case 'KeyF':
            removeSound('KeyF');
            break;
        case 'KeyG':
            removeSound('KeyG');
            break;
        case 'KeyH':
            removeSound('KeyH');
            break;
        case 'KeyJ':
            removeSound('KeyJ');
            break;
        case 'KeyK':
            removeSound('KeyK');
            break;
        case 'KeyL':
            removeSound('KeyL');
            break;
        default:
            console.log('This is from default');
    }
})

function addSound(keyCode) {
    keys.querySelector(`div[data-key=${keyCode}]`).classList.add('playing');
    document.querySelector(`audio[data-key=${keyCode}]`).play();
}

function removeSound(keyCode) {
    keys.querySelector(`div[data-key=${keyCode}]`).classList.remove('playing');

    let audioElement = document.querySelector(`audio[data-key=${keyCode}]`);
    audioElement.pause();
    audioElement.currentTime = 0;
}
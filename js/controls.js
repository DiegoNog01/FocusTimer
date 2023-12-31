export default function Controls({buttonPlay, buttonPause, buttonSet, buttonStop}) {

    function play() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonStop.classList.remove('hide');
        buttonSet.classList.add('hide');
    }

    function pause() {
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
    }

    function reset() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonStop.classList.add('hide');
        buttonSet.classList.remove('hide');
    }

    function getMinutes() {

        let newMinutes = prompt('Quantos minutos?');
    
        if (!newMinutes || isNaN(newMinutes)) {
            return false
        }
    
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}

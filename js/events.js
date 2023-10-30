import { elements } from "./elements.js";

const { buttonPause, buttonPlay, buttonSet, buttonSoundOff, buttonSoundOn, buttonStop, minutesDisplay, secondsDisplay } = elements

export default function Events({controls, timer, sound}) {
    buttonPlay.addEventListener('click', () => {
        controls.play();
        timer.countdown();
        sound.pressButton();
    })

    buttonPause.addEventListener('click', () => {
        controls.pause();
        timer.hold();
        sound.pressButton();
    })

    buttonStop.addEventListener('click', () => {
        controls.reset();
        timer.reset();
        sound.pressButton();
    })

    buttonSoundOn.addEventListener('click', () => {
        buttonSoundOn.classList.add('hide');
        buttonSoundOff.classList.remove('hide');
        sound.bgAudioStart();
    })

    buttonSoundOff.addEventListener('click', () => {
        buttonSoundOff.classList.add('hide');
        buttonSoundOn.classList.remove('hide');
        sound.bgAudioPause();
    })

    buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes();

        if (!newMinutes || isNaN(newMinutes)) {
            timer.reset();
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)

    })
}

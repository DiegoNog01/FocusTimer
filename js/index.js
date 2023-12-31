import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";
import Events from "./events.js";

const { buttonPause, buttonPlay, buttonSet, buttonSoundOff, buttonSoundOn, buttonStop, minutesDisplay, secondsDisplay } = elements

const controls = Controls({ buttonPause, buttonPlay, buttonSet, buttonStop })

const timer = Timer({ minutesDisplay, secondsDisplay, resetControls: controls.reset })

const sound = Sound();

Events({controls, timer, sound});







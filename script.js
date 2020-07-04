window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio)
    if (!audio) return; // stops function from running
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

});
window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");

<<<<<<< HEAD
});
=======
})
>>>>>>> 42b9a0ea2e5d2c68ebed9e6f06ad72c94b308673

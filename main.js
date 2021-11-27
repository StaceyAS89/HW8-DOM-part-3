let togBtn = document.getElementById('togBtn');
let fullFormat = document.getElementById("demo-full-format");
let shortFormat = document.getElementById("demo-short-format");



function timerFullFormat() {
    let timeShow = new Date();
    fullFormat.innerHTML = timeShow.toLocaleTimeString();
}

function timerShortFormat() {
    let timeShow = new Date();
    shortFormat.innerHTML = timeShow.toLocaleTimeString([], {
        timeStyle: 'short'
    });
}

let fullTimeShow = setInterval(function () {
    timerFullFormat()
}, 250);

let shortTimeShow = setInterval(function () {
    timerShortFormat()
}, 1000);

togBtn.addEventListener('click', function (event) {
    fullFormat.classList.toggle('demo-hidden');
    shortFormat.classList.toggle('demo-visible');
})
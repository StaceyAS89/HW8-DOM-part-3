let fullFormat = document.getElementById("demo-full-format");
let timeClick = true;


function timerFullFormat() {
    let timeShow = new Date();
    fullFormat.innerHTML = timeClick ? timeShow.toLocaleTimeString() : timeShow.toLocaleTimeString([], {
        timeStyle: 'short'
    })
}

setInterval(function () {
    timerFullFormat();
}, 250)

fullFormat.addEventListener('click', function (event) {
    timeClick = !timeClick

})
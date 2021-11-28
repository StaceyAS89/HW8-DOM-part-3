let fullFormat = document.getElementById("demo-full-format");
let timeClick = true;


function timerFullFormat() {
    let timeShow = new Date();
    return timeClick ? fullFormat.innerHTML = timeShow.toLocaleTimeString() : fullFormat.innerHTML = timeShow.toLocaleTimeString([], {
        timeStyle: 'short'
    })
}

setInterval(function () {
    timerFullFormat();
}, 250)

fullFormat.addEventListener('click', function (event) {
    timeClick = !timeClick

})

function getNumbers(from, to) {
    if (from > to) {
        return
    }
    console.log(from)
    from += 1;

    getNumbers(from, to)
}

getNumbers(5, 20)



/* start button go to the top   */
let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY >= 100) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.onclick = function () {
    window.scrollTo({
        // left: 0,
        top: 0,
        behavior: "smooth",
    });
};



/* end button go to the top   */



/*
================================================
================================================
*/



/* start our-skills span */
let sectionSkills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {

    if (window.scrollY >= sectionSkills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }


});


/* end our-skills span */




/*
================================================
================================================
*/







/*
================================================
================================================
*/


/* start timer */
// 1000 milisecond = 1sound
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {

    // get data now
    let dateNew = new Date().getTime();

    let dataDiff = countDownDate - dateNew;

    // get time uites
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dataDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dataDiff % ( 1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dataDiff % ( 1000 * 60)) / (1000));

    document.querySelector(".days-event").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours-event").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes-event").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds-event").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dataDiff < 0) {
        clearInterval(counter);
    }
    
}, 100)


/* end timer */


/*
================================================
================================================
*/


/* ====== start stats numbers ======*/

let boxNumbers = document.querySelectorAll(".box .number");
let sectionStats = document.querySelector(".stats");
let startedStats = false;



window.addEventListener("scroll", () => {

    if (window.scrollY >= sectionStats.offsetTop) {
        if (!startedStats) {
            boxNumbers.forEach((num) => startCountStats(num));
        }
        sectionStats = true;
    }

});

function startCountStats(ele) {
    let stats = ele.dataset.stats;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == stats) {
            clearInterval(count);
        }
    }, 2000 / stats);
}

// startCountStats(document.querySelectorAll(".box .number")[0]);



/* ====== end stats numbers ======*/


/*
================================================
================================================
*/
















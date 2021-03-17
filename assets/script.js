const timeBlocksEl = $(".time-blocks");
const currentTimeEl = $("#currentDay");

let now = moment().format("ddd, MMM Do h:mm a")

let dayStart = moment().hour(9);
let dayEnd = moment().hour(17)
let hoursInDay = dayEnd.diff(dayStart, 'hours');

// console.log(hoursInDay)
// console.log(dayStart.format("h"))
// console.log(dayEnd.format("h"))

function setTimes() {
    
}

function timer(){
    currentTimeEl.text(now)
    let timer = setInterval(function(){
        currentTimeEl.text(moment().format("ddd, MMM Do h:mm a"))
        now = moment().format("ddd, MMM Do h:mm a");
    },60 * 1000);
    
}

// how many time blocks
const timeLabels = ["9am","10am","11am","12am","1pm","2p,","3pm","4pm","5pm"];

timer();



// psuedo

// need current date and time
// each time block needs a time to check against current time
    // if current time is past the time block time then make read only
    // change class of time block



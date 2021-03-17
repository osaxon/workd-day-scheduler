const timeBlocksEl = $(".time-blocks");
const currentTimeEl = $("#currentDay");

let now = moment().format("ddd, MMM Do h:mm a")



let startHour = 8
let endHour = 16;
// console.log(hoursInDay)
// console.log(dayStart.format("h"))
// console.log(dayEnd.format("h"))

function setTimes() {

    let dayStart = moment().hour(startHour).startOf('hour');
    let dayEnd = moment().hour(endHour).startOf('hour');
    let hoursInDay = dayEnd.diff(dayStart, 'hours');
    console.log(dayStart.format('H'));
    for(i = 0; i < hoursInDay; i++){
        if(!i > 0){
            let hour = dayStart;
        } else {
            let hour = dayStart.add(1,'h')
        };
        timeBlocksEl.children().eq(i).children().eq(0).text(hour.format('h a'));
        timeBlocksEl.children().eq(i).children().eq(0).attr('data-hour',hour.format('H'));;
        console.log(timeBlocksEl.children().eq(i).children().eq(0).attr('data-hour'));
    }
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
setTimes()



// psuedo

// need current date and time
// each time block needs a time to check against current time
    // if current time is past the time block time then make read only
    // change class of time block



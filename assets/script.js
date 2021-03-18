const timeBlocksEl = $(".time-blocks");
const currentTimeEl = $("#currentDay");

let now = moment().format("ddd, MMM Do h:mm a")



let startHour = 9
let endHour = 17;
// console.log(hoursInDay)
// console.log(dayStart.format("h"))
// console.log(dayEnd.format("h"))

function setTimes() {
    let dayStart = moment().hour(startHour).startOf('hour');
    let hour = dayStart;
    $(".time-block").each(function () {
        $(this).children().eq(0).text(hour.format('h a'))
        $(this).attr("data-hour",hour.format('H'))
        hour.add(1,'h');
    })
    checkTimes();
}

function checkTimes() {
    $(".time-block").each(function () {
        $(this).removeClass("past", "present", "future");
        if(parseInt($(this).attr("data-hour")) < moment().format("H")){
            console.log("past")
            $(this).children().eq(1).addClass("past")
        } else if (parseInt($(this).attr("data-hour")) > moment().format("H")){
            console.log("future");
            $(this).children().eq(1).addClass("future")
        } else if (parseInt($(this).attr("data-hour")) == moment().format("H")){
            console.log("present")
            $(this).children().eq(1).addClass("present")
        }
    });
    
}

function timer(){
    currentTimeEl.text(now)
    let timer = setInterval(function(){
        currentTimeEl.text(moment().format("ddd, MMM Do h:mm a"))
        now = moment().format("ddd, MMM Do h:mm a");
    },1500);
    
}


timer();
setTimes()



// psuedo

// need current date and time
// each time block needs a time to check against current time
    // if current time is past the time block time then make read only
    // change class of time block



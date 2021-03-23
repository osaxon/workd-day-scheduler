const timeBlocksEl = $(".time-blocks");
const currentTimeEl = $("#currentDay");
const saveBtn = $(".saveBtn");

let now = moment().format("ddd, MMM Do h:mm a")

// initialise an array if one doesn't exist already in local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let startHour = 9
let endHour = 17;


function setTimes() {
    // set the data attributes of each time block
    
    let dayStart = moment().hour(startHour).startOf('hour');
    let hour = dayStart;
    $(".time-block").each(function () {
        $(this).children().eq(0).text(hour.format('h a'))
        $(this).attr("data-hour",hour.format('H'))
        hour.add(1,'h');
    })
}

function checkTimes() {
    // format time blocks dynamically based on the time
    $(".time-block").each(function () {
        $(this).removeClass("past", "present", "future");
        if(parseInt($(this).attr("data-hour")) < moment().format("H")){
            $(this).children().eq(1).addClass("past")
        } else if (parseInt($(this).attr("data-hour")) > moment().format("H")){
            $(this).children().eq(1).addClass("future")
        } else if (parseInt($(this).attr("data-hour")) == moment().format("H")){
            $(this).children().eq(1).addClass("present")
        }
    });
    
}

function timer(){
    // timer updates every 3s
    currentTimeEl.text(now)
    let timer = setInterval(function(){
        currentTimeEl.text(moment().format("ddd, MMM Do h:mm a"))
        now = moment().format("ddd, MMM Do h:mm a");
    },3000);
    
}

function saveTask() {
    let thisHour = $(this).parent().attr("data-hour");
    let thisTask = $(this).parent().children().eq(1);
    console.log(thisHour, thisTask.val())
    for(var i = 0; i < tasks.length; i++) {
        if (tasks[i].hour == thisHour){
            tasks[i].task = thisTask.val();
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    // sort the task array in ascending order by the hour property
    tasks.sort((a, b) => (b.hour < a.hour) ? 1 : -1);
    tasks.forEach(function (element) {
        let taskHr = element.hour;
        let taskTxt = element.task;
        // update the activity area for each time block with the task stored in the array
        $("[data-hour=" + taskHr + "]").children().eq(1).val(taskTxt);
    })
}


function setUp(){
    timer();
    setTimes();
    checkTimes();
    renderTasks();
    
    // if there aren't any saved tasks in the array then create a new object and push to the tasks array
    if(jQuery.isEmptyObject(tasks)) {
        for(let i = 9; i < 17; i++){
            let taskData = {
                hour: i,
                task: "",
            }
            tasks.push(taskData)
        }
    
    // save the array to local storage
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
}

setUp();

timeBlocksEl.on("click","button", saveTask)



// psuedo

// need current date and time
// each time block needs a time to check against current time
    // if current time is past the time block time then make read only
    // change class of time block


// need an object array to store tasks and the data hour
// saving a task should update the property in the object array for the corresponding hour
// then it should save back to local storage
// when the page loads, any tasks that have been saved should be rendered to the corresponding task area
// there should be one task per hour
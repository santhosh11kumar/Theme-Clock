let  second_hand = document.querySelector(".second");
let  minute_hand = document.querySelector(".minute");
let  hour_hand = document.querySelector(".hour");
let  time = document.querySelector(".time");
let  day = document.querySelector(".day");
let  date = document.querySelector(".date");
let  month = document.querySelector(".month");
let  switch_toggle = document.querySelector(".img_");
let popup = document.querySelector(".popup");

let flag = 0;
var months = ['January', 'February', 'March', 
               'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];
var weekday = ['Sunday', 'Monday', 'Tuesday',
               'Wednesday', 'Thursday', 'Friday', 'Saturday'
           ];
setTimeout(()=>{
    popup.style.display = "none";
},2000);




switch_toggle.addEventListener("click",()=>{
    if(flag === 0){
    flag= 1;
    document.body.classList.add("active"); 
    }
    else {
    flag = 0;
    document.body.classList.remove("active"); 
    }
});



function set_date_day_time(){
    
    let myDate = new Date();
    let myDay = myDate.getDay();
    let minutes___ = myDate.getMinutes();
    if(myDate.getMinutes() < 10){
        minutes___ ="0"+ myDate.getMinutes();
    }
    time.innerHTML =  myDate.getHours()+":" + minutes___;
    month.innerHTML = months[myDay]; 
    day.innerHTML = weekday[myDay];
    date.innerHTML = new Date().toLocaleString(undefined, {day: "numeric"});
    second_hand.style.transform = `translate(-50%,-100%) rotate(${scale(myDate.getSeconds(),0,59,0,360)}deg)`
    minute_hand.style.transform = `translate(-50%,-100%) rotate(${scale(myDate.getMinutes(),0,59,0,360)}deg)`
    hour_hand.style.transform = `translate(-50%,-100%) rotate(${scale(myDate.getHours(),0,23,0,360)}deg)`
}
set_date_day_time()


setInterval(set_date_day_time,10);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
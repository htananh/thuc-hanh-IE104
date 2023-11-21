
function time (){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hourEl= document.getElementById('hour');
    let minutesEl= document.getElementById('minutes');
    let secondsEl= document.getElementById('seconds');
    let AP= document.getElementById('AP');
    if(hours>=12)
    {
        AP.innerHTML="PM";
    }
    else {
        AP.innerHTML="AM";
    }
    hourEl.innerText =hours;
    minutesEl.innerText=minutes;
    secondsEl.innerText = seconds;
}
let seconds=60;
function demNguocTime(){
    let minutesValue =document.getElementById('minutesInput').value;
    
    seconds=seconds-1;
    minutesValue=minutesValue-1;
    if(seconds<0)
    {
        minutesValue=minutesValue-1;
        seconds=59;
    }

    if(minutesValue==0 && seconds==0)
    {
        alert('hết giờ');
        clearInterval(intervalId);
       
    }
    console.log(`${minutesValue}: ${seconds}`)
    let time = document.getElementById('time');
    if (time) {
        time.innerText = `${minutesValue}:${seconds}`;
    }
}

document.getElementById('btn').addEventListener('click',function(){
   
    intervalId = setInterval(demNguocTime, 1000);
});

const targetDate = new Date("November 21, 2023 18:30:11").getTime();
console.log(targetDate);
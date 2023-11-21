
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
setInterval(time, 1000);
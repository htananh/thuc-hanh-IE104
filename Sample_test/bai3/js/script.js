let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let dayOfWeek = date.getDay(); 
let dayOfMonth = date.getDate();
let month = date.getMonth() + 1; // Tháng (0 là Tháng 1, 1 là Tháng 2, ..., 11 là Tháng 12)
let year = date.getFullYear();
const daysOfWeek = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
let dayOfWeekString = daysOfWeek[dayOfWeek];
let formattedTime = `${hours}:${minutes}`;
let formattedDate = `${dayOfWeekString} ngày ${dayOfMonth}/${month}/${year}`;
let time= document.getElementsByClassName('time');
for (let i=0; i<time.length; i++) {

    time[i].innerText=`${formattedTime}, ${formattedDate}`
}
console.log(` ${formattedTime}, ${formattedDate}`);
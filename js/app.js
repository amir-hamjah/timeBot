const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const milisecond = document.getElementById('milisecond');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

function showtime() {
    let d = new Date();
    let hr = d.getHours();
    let mnts = d.getMinutes();
    let sec = d.getSeconds();
    let ms = d.getMilliseconds();
    let dt = d.getDate();
    let yr = d.getFullYear();
    let mnth = d.toLocaleString('default', { month: 'short' })






    hour.textContent = hr;
    minute.textContent = mnts;
    second.textContent = sec;
    milisecond.textContent = ms;
    date.textContent = dt;
    month.textContent = mnth;
    year.textContent = yr;



}
showtime();
setInterval(showtime, 1)
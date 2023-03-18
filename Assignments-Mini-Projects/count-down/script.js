// Fetch Input Onclick of Button 
// Split it into parts
// showing the date and time on the ui 
// setTimeInterval and clearTimeOut 

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


function submitDateTime() {
    var dateTimeInput = document.getElementById('dateInput').value;
    var countDown = new Date(dateTimeInput).getTime(),
        x = setInterval(function () {

            var now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerHTML = Math.floor(distance / (day)),
                document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance <= 0) {
                clearInterval(x);
                var eventSuccess = document.getElementById('eventSuccess');
                eventSuccess.innerHTML = 'Count Down Completed'
                document.getElementById('counterDiv').style.display = "none";


            }

        }, second)
}


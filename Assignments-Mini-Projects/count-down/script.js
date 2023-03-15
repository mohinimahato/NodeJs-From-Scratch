// Fetch Input Onclick of Button 
// Split it into parts
// showing the date and time on the ui 
// set time out starts

function submitDateTime() {
    // Capturing all the id's which will be updated
    var dateInp = document.getElementById('dateInput').value;
    var timeInp = document.getElementById('timeInput').value;

    // Splitting the time and date input into arrays
    var dateSplit = dateInp.split('-');
    var timeSplit = timeInp.split(':');

    // Showing the output array values in the UI
    dateOutput.innerHTML = dateSplit[2];
    monthOutput.innerHTML = dateSplit[1];
    yearOutput.innerHTML = dateSplit[0];
    minOutput.innerHTML = timeSplit[0];
    secOutput.innerHTML = timeSplit[1];

    // 

}
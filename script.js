window.addEventListener("DOMContentLoaded", calculateTime);



    
        // day = document.getElementById("day"),
        // hours = document.getElementById("hour"),
        // minutes = document.getElementById("minute"),
        // ampms = document.getElementById("ampm");


    function calculateTime() {
        let date = new Date(),
            dayNumber = date.getDay(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            ampm = hour >= 12 ? 'PM' : 'AM',
            dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


            hour = hour % 12;
            hour = hour ? 12 : '12';
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;

        document.getElementById("day").innerHTML = dayNames[dayNumber];
        document.getElementById("hour").innerHTML = hour -1;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("ampm").innerHTML = ampm;

        setTimeout(calculateTime, 200);
    }
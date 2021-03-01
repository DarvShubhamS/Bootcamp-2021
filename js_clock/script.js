var clock = function () {
    var date = new Date();
    var am_pm;
    var time;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var today = date.getDay()
    var month;
    var year = date.getFullYear()
    var greeting;

    // setting up greeting message
    if (hours < 12)
        greeting = 'Good Morning';
    else if (hours >= 12 && hours <= 17)
        greeting = 'Good Afternoon';
    else if (hours >= 17 && hours <= 24)
        greeting = 'Good Evening';


    // if seconds less than add zero above it to format 
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // if minutes less than add zero above it to format 
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    // converting time to 12 hours format and setting am and pm
    if (hours > 12) {
        hours = hours - 12
        am_pm = "pm"
    }
    else {
        am_pm = "am"
    }

    // finding out month by using month value as index
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    month = months[date.getMonth()]

    // formatting time and date
    time = `${hours}:${minutes}:${seconds} ${am_pm}`
    today_date = `${today} ${month} ${year}`


    // setting html elements to render time
    document.getElementById("greeting").innerHTML = greeting
    document.getElementById("clock").innerHTML = time
    document.getElementById("date").innerHTML = today_date




}

// using setinterval to update time and seconds
setInterval(clock, 1000)




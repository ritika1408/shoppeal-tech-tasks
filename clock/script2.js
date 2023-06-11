window.addEventListener("load", () => {
    realTimeClock();
    function realTimeClock(){

        const today = new Date();

        const hours= today.getHours();
        const mins =  today.getMinutes();
        const seconds = today.getSeconds();

        // add 0 to hours, minutes and seconds when they are less than 10

        const hour = hours < 10 ? "0"+hours : hours;
        const min = mins < 10 ? "0"+ mins : mins;
        const sec = seconds < 10 ? "0"+ seconds : seconds;


        const realTime = hour > 12 ? hour - 12 : hour;

        const session = hour<12 ? "AM" : "PM";

        const month = today.getMonth();
        const year = today.getFullYear();
        const date = today.getDate();

        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        const currentDate = date + "-" + monthList[month] + "-" + year;

        const currentTime = realTime + ":" + min + ":"+ sec + session;

        const  realDateTime = currentDate + "\n" + currentTime;

        document.getElementById("real-date").innerHTML = currentDate;
        document.getElementById("real-time").innerHTML = currentTime;
        setTimeout(realTimeClock, 1000);

    }
})









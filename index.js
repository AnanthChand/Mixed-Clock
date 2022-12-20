// Analog clock start

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = htime * 30 + .5 * mtime;
    mrotation = 6 * mtime + .1 * stime;
    srotation = 6 * stime;


    ahour.style.transform = `rotate(${hrotation}deg)`;
    aminutes.style.transform = `rotate(${mrotation}deg)`;
    aseconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);


//Analog clock ends


//Digital Clock Starts
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    
    if(hrs>=12){
        hrs =hrs-12;
        if(hrs<10){
            hrs = ["0"+hrs]
        }
        session.innerHTML= "PM"
    }else{
        session.innerHTML="AM"
    }
    
    document.getElementById('dhours').innerHTML = hrs;
    document.getElementById('dminutes').innerHTML = min;
    document.getElementById('dseconds').innerHTML = sec;
}
setInterval(displayTime, 10);

//Digital Clock ends



// console some time info using Date object
    /* console.log(date.getHours() % 12);
    console.log(date.getMinutes());
    console.log(date.getSeconds()); */

// Setting the current time in the windows
    var clck = document.getElementById('clock');
    var hexColor = document.getElementById('hex-color');

    function hexClock(){
        var date = new Date();

        var hr = (date.getHours() % 12).toString();
        var min = date.getMinutes().toString();
        var sec = date.getSeconds().toString();

        if(hr.length < 2){
            hr = "0" + hr;
        }
        if(min.length < 2){
            min = "0" + min;
        }
        if(sec.length < 2){
            sec = "0" + sec;
        }

        var clockStr = hr + " : " + min + " . " + sec;
        var hexCode = "#" + hr + min + sec;

        clck.textContent = clockStr;
        hexColor.textContent = hexCode;
        document.querySelector('body').style.backgroundColor = hexCode;
    }

    setInterval(hexClock, 1000);
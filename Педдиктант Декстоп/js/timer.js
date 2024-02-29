var deadline = 'April 23 2024 09:00:00 GMT+03:00';
var endtime;
var t = Date.parse(endtime) - Date.parse(new Date());
function getTimeRemaining(endtime){  
    var t = Date.parse(endtime) - Date.parse(new Date());  
    var seconds = Math.floor( (t/1000) % 60 );  
    var minutes = Math.floor( (t/1000/60) % 60 );  
    var hours = Math.floor( (t/(1000*60*60)) % 24 );  
    var days = Math.floor( t/(1000*60*60*24) );  
   
    return {  
     'total': t,  
     'days': days,  
     'hours': hours,  
     'minutes': minutes,  
     'seconds': seconds  
    };  
  }


  function initializeClock(id, endtime){  
    var clock = document.getElementById(id);  
    var timeinterval = setInterval(function(){  
     var t = getTimeRemaining(endtime);  
     clock.innerHTML = '  ' + t.days + '  ' + ' '+ t.hours +'  ' + ' ' + t.minutes + '  ' +  ' ' + t.seconds;  
     if(t.total<=0){  
      clearInterval(timeinterval);  
     }  
    },1000);  
  }

  initializeClock('clockdiv', deadline);
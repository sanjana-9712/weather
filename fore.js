$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/f966777f2b94b95b/forecast/q/India/Delhi.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    //var location = parsed_json.location.city;
    //var temp_f = parsed_json.current_observation.temp_f;
    var date = parsed_json.forecast.txt_forecast.date;
    //document.write("Current temperature in " + location + " is: " + temp_f);
    var i = 0;    
    //document.getElementById("demo").innerHTML = "Time : " + date;
    var arr_date = new Array(4);
    var arr_month = new Array(4);
    var arr_day = new Array(4);
    var arr_img = new Array(4);
    var arr_conditions = new Array(4);
    var arr_maxtemp = new Array(4);
    var arr_mintemp = new Array(4);  
    // var arr_hum = new Array(4);
    // var arr_wind = new Array(4);
    // var arr_windir = new Array(4);
    var arr_prec = new Array(4);
    //var date57 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['day'];
    //document.getElementById("date2").innerHTML = date57;
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_date[i] = parsed_json.forecast.simpleforecast.forecastday[i].date.day ;
    }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_month[i] = parsed_json.forecast.simpleforecast.forecastday[i].date.monthname_short ;
    }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_day[i] = parsed_json.forecast.simpleforecast.forecastday[i].date.weekday_short ;
    }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_img[i] = parsed_json.forecast.simpleforecast.forecastday[i].icon_url ;
    }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_conditions[i] = parsed_json.forecast.simpleforecast.forecastday[i].conditions ;
    }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
        arr_maxtemp[i] = parsed_json.forecast.simpleforecast.forecastday[i].high.celsius ;
      }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
        arr_mintemp[i] = parsed_json.forecast.simpleforecast.forecastday[i].low.celsius ;
    }
    // for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
    //   arr_hum[i] = parsed_json.forecast.simpleforecast.forecastday[i].avehumidity ;
    // }
    // for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
    //   arr_wind[i] = parsed_json.forecast.simpleforecast.forecastday[i].avewind.kph ;
    // }
    // for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
    //   arr_windir[i] = parsed_json.forecast.simpleforecast.forecastday[i].avewind.dir ;
    // }
    for(i = 0; i< parsed_json.forecast.simpleforecast.forecastday.length; i++){
      arr_prec[i] = parsed_json.forecast.simpleforecast.forecastday[i].qpf_allday.mm ;
    }

    //document.getElementById("date1").innerHTML = arr_day[0] + ", " + arr_date[0] + " " + arr_month[0];
    document.getElementById("date2").innerHTML = arr_day[1] + ", " + arr_date[1] + " " + arr_month[1] ;
    document.getElementById("date3").innerHTML = arr_day[2] + ", " + arr_date[2] + " " + arr_month[2];
    document.getElementById("date4").innerHTML = arr_day[3] + ", " + arr_date[3] + " " + arr_month[3];

    //document.getElementById("imag1").src = arr_img[0];
    document.getElementById("imag2").src = arr_img[1];
    document.getElementById("imag3").src = arr_img[2];
    document.getElementById("imag4").src = arr_img[3];

    //document.getElementById("cond1").innerHTML = arr_conditions[0];
    document.getElementById("cond2").innerHTML = arr_conditions[1];
    document.getElementById("cond3").innerHTML = arr_conditions[2];
    document.getElementById("cond4").innerHTML = arr_conditions[3];
  
    //document.getElementById("maxt1").innerHTML = "Max : " + arr_maxtemp[0] + "&#176";
    document.getElementById("maxt2").innerHTML = arr_maxtemp[1] + "&#176";
    document.getElementById("maxt3").innerHTML = arr_maxtemp[2] + "&#176";
    document.getElementById("maxt4").innerHTML = arr_maxtemp[3] + "&#176";
  
    //document.getElementById("mint1").innerHTML = "Min : " + arr_mintemp[0] + "&#176";
    document.getElementById("mint2").innerHTML = arr_mintemp[1] + "&#176";
    document.getElementById("mint3").innerHTML = arr_mintemp[2] + "&#176";
    document.getElementById("mint4").innerHTML = arr_mintemp[3] + "&#176";

   // document.getElementById("hum1").innerHTML = "Average humidity : " + arr_hum[0];
    //document.getElementById("hum2").innerHTML = "Average humidity : " + arr_hum[1];
    //document.getElementById("hum3").innerHTML = "Average humidity : " + arr_hum[2];
    //document.getElementById("hum4").innerHTML = "Average humidity : " + arr_hum[3];

    //document.getElementById("wind1").innerHTML = "Average wind speed : " + arr_wind[0] + "kph " + arr_windir[0] ;
    //document.getElementById("wind2").innerHTML = "Average wind speed : " + arr_wind[1] + "kph " + arr_windir[1] ;
    //document.getElementById("wind3").innerHTML = "Average wind speed : " + arr_wind[2] + "kph " + arr_windir[2] ;
    //document.getElementById("wind4").innerHTML = "Average wind speed : " + arr_wind[3] + "kph " + arr_windir[3] ;

    //document.getElementById("prec1").innerHTML = arr_prec[0] + " mm";
    document.getElementById("prec2").innerHTML = arr_prec[1] + " mm";
    document.getElementById("prec3").innerHTML = arr_prec[2] + " mm";
    document.getElementById("prec4").innerHTML = arr_prec[3] + " mm";
  }  
  });
});
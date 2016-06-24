$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/f966777f2b94b95b/conditions/q/India/New_Delhi.json",
  dataType : "jsonp",
  success : function(parsed_json) {
     var date = parsed_json.current_observation.local_time_rfc822;
	   var location = parsed_json.current_observation.display_location.full;
	   //var arr_date = new Array(4);
     //var arr_month = new Array(4);
     //var arr_day = new Array(4);
     var img = parsed_json.current_observation.icon_url;
	   var img_alt = parsed_json.current_observation.icon;
     var conditions = parsed_json.current_observation.weather;
	   var ctemp = parsed_json.current_observation.temp_c;
     //var arr_maxtemp = new Array(4);
     //var arr_mintemp = new Array(4);  
     // var arr_hum = new Array(4);
     //var arr_wind = new Array(4);
     //var arr_windir = new Array(4);
     var prec = parsed_json.current_observation.precip_today_metric;
	   document.getElementById("date1").innerHTML = date;
	   document.getElementById("img1").src = img;
     document.getElementById("img1").alt = img_alt;
     document.getElementById("loc").innerHTML = location;
     document.getElementById("cond").innerHTML = conditions;
     document.getElementById("ctemp").innerHTML = ctemp + "&#8451";
     document.getElementById("prec").innerHTML = prec + " mm";
  }
  });
});
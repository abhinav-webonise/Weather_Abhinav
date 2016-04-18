var app=angular.module('app',[]);
app.controller('getweather',function($http){

var gw = this;
var URL ='http://api.openweathermap.org/data/2.5/forecast/daily'
var request = {
    	method: 'GET',
    	url: URL,
    	params: {
       	q: 'Pune',
      	mode: 'json',
      	units: 'metric',
      	cnt: '1',
      	appid: '31ac4149e2c1387875fe3ce375594d7c'
    	}
};
 $http(request)
    .then(function(response) {
      gw.data = response.data;
    }).
    catch(function(response) {
      gw.data = response.data;
    });

});

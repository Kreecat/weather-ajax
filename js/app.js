var response = {};
var zip = prompt("Please enter Zip code")
$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us' + '&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    response = data;
    var city = response.name;
    var temp = response.main.temp;




    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = container;
    body.appendChild('container');
    var mainDiv = document.createElement('div');
    mainDiv.id = 'main';
    container.appendChild('mainDiv');


    var loc = document.createElement('h1')
    loc.innerHTML = city
    mainDiv.appendChild(loc);


    var curTemp = document.createElement('h2');
    temp.id = 'temp';
    var kelToFar = ((temp - 273.15) * 9 / 5) + 32;
    var far = Math.floor(kelToFar);
    curTemp.innerHTML = far +'\xB0F';








  },
  fail: function(error){
	console.log(error);
  }
});






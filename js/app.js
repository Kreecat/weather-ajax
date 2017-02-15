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
    var condi = response.weather[0].description;
    var img = createElement('img');
    var info = mainDiv.appendChild(loc),  mainDiv.appendChild(curTemp), mainDiv.appendChild(curCond);



    function createElement(elementType){
      var element = document.createElement(elementType); 
      return element 
    }


    var body = document.getElementsByTagName('body')[0];
    var container = createElement('div');
    container.id = 'container';
    body.appendChild(container);


    var mainDiv = createElement('div');
    mainDiv.id = 'main';
    container.appendChild(mainDiv);


    var loc = createElement('h1');
    loc.id = 'location'
    loc.innerHTML = city;
    mainDiv.appendChild(loc);


    var curTemp = createElement('h2');
    curTemp.id = 'temp';
    var kelToFar = ((temp - 273.15) * 9 / 5) + 32;
    var far = Math.floor(kelToFar);
    curTemp.innerHTML = far +'\xB0F';
    mainDiv.appendChild(curTemp);

    var curCond = createElement('h2');
    curCond.id = 'condition';
    curCond.innerHTML = condi;
    mainDiv.appendChild(curCond);
    if (condi === 'clear sky'){
      img.src = 'http://media.istockphoto.com/photos/clear-blue-sky-picture-id493514194?k=6&m=493514194&s=170667a&w=0&h=YUQqRn1vz8wlCEgoezfAuoG6SYPXf5Nnjlp62P1sBWE=';
      body.appendChild(img);
    } else if (condi === 'few clouds'){
      img.src = 'http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/474095061.jpg';
      body.appendChild(img);
    } else if (condi === 'scattered clouds'){
      img.src = 'http://img05.deviantart.net/b681/i/2006/273/7/4/scattered_clouds_by_craigus86.png';
      body.appendChild(img);
    } else if (condi === 'broken clouds'){
      img.src = 'http://www.capetownskies.com/2979/07_sunbeams_cloudb.jpg';
      body.appendChild(img);
    } else if (condi === 'shower rain'){
      img.src = 'http://kytx.images.worldnow.com/images/4751236_G.jpg';
      body.appendChild(img);
    } else if (condi === 'rain'){
      img.src = 'https://i.ytimg.com/vi/J5OSRpRyl6g/maxresdefault.jpg';
      body.appendChild(img);
    } else if (condi === 'thunderstorm'){
      img.src = 'https://aos.iacpublishinglabs.com/question/aq/1400px-788px/thunderstorms-made_fdef5d2957edbe09.jpg?domain=cx.aos.ask.com';
      body.appendChild(img);
    } else if (condi === 'snow'){
      img.src = 'http://weknowyourdreams.com/images/snow/snow-03.jpg';
      body.appendChild(img);
    } else if (condi === 'mist'){
      img.src = 'http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040';
      body.appendChild(img);
    } else {
      console.log("Not Found")
    }








  },
  fail: function(error){
	console.log(error);
  }
});






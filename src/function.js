function makeRequest(url, renderFunction) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {
      renderFunction(JSON.parse(xhr.responseText));

    }
  }
  xhr.open('GET', url);
  xhr.send();
};


const select = (selector) => document.querySelector(selector);

/////////////////////////

var popUrl = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc/550&api_key=5bb2c5fa478415bd431d599cac1bd762";

function displayPop(response) {
  console.log(response);
var popularImage;
  response.results.map(function(repo) {
    // select('#popular').textContent = repo.id;
    // select('#popular').textContent += repo.id +' ';
// http://image.tmdb.org/t/p/w185/mAH97Vj79ZNy8jso27NrVyEIlWv.jpg

    // var token= repo.poster_path;
    //   var ur="http://image.tmdb.org/t/p/w185/" +token;
    // select('#popular').textContent += "http://image.tmdb.org/t/p/w185/" + repo.poster_path + ' ';
     popularImage= "http://image.tmdb.org/t/p/w185/" + repo.poster_path;

     var DOM_img = document.createElement("img");
     DOM_img.src = popularImage;

      var a=select('#popular');
     a.appendChild(DOM_img);



    console.log( popularImage);

  });

};
makeRequest(popUrl, displayPop);


if (typeof module !== 'undefined') {
  module.exports = makeRequest;
}

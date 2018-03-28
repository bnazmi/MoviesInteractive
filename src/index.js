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

var popUrl = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=5bb2c5fa478415bd431d599cac1bd762";


function displayPop(response) {
//  console.log(response);
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
     DOM_img.alt= repo.id;
     var a=select('#popular');
    a.appendChild(DOM_img);

     DOM_img.addEventListener('click', function(){
       var screen=select('#screen');
       screen.textContent = "";

              //console.log(DOM_img.alt);
       var id=DOM_img.alt;

       var urlKey="http://api.themoviedb.org/3/movie/" +id+ "/videos?api_key=5bb2c5fa478415bd431d599cac1bd762";
       console.log(urlKey);

      makeRequest(urlKey, function(response) {
        console.log(response);

        response.results.map(function(repo) {
        var youtubeKey=repo.key;
          console.log(youtubeKey);
          var youtubeUrl="https://www.youtube.com/embed/"+youtubeKey;
          console.log(youtubeUrl);

           var video = document.createElement("iframe");
                video.src=youtubeUrl;


           // video.setAttribute("src", "youtubeUrl");
                screen.appendChild(video);

                  // frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    });

      });



     });


      // console.log(DOM_img.value);

  //  console.log( popularImage);

  });

};
makeRequest(popUrl, displayPop);



//
// var id;
// var urlKey="http://api.themoviedb.org/3/movie/" +id+ "/videos?api_key=5bb2c5fa478415bd431d599cac1bd762";
//console.log(urlKey);
// var selectImg=document.getElementsByTagName("img");
// console.log(selectImg);
// selectImg.forEach(function(img){
//   return img.addEventListener('click', function(){
//     console.log(img.alt);
//   });
// });
//
// for(var i = 0; i < selectImg.length; i++) {
//   console.log(selectImg[i]);
//   selectImg[i].addEventListener('click', function(){
//     console.log(selectImg[i].alt);
//   });
// }


//
// var selectImg=document.getElementsByTagName("img");
// console.log(selectImg);
//
//
//
// for(var i = 0; i < selectImg.length; i++) {
//
//     selectImg[i].addEventListener('click', function(){
//         alert(this.value);
//     }, false);
// }

//makeRequest(urlKey,getKey);


// var selectImg=select('img');
//  selectImg.addEventListener('click', function(e) {
//     e.preventDefault();
//     var alt=selectImg.alt;
//     console.log(alt);


if (typeof module !== 'undefined') {
  module.exports = makeRequest;
}

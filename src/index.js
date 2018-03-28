var popUrl = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=5bb2c5fa478415bd431d599cac1bd762";

function displayPop(response) {
  //  console.log(response);
  var popularImage;
    response.results.map(function(repo) {
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
  
  
                  screen.appendChild(video);
  
      });
  
        });
  
  
  
       });
  
    });
  
  };
  makeRequest(popUrl, displayPop);

var popUrl = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=5bb2c5fa478415bd431d599cac1bd762";

// var off=select('.on-off');

// off.addEventListener('click', function(){
//
// })

// var imgRes=select('#poster');
//
// imgRes.addEventListener('click', function(){
//
//   var id=imgRes.alt;
//
//
//   var url1="http://api.themoviedb.org/3/movie/" +id+ "/videos?api_key=5bb2c5fa478415bd431d599cac1bd762";
//   console.log(url1);
//
// })


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

  window.onload=search();

  function connect(url,callback) {
      console.log(url)
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function() {
          if(xhr.readyState==4 && xhr.status==200){
              var response = JSON.parse(xhr.responseText);
              console.log(response)
              callback(response);
          };
      };
      xhr.open("GET",url,true);
      xhr.send();
  }

  function search(cb) {
      var result = document.querySelector(".search-reasult");
  var btn =document.querySelector("#search-button");


      btn.addEventListener("click", function(event){
          var input = document.querySelector("#search-index").value;
          var url =`http://www.omdbapi.com/?s=${input}&apikey=6245962e`;
          result.innerHTML="";


      connect(url, function(res) {
          event.preventDefault();
         res.Search.map(function(i){
          var sub_result = document.createElement("div");
          sub_result.className="mov_list";
          result.appendChild(sub_result);
              var title = document.createElement("h4");
              var year = document.createElement("p");
              var poster=document.createElement("img");
              sub_result.appendChild(poster);
              var y=i.Poster;
              poster.src=y;
              var imgId = i.imdbID;
              poster.setAttribute("alt", imgId);
              poster.setAttribute("id", 'poster');
              sub_result.appendChild(title);
              var x =i.Title;
              title.textContent=x;
              sub_result .appendChild(year);
              var z = i.Year;
              year.textContent=z;


              console.log(imgId);

          });




      });
  });
  }

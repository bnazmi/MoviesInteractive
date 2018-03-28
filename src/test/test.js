var test = require('tape');

var logic = require('../function');

// var http = require("http");



test('Example test', function(t) {
  t.pass();
  t.end();
});

//
// test('makeRequest function', function(t) {
// var url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/550&api_key=5bb2c5fa478415bd431d599cac1bd762";
// var expected =5;
//
//
// var actual = logic.makeRequest(url);
//
// t.deepEqual(actual, expected);
// t.end();
// });




//
// [{
// page: 1,
// total_results: 352831,
// total_pages: 17642,
// results: [
// {
// vote_count: 0,
// id: 439468,
// video: false,
// vote_average: 0,
// title: "Puccini Gianni Schicchi",
// popularity: 1.012058,
// poster_path: "/cWWCWbsJa2t0FbQwsdQR27MRP3k.jpg",
// original_language: "en",
// original_title: "Puccini Gianni Schicchi",
// genre_ids: [ ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: "2015-02-04"
// },
// {
// vote_count: 0,
// id: 440656,
// video: false,
// vote_average: 0,
// title: "Super GALS!",
// popularity: 1.3501,
// poster_path: "/duahzgtKA6fQKOu4nav89va7R7E.jpg",
// original_language: "en",
// original_title: "Super GALS!",
// genre_ids: [
// 16,
// 35
// ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: "2001-04-01"
// },
// {
// vote_count: 0,
// id: 256822,
// video: false,
// vote_average: 0,
// title: "Sagara Sangamam",
// popularity: 1.000164,
// poster_path: "/mAH97Vj79ZNy8jso27NrVyEIlWv.jpg",
// original_language: "te",
// original_title: "Sagara Sangamam",
// genre_ids: [
// 18
// ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: "1983-06-03"
// },
// {
// vote_count: 0,
// id: 117246,
// video: false,
// vote_average: 0,
// title: "Drei (3)",
// popularity: 1.001157,
// poster_path: "/3Duwh2u93yIt1NXql9jjGNvKeoC.jpg",
// original_language: "es",
// original_title: "Drei (3)",
// genre_ids: [
// 18,
// 35,
// 10749,
// 10769
// ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: ""
// },
// {
// vote_count: 0,
// id: 328749,
// video: false,
// vote_average: 0,
// title: "Boys in the Sand",
// popularity: 1,
// poster_path: "/byIYYC1actrUIEl2opmOTgTrRIv.jpg",
// original_language: "en",
// original_title: "Boys in the Sand",
// genre_ids: [ ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: "1971-01-04"
// },
// {
// vote_count: 0,
// id: 169181,
// video: false,
// vote_average: 0,
// title: "Earth From Space",
// popularity: 1.002634,
// poster_path: "/gjy2lwyS4J2u6RlLdF6L5x1Ikth.jpg",
// original_language: "en",
// original_title: "Earth From Space",
// genre_ids: [
// 99
// ],
// backdrop_path: "/7R7PYyvaGUaibvjSwAeKeaOTwJ7.jpg",
// adult: false,
// overview: "",
// release_date: "2012-06-04"
// },
// {
// vote_count: 0,
// id: 429763,
// video: false,
// vote_average: 0,
// title: "Cargo",
// popularity: 1,
// poster_path: "/vRWnysXcmp2ddSniPmUu1ZZUmAY.jpg",
// original_language: "en",
// original_title: "Cargo",
// genre_ids: [
// 18,
// 27
// ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: "2017-12-31"
// },
// {
// vote_count: 0,
// id: 102279,
// video: false,
// vote_average: 0,
// title: "23rd Psalm Branch: Part I",
// popularity: 1.00076,
// poster_path: "/6LuDDc1P9oqvjy9oeBrI7QBRi4c.jpg",
// original_language: "en",
// original_title: "23rd Psalm Branch: Part I",
// genre_ids: [ ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: ""
// },
// {
// vote_count: 0,
// id: 102281,
// video: false,
// vote_average: 0,
// title: "23rd Psalm Branch: Part II",
// popularity: 1,
// poster_path: "/aJ76WxuYfgz0YXTt6ApIi2IJw24.jpg",
// original_language: "en",
// original_title: "23rd Psalm Branch: Part II",
// genre_ids: [ ],
// backdrop_path: null,
// adult: false,
// overview: "",
// release_date: ""
// },
// {
// vote_count: 1,
// id: 441580,
// video: false,
// vote_average: 10,
// title: "The Jinx: The Life and Deaths of Robert Durst Season 1 Chapter 6: What the Hell Did I Do?",
// popularity: 1,
// poster_path: "/9Hj2bqi955SvTa5zj7uZs6sic29.jpg",
// original_language: "en",
// original_title: "The Jinx: The Life and Deaths of Robert Durst Season 1 Chapter 6: What the Hell Did I Do?",
// genre_ids: [
// 99
// ],
// backdrop_path: "/3br0Rt90AkaqiwVBZVvVUYD1juQ.jpg",
// adult: false,
// overview: "",
// release_date: "2015-03-15"
// },
// {
// vote_count: 0,
// id: 377596,
// video: false,
// vote_average: 0,
// title: "Tom and Jerry: Spotlight Collection",
// popularity: 1.000286,
// poster_path: "/wAZ7Z94MdA7wV2mLrNDWT4lp5xe.jpg",
// original_language: "en",
// original_title: "Tom and Jerry: Spotlight Collection",
// genre_ids: [
// 10751,
// 16,
// 35
// ],
// backdrop_path: "/lDPBHy0D81x1nG4iBfJfy8qQsRT.jpg",
// adult: false,
// overview: "",
// release_date: "2004-10-26"
// },
// {
// vote_count: 0,
// id: 438026,
// video: false,
// vote_average: 0,
// title: "Sherlock: The Lying Detective",
// popularity: 1.25715,
// poster_path: "/e8In8IS1fzCJ8OlISe4z9zk857B.jpg",
// original_language: "en",
// original_title: "Sherlock: The Lying Detective",
// genre_ids: [
// 18,
// 9648
// ],
// backdrop_path: "/5IDyICd5k1JQbAlhSMN64yU4Wkk.jpg",
// adult: false,
// overview: "",
// release_date: "2017-01-08"
// },
// {
// vote_count: 18,
// id: 27934,
// video: false,
// vote_average: 7.5,
// title: "12 стульев",
// popularity: 2.52938,
// poster_path: "/oylRKuuCN5pvMIK2e5OEFcLdghQ.jpg",
// original_language: "ru",
// original_title: "12 стульев",
// genre_ids: [
// 12,
// 35
// ],
// backdrop_path: "/j7xsMaXCL7qPgvCSNjP6oZA2ITr.jpg",
// adult: false,
// overview: "",
// release_date: ""
// },
// {
// vote_count: 2,
// id: 36589,
// video: false,
// vote_average: 9,
// title: "Angel in Love",
// popularity: 1.368448,
// poster_path: "/fgiUtPtRqabEvGiWxefx2RU6Fb2.jpg",
// original_language: "en",
// original_title: "Zakochany anioł",
// genre_ids: [
// 18,
// 878,
// 10749
// ],
// backdrop_path: "/sU2RdenM98QRU957OErKF7rKlNp.jpg",
// adult: false,
// overview: "Giordano, an angel assigned to an orphan in Krakow, is two years into the job when his celestial overseers, citing budget cuts, initiate "Phase Two" without telling him. Some changes are good - they send him a nanny, the enterprising Irena; some are bad - his phone number to Heaven no longer works nor do his special powers; and some dismay him - he grows a penis. His closest friend tells him to get a woman, and Irena advises him on hygiene. He visits a therapist, Roma, and falls in love with her. She tells him its transference. Meanwhile, Giordano's celestial friends conspire to rid Roma of her boyfriend, clearing the way for Giordano to be his naive and engaging self.",
// release_date: "2005-05-13"
// },
// {
// vote_count: 1,
// id: 36590,
// video: false,
// vote_average: 7,
// title: "Totally Baked",
// popularity: 1.057617,
// poster_path: "/uXemVL10HOFnIb35lKDoZJkviWq.jpg",
// original_language: "en",
// original_title: "Totally Baked",
// genre_ids: [
// 35
// ],
// backdrop_path: "/hNp4zuu3pVyiEpvIpbCU3iccBbm.jpg",
// adult: false,
// overview: "Meet Dave Bertman, a tightly wound 37 year-old father of one. Bertman's "higher" education begins when medical marijuana activists wielding "loaded" weapons interrupt a planned reunion barbecue with college debate chums. When his teenage daughter Gina Marie unexpectedly arrives with a joint found in her pocket, Bertman assumes the worst. Only after he faces his own hypocrisies, can he have the open and honest discussion needed for father and daughter to understand each other and reconnect.",
// release_date: "2007-04-20"
// },
// {
// vote_count: 28,
// id: 36592,
// video: false,
// vote_average: 7.3,
// title: "Swing Girls",
// popularity: 3.646165,
// poster_path: "/1em3woQtP4CSyeSW8enBF74gqiT.jpg",
// original_language: "ja",
// original_title: "Suwingu gâruzu",
// genre_ids: [
// 35
// ],
// backdrop_path: "/o6SNlJaI5QDUVE1jQvNvjRYdW7D.jpg",
// adult: false,
// overview: "A tale of delinquent and lazy school girls. In their efforts to cut remedial summer math class, they end up poisoning and replacing the schools brass band.",
// release_date: "2004-09-11"
// },
// {
// vote_count: 6,
// id: 39095,
// video: false,
// vote_average: 7.3,
// title: "Mungaru Male",
// popularity: 1.222599,
// poster_path: "/664fTyTzhiJuWatdKXLIkhCX2nT.jpg",
// original_language: "kn",
// original_title: "ಮುಂಗಾರು ಮಳೆ",
// genre_ids: [
// 10402,
// 35,
// 18,
// 10749
// ],
// backdrop_path: null,
// adult: false,
// overview: "Mungaru Male (Kannada: ) (literal translation - Monsoon Rain, Southwest Monsoon in terms of Meteorology) is a Kannada language movie directed by Yograj Bhat featuring Ganesh, Sanjana Gandhi, and Anant Nag in leading roles. The movie is arguably one of the biggest hits in South Indian cinema with box office earnings crossing Rs 50 Crores at the end of 300 days after its release. The movie set a national record as the first Indian language movie to run for 1 year at PVR Cinemas nationwide.",
// release_date: "2006-12-15"
// },
// {
// vote_count: 4,
// id: 39097,
// video: false,
// vote_average: 5.4,
// title: "C.i.S.: Chaoten im Sondereinsatz",
// popularity: 1.323092,
// poster_path: "/cwUI6hWPiyRCHhIMLOdcGD4ifZV.jpg",
// original_language: "de",
// original_title: "C.i.S.: Chaoten im Sondereinsatz",
// genre_ids: [
// 35
// ],
// backdrop_path: "/yOOurcldQs87Yg6ZEQrkGh96C08.jpg",
// adult: false,
// overview: "",
// release_date: "2010-05-09"
// },
// {
// vote_count: 2,
// id: 39098,
// video: false,
// vote_average: 4,
// title: "Snow Lotus",
// popularity: 1.118255,
// poster_path: "/7XmyHEMboMIyMubqmN7Ta5HMXC8.jpg",
// original_language: "zh",
// original_title: "Ganglamedo",
// genre_ids: [
// 18
// ],
// backdrop_path: "/xQPF6COfwCYPQuNfyWuyyw5cUV5.jpg",
// adult: false,
// overview: "A Tibetan girl, who’d be a bride, could sing the traditional folk song Ganglamedo magically and elegantly. Her name was the same as the name of the song. But she disappeared in the night of her wedding. 60 years later, An Yu, a singer of Han nationality, became hot for singing Ganglamedo. But she lost her voice in a performance and then she disappeared, too. Is Ganglamedo a beautiful curse?",
// release_date: "2006-07-01"
// },
// {
// vote_count: 15,
// id: 39099,
// video: false,
// vote_average: 9.2,
// title: "Dragon Ball Saga",
// popularity: 2.346721,
// poster_path: "/9y5zvzzMXqgvorvKMzLju9cPGA3.jpg",
// original_language: "en",
// original_title: "Dragon Ball Saga",
// genre_ids: [
// 28
// ],
// backdrop_path: "/qSb5nFCvBwvaOZBCdCfr382iopT.jpg",
// adult: false,
// overview: "An adventure story about Son Goku &amp; friends based on a manga writen by Akira Toriyama",
// release_date: ""
// }
// ]
// }];

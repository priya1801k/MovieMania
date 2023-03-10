// import React from "react";
// import Header from "./Header";
// import GenreBox from "./GenreBox";
// import "./Favorite.css";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// function Favorite() {
// //   eslint-disable-next-line no-unused-vars
//   // let [favourites, setFavourites] = React.useState([
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/8sMmAmN2x7mBiNKEX2o0aOTozEB.jpg",
//   //     id: 505642,
//   //     title: "Black Panther: Wakanda Forever",
//   //     original_language: "en",
//   //     original_title: "Black Panther: Wakanda Forever",
//   //     overview:
//   //       "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
//   //     poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 12, 878],
//   //     popularity: 3281.982,
//   //     release_date: "2022-11-09",
//   //     video: false,
//   //     vote_average: 7.61,
//   //     vote_count: 392,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/zzoFeH4PsV5Mh2Sc47JOMFwGYOX.jpg",
//   //     id: 829280,
//   //     title: "Enola Holmes 2",
//   //     original_language: "en",
//   //     original_title: "Enola Holmes 2",
//   //     overview:
//   //       "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
//   //     poster_path: "/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [9648, 12, 80],
//   //     popularity: 3183.267,
//   //     release_date: "2022-11-04",
//   //     video: false,
//   //     vote_average: 7.797,
//   //     vote_count: 705,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
//   //     id: 436270,
//   //     title: "Black Adam",
//   //     original_language: "en",
//   //     original_title: "Black Adam",
//   //     overview:
//   //       "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
//   //     poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 14, 878],
//   //     popularity: 3779.941,
//   //     release_date: "2022-10-19",
//   //     video: false,
//   //     vote_average: 6.858,
//   //     vote_count: 1038,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
//   //     id: 49046,
//   //     title: "All Quiet on the Western Front",
//   //     original_language: "de",
//   //     original_title: "Im Westen nichts Neues",
//   //     overview:
//   //       "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
//   //     poster_path: "/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [10752, 18, 28],
//   //     popularity: 2642.131,
//   //     release_date: "2022-10-07",
//   //     video: false,
//   //     vote_average: 7.854,
//   //     vote_count: 705,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
//   //     id: 361743,
//   //     title: "Top Gun: Maverick",
//   //     original_language: "en",
//   //     original_title: "Top Gun: Maverick",
//   //     overview:
//   //       "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
//   //     poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 18],
//   //     popularity: 1244.183,
//   //     release_date: "2022-05-24",
//   //     video: false,
//   //     vote_average: 8.344,
//   //     vote_count: 4710,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/cn9GQzCaeYylEV2hymVR8bskRMJ.jpg",
//   //     id: 766475,
//   //     title: "See How They Run",
//   //     original_language: "en",
//   //     original_title: "See How They Run",
//   //     overview:
//   //       "In the West End of 1950s London, plans for a movie version of a smash-hit play come to an abrupt halt after a pivotal member of the crew is murdered. When world-weary Inspector Stoppard and eager rookie Constable Stalker take on the case, the two find themselves thrown into a puzzling whodunit within the glamorously sordid theater underground, investigating the mysterious homicide at their own peril.",
//   //     poster_path: "/r3rpSAi2yukZwr9H2km0WKGODWo.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [9648, 53, 35],
//   //     popularity: 243.886,
//   //     release_date: "2022-09-09",
//   //     video: false,
//   //     vote_average: 6.642,
//   //     vote_count: 271,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/79PcXPpbDWql74h8Y00mNwbYMbS.jpg",
//   //     id: 664469,
//   //     title: "Amsterdam",
//   //     original_language: "en",
//   //     original_title: "Amsterdam",
//   //     overview:
//   //       "In the 1930s, three friends—a doctor, a nurse, and an attorney—witness a murder, become suspects themselves and uncover one of the most outrageous plots in North American history.",
//   //     poster_path: "/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [80, 35, 36, 9648, 53],
//   //     popularity: 93.414,
//   //     release_date: "2022-09-27",
//   //     video: false,
//   //     vote_average: 6.094,
//   //     vote_count: 254,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/2SEGjVLy7fYbovIyDR7IntH1jT2.jpg",
//   //     id: 913290,
//   //     title: "Barbarian",
//   //     original_language: "en",
//   //     original_title: "Barbarian",
//   //     overview:
//   //       "In town for a job interview, a young woman arrives at her Airbnb late at night only to find that it has been mistakenly double-booked and a strange man is already staying there. Against her better judgement, she decides to stay the night anyway, but soon discovers that there is much more to be afraid of in the house than the other guest.",
//   //     poster_path: "/d0Lhdp9AX70vdvVfhnSraaWw06R.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [27, 53],
//   //     popularity: 486.124,
//   //     release_date: "2022-09-08",
//   //     video: false,
//   //     vote_average: 6.963,
//   //     vote_count: 659,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/lInZWt4JQXZw3VzGvTM2I56L7gB.jpg",
//   //     id: 595586,
//   //     title: "Causeway",
//   //     original_language: "en",
//   //     original_title: "Causeway",
//   //     overview:
//   //       "A US soldier suffers a traumatic brain injury while fighting in Afghanistan and struggles to adjust to life back home in New Orleans. When she meets local mechanic James, the pair begin to forge an unexpected bond.",
//   //     poster_path: "/bUzKIqFIS05Ss31zRTfZfHJIgDP.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [18],
//   //     popularity: 478.322,
//   //     release_date: "2022-10-28",
//   //     video: false,
//   //     vote_average: 6.9,
//   //     vote_count: 77,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
//   //     id: 882598,
//   //     title: "Smile",
//   //     original_language: "en",
//   //     original_title: "Smile",
//   //     overview:
//   //       "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
//   //     poster_path: "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [27, 9648, 53],
//   //     popularity: 890.169,
//   //     release_date: "2022-09-23",
//   //     video: false,
//   //     vote_average: 6.732,
//   //     vote_count: 484,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/707thQazLJiYLBhCrZlRoV05NNL.jpg",
//   //     id: 948276,
//   //     title: "Lost Bullet 2",
//   //     original_language: "fr",
//   //     original_title: "Balle perdue 2",
//   //     overview:
//   //       "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
//   //     poster_path: "/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 18, 53],
//   //     popularity: 256.735,
//   //     release_date: "2022-11-10",
//   //     video: false,
//   //     vote_average: 7.431,
//   //     vote_count: 36,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
//   //     id: 718930,
//   //     title: "Bullet Train",
//   //     original_language: "en",
//   //     original_title: "Bullet Train",
//   //     overview:
//   //       "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//   //     poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 35, 53],
//   //     popularity: 1054.465,
//   //     release_date: "2022-07-03",
//   //     video: false,
//   //     vote_average: 7.516,
//   //     vote_count: 2280,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
//   //     id: 724495,
//   //     title: "The Woman King",
//   //     original_language: "en",
//   //     original_title: "The Woman King",
//   //     overview:
//   //       "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
//   //     poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [28, 18, 36],
//   //     popularity: 277.498,
//   //     release_date: "2022-09-15",
//   //     video: false,
//   //     vote_average: 7.354,
//   //     vote_count: 271,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/ulyR4pWVMRtVcanoassVbmgfEPT.jpg",
//   //     id: 800939,
//   //     title: "Ticket to Paradise",
//   //     original_language: "en",
//   //     original_title: "Ticket to Paradise",
//   //     overview:
//   //       "A divorced couple teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago.",
//   //     poster_path: "/1tzERH50P5c2mFWtLbgixzLZS1L.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [10749, 35],
//   //     popularity: 409.402,
//   //     release_date: "2022-09-08",
//   //     video: false,
//   //     vote_average: 6.973,
//   //     vote_count: 275,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/3ibGaDmgTdXY448ENZmtHEmhP6o.jpg",
//   //     id: 619730,
//   //     title: "Don't Worry Darling",
//   //     original_language: "en",
//   //     original_title: "Don't Worry Darling",
//   //     overview:
//   //       "Alice and Jack are lucky to be living in the idealized community of Victory, the experimental company town housing the men who work for the top-secret Victory Project and their families. But when cracks in their idyllic life begin to appear, exposing flashes of something much more sinister lurking beneath the attractive façade, Alice can’t help questioning exactly what they’re doing in Victory, and why.",
//   //     poster_path: "/9BXYLjXtSipBp2GfAlsri4i8hPC.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [53, 9648, 878],
//   //     popularity: 586.009,
//   //     release_date: "2022-09-21",
//   //     video: false,
//   //     vote_average: 6.925,
//   //     vote_count: 862,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/s5MLcxbdFqvIzTLNLU5yQFFYALR.jpg",
//   //     id: 744114,
//   //     title: "My Policeman",
//   //     original_language: "en",
//   //     original_title: "My Policeman",
//   //     overview:
//   //       "In the late 1990s, the arrival of elderly invalid Patrick into Marion and Tom’s home triggers the exploration of seismic events from 40 years previous: the passionate relationship between Tom and Patrick at a time when homosexuality was illegal.",
//   //     poster_path: "/wdbiMjXd4CxPfCx4r4Jfy8cGec0.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [18, 10749],
//   //     popularity: 607.324,
//   //     release_date: "2022-10-21",
//   //     video: false,
//   //     vote_average: 8.194,
//   //     vote_count: 234,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
//   //     id: 1013860,
//   //     title: "R.I.P.D. 2: Rise of the Damned",
//   //     original_language: "en",
//   //     original_title: "R.I.P.D. 2: Rise of the Damned",
//   //     overview:
//   //       "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
//   //     poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [14, 28, 35, 80],
//   //     popularity: 149.946,
//   //     release_date: "2022-11-15",
//   //     video: false,
//   //     vote_average: 6.3,
//   //     vote_count: 52,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/rV0xrSgkOQj2EpiG8n16VHHJeg3.jpg",
//   //     id: 541134,
//   //     title: "The Good Nurse",
//   //     original_language: "en",
//   //     original_title: "The Good Nurse",
//   //     overview:
//   //       "Suspicious that her colleague is responsible for a series of mysterious patient deaths, a nurse risks her own life to uncover the truth in this gripping thriller based on true events.",
//   //     poster_path: "/rSq6cq0LCcbro10jbEaPTEb3WmW.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [18, 80, 9648],
//   //     popularity: 277.817,
//   //     release_date: "2022-10-19",
//   //     video: false,
//   //     vote_average: 7.079,
//   //     vote_count: 449,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
//   //     id: 616037,
//   //     title: "Thor: Love and Thunder",
//   //     original_language: "en",
//   //     original_title: "Thor: Love and Thunder",
//   //     overview:
//   //       "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
//   //     poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [14, 28, 35],
//   //     popularity: 1184.407,
//   //     release_date: "2022-07-06",
//   //     video: false,
//   //     vote_average: 6.719,
//   //     vote_count: 4611,
//   //   },
//   //   {
//   //     adult: false,
//   //     backdrop_path: "/8hSx5b4YfD2dzvGtrE6mdXF0xrZ.jpg",
//   //     id: 928344,
//   //     title: "Weird: The Al Yankovic Story",
//   //     original_language: "en",
//   //     original_title: "Weird: The Al Yankovic Story",
//   //     overview:
//   //       "Exploring every facet of ‘Weird Al’ Yankovic’s life, from his meteoric rise to fame with early hits like ‘Eat It’ and ‘Like a Surgeon’ to his torrid celebrity love affairs and famously depraved lifestyle, this biopic takes audiences on a truly unbelievable journey through Yankovic’s life and career, from gifted child prodigy to the greatest musical legend of all time.",
//   //     poster_path: "/qcj2z13G0KjaIgc01ifiUKu7W07.jpg",
//   //     media_type: "movie",
//   //     genre_ids: [35, 10402, 18],
//   //     popularity: 71.087,
//   //     release_date: "2022-09-08",
//   //     video: false,
//   //     vote_average: 6.609,
//   //     vote_count: 64,
//   //   },
//   // ]);

//   const [favourites,setFavourites] = React.useState([]); 

//   React.useEffect(()=>{
//     setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
//   },[]);
//   React.useEffect(()=>{
//     setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
//   },[removeFromFav]);


 

// const [genres,setGenres] = React.useState([]);
// // eslint-disable-next-line react-hooks/exhaustive-deps
// let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
//   80:'Crime',99:'Documentary',18:'Drama',
//   14:'Fantasy',36:'History',27:'Horror',10402:'Music',
//   9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',
//   53:'Thriller',10752:'War',37:'Western',10751:'Family'};

// React.useEffect(()=>{
  
//     let temp = favourites.map((movie)=>genreids[movie.genre_ids[0]]);
//     // console.log(temp);
//     //unique val hold
//     temp = new Set(temp);
//     setGenres(["AllGenres",...temp]);//setting favorite genres movies
//     // console.log("setgenre",genres);
// },[favourites, genreids, genres]);

//   const [value, setValue] = React.useState("");//for searchtext
//   const [num,setNum] = React.useState(5);
//   const setVal=(e)=>{
//     let newNum = e.target.value;
//     setNum(newNum);
//   }
//   const setText = (e) => {
//     let newValue = e.target.value;
//     setValue(newValue);
//   };

//   let [ratingOrder, setRatingOrder] = React.useState(null);
//   let [popularityOrder, setpopularityOrder] = React.useState(null);
// //   let [status,setStatus]=React.useState(true);//rating is set 

//   function setRatingHandler(order) {
//     setpopularityOrder(null);
//     setRatingOrder(order);
//     // setStatus(true);
//   }
//   function popularityhandler(order) {
//     setRatingOrder(null);
//     // setStatus(false);
//     setpopularityOrder(order);
//   }

//   //searching
//   function FilterLogic(searchText, movieArray) {
//     let filteredMovieArray = [];
//     for (let i = 0; i < movieArray.length; i++) {
//       let upperSearchText = searchText.toUpperCase(); //searchText ko uppercase
//       let movieName = movieArray[i].original_title; //movie name get kr lo movieArray se and again usko bhi upperCase kar do.
//       let upperText = movieName.toUpperCase();
//       let ans = upperText.includes(upperSearchText); //Ab check kro ki  movieList wale name mein jo hmne search kra hai wo hai ya nahi it will give true or false
//       if (ans === true) {
//         //if true then that movie from movie lisst add kr do to existinglist category
//         filteredMovieArray.push(movieArray[i]);
//       }
//     }
//     return filteredMovieArray;
//   }

//   let searchedMovies = value===""?favourites: FilterLogic(value, favourites);
//   let ratedMovies = ratingOrder===null?searchedMovies: sortFavourites(ratingOrder, searchedMovies);
//    let popularMovies = popularityOrder===null?ratedMovies: sortPopularFavourites(popularityOrder, ratedMovies);

//   function sortFavourites(ratingOrder, favourites) {
//     if (ratingOrder === null) {
//       return favourites;
//     }
//     function helper(a, b) {
//       if (ratingOrder) {
//         //if true
//         if (a.vote_average > b.vote_average) {
//           return +1;
//         } else if (a.vote_average === b.vote_average) {
//           return 0;
//         } else if (a.vote_average < b.vote_average) {
//           return -1;
//         }
//       }else{
//         if(a.vote_average>b.vote_average){
//             return -1;
//         }else if(a.vote_average===b.vote_average){
//             return 0
//         }else if(a.vote_average<b.vote_average){
//             return +1
//         }
//       }
//     }
//    let ratedFavourites = favourites.sort(helper);
//    return ratedFavourites;
//   }

  

//   function sortPopularFavourites(popularityOrder, ratedMovies) {
//     if (popularityOrder === null) {
//       return ratedMovies;
//     }
//     function helper(a, b) {
//       if (popularityOrder) {
//         //if true
//         if (a.popularity > b.popularity) {
//           return +1;
//         } else if (a.popularity === b.popularity) {
//           return 0;
//         } else if (a.popularity < b.popularity) {
//           return -1;
//         }
//       }else{
//         if(a.popularity>b.popularity){
//             return -1;
//         }else if(a.popularity===b.popularity){
//             return 0
//         }else if(a.popularity<b.popularity){
//             return +1
//         }
//       }
//     }
//    let ratedandpopFavourites = ratedMovies.sort(helper);
//    return ratedandpopFavourites;
//   }

  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   function removeFromFav(deletemovieId){
//     let prevStArray = localStorage.getItem("favourites")||"[]";
//     let prevArray = JSON.parse(prevStArray);
//     prevArray = prevArray.filter((movieObj)=>{
//       return movieObj.id !== deletemovieId;
//     })
//     prevArray = JSON.stringify(prevArray);
//     localStorage.setItem("favourites",prevArray);
//     // popularMovies.map((myMovie)=>{
//     //    return myMovie.id !== deletemovieId;
//     // })
//   }


//   return (
//     <div >
//       <div>
//         <Header></Header>
//         <GenreBox setVal={setVal} num={num} genres={genres} setText={setText} value={value}></GenreBox>
//       </div>
//       <div >
//         <table>
//           <thead>
//             <tr className="favMovieList">
//               <th>Name</th>
//               <th>
//                 <FaChevronUp
//                   onClick={() => {
//                     setRatingHandler(true);
//                   }}
//                 />
//                 Rating
//                 <FaChevronDown
//                   onClick={() => {
//                     setRatingHandler(false);
//                   }}
//                 />
//               </th>
//               <th>
//                 <FaChevronUp
//                   onClick={() => {
//                     popularityhandler(true);
//                   }}
//                 />
//                 Popularity
//                 <FaChevronDown
//                   onClick={() => {
//                     popularityhandler(false);
//                   }}
//                 />
//               </th>
//               <th>Genre</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody className="fav_movie_list">
//             {popularMovies.map((favMov, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     <img
//                       style={{ height: "100px", width: "100px" }}
//                       alt="thisIsFromMOvieList"
//                       src={
//                         "https://image.tmdb.org/t/p/w500/" + favMov.poster_path
//                       }
//                     ></img>
//                     {favMov.title}
//                   </td>
//                   <td>{favMov.vote_average}</td>
//                   <td>{favMov.popularity}</td>
//                   <td>{genreids[favMov.genre_ids[0]]}</td>
//                   <td>
//                     <button className="btn-delete" onClick={()=>{removeFromFav(favMov.id)}}>remove</button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Favorite;

import React from 'react';
import GenreBox from './GenreBox';
import Header from './Header';

function Favorite() {

  return (
    <div>
      <Header/>
      <GenreBox btnPress="AllGenres" />
    </div>
  )
}

export default Favorite
/* eslint-disable react-hooks/exhaustive-deps */

// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import React from 'react';

// function TableForData(props) {
// console.log("data",props.tableData);
//   // const [favourites,setFavourites] = React.useState([]); 

// //   React.useEffect(()=>{
// //     console.log("rendered only one time");
// //     setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
// //   },[]);



// //   React.useEffect(()=>{
// //     setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
// //   },[removeFromFav]);



 

// // const [genres,setGenres] = React.useState([]);
// // // eslint-disable-next-line react-hooks/exhaustive-deps
// // let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
// //   80:'Crime',99:'Documentary',18:'Drama',
// //   14:'Fantasy',36:'History',27:'Horror',10402:'Music',
// //   9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
// //   53:'Thriller',10752:'War',37:'Western',10751:'Family'};

// // React.useEffect(()=>{

// //     let temp = favourites.map((movie)=>genreids[movie.genre_ids[0]]);
// //     // console.log(temp);
// //     //unique val hold
// //     temp = new Set(temp);
// //     setGenres(["AllGenres",...temp]);//setting favorite genres movies
// //     // console.log("setgenre",genres);
// // },[favourites, genreids]);

// //   const [value, setValue] = React.useState("");//for searchtext
// //   const [num,setNum] = React.useState(5);
// //   const setVal=(e)=>{
// //     let newNum = e.target.value;
// //     setNum(newNum);
// //   }
// //   const setText = (e) => {
// //     let newValue = e.target.value;
// //     setValue(newValue);
// //   };

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

// //   //searching
// //   function FilterLogic(searchText, movieArray) {
// //     let filteredMovieArray = [];
// //     for (let i = 0; i < movieArray.length; i++) {
// //       let upperSearchText = searchText.toUpperCase(); //searchText ko uppercase
// //       let movieName = movieArray[i].original_title; //movie name get kr lo movieArray se and again usko bhi upperCase kar do.
// //       let upperText = movieName.toUpperCase();
// //       let ans = upperText.includes(upperSearchText); //Ab check kro ki  movieList wale name mein jo hmne search kra hai wo hai ya nahi it will give true or false
// //       if (ans === true) {
// //         //if true then that movie from movie lisst add kr do to existinglist category
// //         filteredMovieArray.push(movieArray[i]);
// //       }
// //     }
// //     return filteredMovieArray;
// //   }

// //   let searchedMovies = value===""?favourites: FilterLogic(value, favourites);
// //   let ratedMovies = ratingOrder===null?searchedMovies: sortFavourites(ratingOrder, searchedMovies);
// //    let popularMovies = popularityOrder===null?ratedMovies: sortPopularFavourites(popularityOrder, ratedMovies);

// //   function sortFavourites(ratingOrder, favourites) {
// //     if (ratingOrder === null) {
// //       return favourites;
// //     }
// //     function helper(a, b) {
// //       if (ratingOrder) {
// //         //if true
// //         if (a.vote_average > b.vote_average) {
// //           return +1;
// //         } else if (a.vote_average === b.vote_average) {
// //           return 0;
// //         } else if (a.vote_average < b.vote_average) {
// //           return -1;
// //         }
// //       }else{
// //         if(a.vote_average>b.vote_average){
// //             return -1;
// //         }else if(a.vote_average===b.vote_average){
// //             return 0
// //         }else if(a.vote_average<b.vote_average){
// //             return +1
// //         }
// //       }
// //     }
// //    let ratedFavourites = favourites.sort(helper);
// //    return ratedFavourites;
// //   }

  

// //   function sortPopularFavourites(popularityOrder, ratedMovies) {
// //     if (popularityOrder === null) {
// //       return ratedMovies;
// //     }
// //     function helper(a, b) {
// //       if (popularityOrder) {
// //         //if true
// //         if (a.popularity > b.popularity) {
// //           return +1;
// //         } else if (a.popularity === b.popularity) {
// //           return 0;
// //         } else if (a.popularity < b.popularity) {
// //           return -1;
// //         }
// //       }else{
// //         if(a.popularity>b.popularity){
// //             return -1;
// //         }else if(a.popularity===b.popularity){
// //             return 0
// //         }else if(a.popularity<b.popularity){
// //             return +1
// //         }
// //       }
// //     }
// //    let ratedandpopFavourites = ratedMovies.sort(helper);
// //    return ratedandpopFavourites;
// //   }

  
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//   function removeFromFav(deletemovieId){
//     let prevStArray = localStorage.getItem("favourites")||"[]";
//     let prevArray = JSON.parse(prevStArray);
//     prevArray = prevArray.filter((movieObj)=>{
//       return movieObj.id !== deletemovieId;
//     })
//     prevArray = JSON.stringify(prevArray);
//     localStorage.setItem("favourites",prevArray);

//     // setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
//     // popularMovies.map((myMovie)=>{
//     //    return myMovie.id !== deletemovieId;
//     // })
//   }

// let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
//   80:'Crime',99:'Documentary',18:'Drama',
//   14:'Fantasy',36:'History',27:'Horror',10402:'Music',
//   9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
//   53:'Thriller',10752:'War',37:'Western',10751:'Family'};


//   return (
//     <div>TableForData
//       <table>
//       <thead>
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
//           <tbody>
//            {data.map((favMov, index) => {
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
//       </table>
//     </div>
//   )
// }

// export default TableForData


import React from "react";
import "./Favorite.css";
import './TableForData.css';
import Pagination from './Pagination';

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";

function TableForData(props) {
  let tableData = JSON.parse(localStorage.getItem("displayFilterList"));

// eslint-disable-next-line react-hooks/exhaustive-deps
let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
  80:'Crime',99:'Documentary',18:'Drama',
  14:'Fantasy',36:'History',27:'Horror',10402:'Music',
  9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
  53:'Thriller',10752:'War',37:'Western',10751:'Family'};

  const [value, setValue] = React.useState("");//for searchtext
  const setText = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
    setglobalPageNumber(1);
  };

  
  let [ratingOrder, setRatingOrder] = React.useState(null);
  let [popularityOrder, setpopularityOrder] = React.useState(null);

  function setRatingHandler(order) {
    setpopularityOrder(null);
    setRatingOrder(order);
    // setStatus(true);
  }
  function popularityhandler(order) {
    setRatingOrder(null);
    // setStatus(false);
    setpopularityOrder(order);
  }

  //searching
  function FilterLogic(searchText, movieArray) {
    let filteredMovieArray = [];
    for (let i = 0; i < movieArray.length; i++) {
      let upperSearchText = searchText.toUpperCase(); //searchText ko uppercase
      let movieName = movieArray[i].original_title; //movie name get kr lo movieArray se and again usko bhi upperCase kar do.
      let upperText = movieName.toUpperCase();
      let ans = upperText.includes(upperSearchText); //Ab check kro ki  movieList wale name mein jo hmne search kra hai wo hai ya nahi it will give true or false
      if (ans === true) {
        //if true then that movie from movie lisst add kr do to existinglist category
        filteredMovieArray.push(movieArray[i]);
      }
    }
    return filteredMovieArray;
  }

  let searchedMovies = value===""?tableData: FilterLogic(value, tableData);
  let ratedMovies = ratingOrder===null?searchedMovies: sortFavourites(ratingOrder, searchedMovies);
   let popularMovies = popularityOrder===null?ratedMovies: sortPopularFavourites(popularityOrder, ratedMovies);

  function sortFavourites(ratingOrder, favourites) {
    if (ratingOrder === null) {
      return favourites;
    }
    function helper(a, b) {
      if (ratingOrder) {
        //if true
        if (a.vote_average > b.vote_average) {
          return +1;
        } else if (a.vote_average === b.vote_average) {
          return 0;
        } else if (a.vote_average < b.vote_average) {
          return -1;
        }
      }else{
        if(a.vote_average>b.vote_average){
            return -1;
        }else if(a.vote_average===b.vote_average){
            return 0
        }else if(a.vote_average<b.vote_average){
            return +1
        }
      }
    }
   let ratedFavourites = favourites.sort(helper);
   return ratedFavourites;
  }

  

  function sortPopularFavourites(popularityOrder, ratedMovies) {
    if (popularityOrder === null) {
      return ratedMovies;
    }
    function helper(a, b) {
      if (popularityOrder) {
        //if true
        if (a.popularity > b.popularity) {
          return +1;
        } else if (a.popularity === b.popularity) {
          return 0;
        } else if (a.popularity < b.popularity) {
          return -1;
        }
      }else{
        if(a.popularity>b.popularity){
            return -1;
        }else if(a.popularity===b.popularity){
            return 0
        }else if(a.popularity<b.popularity){
            return +1
        }
      }
    }
   let ratedandpopFavourites = ratedMovies.sort(helper);
   return ratedandpopFavourites;
  }

  
  // function removeFromFav(deletemovieId){
  //   let favMovies = JSON.parse(localStorage.getItem("favourites"));
  //   let result = favMovies.filter(
  //     (movieObj)=>{
  //       return movieObj.id !== deletemovieId;
  //     }
  //   );
  //   let prevStArray = localStorage.getItem("favourites")||"[]";
  //   let prevArray = JSON.parse(prevStArray);
  //   prevArray = prevArray.filter((movieObj)=>{
  //     return movieObj.id !== deletemovieId;
  //   })
  //   prevArray = JSON.stringify(prevArray);
  //   localStorage.setItem("favourites",prevArray);

  //   //for genreDeletion
  //   let favListArray = JSON.parse(localStorage.getItem("favourites")||"[]");
  //   let myResultDeleted = favListArray.filter((movieObj)=>{
  //       return movieObj.id === deletemovieId;
  //     });
  //       // delete genre from genreList if not repeated
  //       console.log("delete called");
  //       let status = false;
  //       if(result.length > 0){
  //         if(typeof myResultDeleted[0].genre_ids != "undefined"){
  //         myResultDeleted[0].genre_ids.forEach((genrelistItem)=>{
  //         status = false;
  //         for(let i = 0 ; i < favMovies.length; i++ ){
  //           for(let j = 0 ; j <favMovies[i].genre_ids.length;j++ ){
  //             if(genreids[genrelistItem] === genreids[favMovies[i].genre_ids[j]]){
  //                   status = true;
  //                   break;
  //                 }
  //           }
  //           if(status === true){
  //             break;
  //           }else{//remove from genreList
  //             let favPrevArray = JSON.parse(localStorage.getItem("genreList")||"[]");
  //             let deletedGenreList = favPrevArray.filter((favGenre)=>{
  //               return favGenre !== genreids[genrelistItem];
  //             });
  //             localStorage.setItem("genreList",JSON.stringify(deletedGenreList));
  //           }
  //         }
  //     });
  //   }
  //   }else{
  //       //set genreList empty
  //       localStorage.setItem("genreList",JSON.stringify(["AllGenres"]));
  //     }

  //   // setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
  // }

  
  function removeFromFav(uniqueMovieId){
    // console.log(uniqueMovieId);
    let favMovies = JSON.parse(localStorage.getItem("favourites"));
    let result = favMovies.filter(
      (movieObj)=>{
        return movieObj.id !== uniqueMovieId;
      }
    );
    //for genreDeletion
    let favListArray = JSON.parse(localStorage.getItem("favourites")||"[]");
    let myResultDeleted = favListArray.filter((movieObj)=>{
        return movieObj.id === uniqueMovieId;
      });
    //delete from favorites
     let prevStArray = localStorage.getItem("favourites")||"[]";
     let prevArray = JSON.parse(prevStArray);
     prevArray = prevArray.filter((movieObj)=>{
       return movieObj.id !== uniqueMovieId;
     })
     let prevArray2 = JSON.stringify(prevArray);
     localStorage.setItem("favourites",prevArray2);
      
    // delete genre from genreList if not repeated
    let status = false;
    if(result.length > 0){
      if(typeof myResultDeleted[0].genre_ids != "undefined"){
      myResultDeleted[0].genre_ids.forEach((genrelistItem)=>{
      status = false;
      for(let i = 0 ; i < prevArray.length; i++ ){
        for(let j = 0 ; j <prevArray[i].genre_ids.length;j++ ){
          if(genreids[genrelistItem] === genreids[prevArray[i].genre_ids[j]]){
            console.log("present in list");
                status = true;
                break;
              }
        }
        if(status === true){
          break;
        }else{//remove from genreList
          let favPrevArray = JSON.parse(localStorage.getItem("genreList")||"[]");
          let deletedGenreList = favPrevArray.filter((favGenre)=>{
            return favGenre !== genreids[genrelistItem];
          });
          localStorage.setItem("genreList",JSON.stringify(deletedGenreList));
        }
      }
  });
}
}else{
    //set genreList empty
    localStorage.setItem("genreList",JSON.stringify(["AllGenres"]));
  }
  props.updateMovieList();
  }

  // pagination
  const [num,setNum] = React.useState(5);//noOfEle
  const setVal=(e)=>{
    let newNum = e.target.value;
    setNum(newNum);
  }

  const prevPage=(pgnumber)=>{
    if(pgnumber > 0){
        setglobalPageNumber(globalPageNumber-1);
    }else{
      //underflow
      setglobalPageNumber(globalPageNumber);
    }
    console.log(globalPageNumber);
  }
  const nextPage=(pgnumber)=>{
      //overflow
      if( paginatedResult.length < num){
        setglobalPageNumber(globalPageNumber);
      }else{
        setglobalPageNumber(pgnumber);
      }
    console.log(globalPageNumber);
  }

  const [curr_genre,set_curr_genre] = React.useState(props.buttonPressed);
  useEffect(()=>{
   set_curr_genre(props.buttonPressed);
  },[popularMovies]);
  useEffect(()=>{
    setglobalPageNumber(props.pgNo);
    console.log("Updating pgNo render",props.pgNo);
  },[curr_genre]);

  const [globalPageNumber,setglobalPageNumber]=React.useState(1);

  const setglobalPageNumberHandler = (pgnumber) => {
    if(pgnumber > 0){
      //overflow
      if( paginatedResult.length < num){
        setglobalPageNumber(globalPageNumber);
      }else{
        setglobalPageNumber(pgnumber);
      }
    }else{
      //underflow
      setglobalPageNumber(globalPageNumber);
    }
    console.log(globalPageNumber);
  };

  let starting_index = (globalPageNumber-1)*num;
  let ending_index = starting_index + num;
  // let favMov = JSON.parse(localStorage.getItem("favourites"));
  let paginatedResult = popularMovies.slice(starting_index,ending_index);


  return (
    <div className="mainDiv">
       <div className='searchHere'>
            <input className='searchBoxes' type="text" placeholder="search" onChange={setText} value={value}/>
             <input className='searchBoxes' value={num} type="number" placeholder="5" onChange={setVal} ></input>
        </div>
        <div className="myTableContainer">
        <table className="myTable">
          <thead>
            <tr className="favMovieList">
              <th>Name</th>
              <th>
                <FaChevronUp
                  onClick={() => {
                    setRatingHandler(true);
                  }}
                />
                Rating
                <FaChevronDown
                  onClick={() => {
                    setRatingHandler(false);
                  }}
                />
              </th>
              <th>
                <FaChevronUp
                  onClick={() => {
                    popularityhandler(true);
                  }}
                />
                Popularity
                <FaChevronDown
                  onClick={() => {
                    popularityhandler(false);
                  }}
                />
              </th>
              <th>Genre</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="fav_movie_list">
            {paginatedResult.map((favMov, index) => {
              return (
                <tr key={index}>
                  <td className="nameFav">
                    <img className="imgFav"
                      style={{ height: "100px", width: "100px" }}
                      alt="thisIsFromMOvieList"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + favMov.poster_path
                      }
                    ></img>
                    {favMov.title}
                  </td>
                  <td>{favMov.vote_average}</td>
                  <td>{favMov.popularity}</td>
                  <td>[{favMov.genre_ids.map(gen=>{return (genreids[gen]+", ")})}]</td>
                  <td>
                    <button className="btn-delete" onClick={()=>{removeFromFav(favMov.id)}}>remove</button>
                    <button className="btn-delete_smallScreen" onClick={()=>{removeFromFav(favMov.id)}}>X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="footer_spacing"></div>
      </div>
      <Pagination
      globalPageNumber={globalPageNumber}
      prevPage={prevPage}
      nextPage={nextPage}
      setglobalPageNumberHandler={setglobalPageNumberHandler}
      />
    </div>
  );
}

export default TableForData;

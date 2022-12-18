import React from "react";
import Header from "../Header";
import GenreBox from "../GenreBox";
import "../Favorite.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Favorite() {

  const [favourites,setFavourites] = React.useState([]); 

  React.useEffect(()=>{
    console.log("rendered only one time");
    setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
  },[]);



  React.useEffect(()=>{
    setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
  },[removeFromFav]);



 

const [genres,setGenres] = React.useState([]);
// eslint-disable-next-line react-hooks/exhaustive-deps
let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
  80:'Crime',99:'Documentary',18:'Drama',
  14:'Fantasy',36:'History',27:'Horror',10402:'Music',
  9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
  53:'Thriller',10752:'War',37:'Western',10751:'Family'};

React.useEffect(()=>{

    let temp = favourites.map((movie)=>genreids[movie.genre_ids[0]]);
    // console.log(temp);
    //unique val hold
    temp = new Set(temp);
    setGenres(["AllGenres",...temp]);//setting favorite genres movies
    // console.log("setgenre",genres);
},[favourites, genreids]);

  const [value, setValue] = React.useState("");//for searchtext
  const [num,setNum] = React.useState(5);
  const setVal=(e)=>{
    let newNum = e.target.value;
    setNum(newNum);
  }
  const setText = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  let [ratingOrder, setRatingOrder] = React.useState(null);
  let [popularityOrder, setpopularityOrder] = React.useState(null);
//   let [status,setStatus]=React.useState(true);//rating is set 

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

  let searchedMovies = value===""?favourites: FilterLogic(value, favourites);
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

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function removeFromFav(deletemovieId){
    let prevStArray = localStorage.getItem("favourites")||"[]";
    let prevArray = JSON.parse(prevStArray);
    prevArray = prevArray.filter((movieObj)=>{
      return movieObj.id !== deletemovieId;
    })
    prevArray = JSON.stringify(prevArray);
    localStorage.setItem("favourites",prevArray);
    setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"));
    // popularMovies.map((myMovie)=>{
    //    return myMovie.id !== deletemovieId;
    // })
  }


  return (
    <div >
      <div>
        <Header></Header>
        <GenreBox setVal={setVal} num={num} genres={genres} setText={setText} value={value}></GenreBox>
      </div>
      <div >
        <table>
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
            {popularMovies.map((favMov, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
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
                  <td>{genreids[favMov.genre_ids[0]]}</td>
                  <td>
                    <button className="btn-delete" onClick={()=>{removeFromFav(favMov.id)}}>remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favorite;

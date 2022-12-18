
import React from "react";
import "./MovieList.css";
import { FcCheckmark, FcPlus } from "react-icons/fc";

function MovieList(props) {

  let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
  80:'Crime',99:'Documentary',18:'Drama',
  14:'Fantasy',36:'History',27:'Horror',10402:'Music',
  9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
  53:'Thriller',10752:'War',37:'Western',10751:'Family'};

  // let [genreList,setGenreList]=React.useState([]);

  // https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6
  const [Movies, setMovies] = React.useState([]);
  const [value, setValue] = React.useState("");
  const setText = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  React.useEffect(() => {
    async function fetchData() {
      //fetching data from api
      let response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=87331ed314eef6f9cf715c3a5637e9f6&page="+props.globalPageNumber
      );
      //response you will get in buffer => convert it into json form
      let data = await response.json();
      // console.log("data",data);
      let movies = data.results;
      // console.log("movies",movies);
      setMovies(movies);
      // console.log("getMovies",Movies);
    }
    fetchData();
  }, [props.globalPageNumber]);

  //favorite part

   const [favMovies,setFavMovies] = React.useState([]);

  function presentInFav(uniqueMovieId){
    let fav = JSON.parse(localStorage.getItem("favourites")||"[]");
    // console.log("fav leng",fav.length);
     for(let i = 0 ; i < fav.length; i++ ){
      if(fav[i].id === uniqueMovieId){
        console.log(fav[i].id,uniqueMovieId);
         return true;
      }
     }
     return false;
  }

  function addToFav(uniqueMovieId){
    //if movie already included in fav then don't add
        // if(!status){ 
    for(let i = 0 ; i < Movies.length; i++ ){
      console.log("presentInFav(uniqueMovieId)",presentInFav(uniqueMovieId));
      if(Movies[i].id === uniqueMovieId && !presentInFav(uniqueMovieId)){
         setFavMovies([...favMovies,Movies[i]]);
        //add all different genres to localStorage
        let myList = JSON.parse(localStorage.getItem("genreList") || "[]");
        // if(myList.length == 0){
        //   myList.push("AllGenres");
        // }
        if( typeof Movies[i].genre_ids != "undefined"){
        Movies[i].genre_ids.forEach((genrelist)=>{
          // console.log(genreids[genrelist]);
           if(!myList.includes(genreids[genrelist])){
            myList.push(genreids[genrelist]);
             localStorage.setItem("genreList",JSON.stringify(myList));
           }
        });}
         //add to local storage
         let prevStArray = localStorage.getItem("favourites") || "[]";
         let prevArray = JSON.parse(prevStArray);
         prevArray.push(Movies[i]);
         prevArray= JSON.stringify(prevArray);
        localStorage.setItem("favourites",prevArray);
         break;
      }
     }
    //  }    
  }

  function removeFromFav(uniqueMovieId){
    // console.log(uniqueMovieId);
    let result = favMovies.filter(
      (movieObj)=>{
        return movieObj.id !== uniqueMovieId;
      }
    );
    // console.log("result",result);
    setFavMovies(result);
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
     prevArray = JSON.stringify(prevArray);
     localStorage.setItem("favourites",prevArray);
      
    // delete genre from genreList if not repeated
    let status = false;
    if(result.length > 0){
      if(typeof myResultDeleted[0].genre_ids != "undefined"){
      myResultDeleted[0].genre_ids.forEach((genrelistItem)=>{
      status = false;
      for(let i = 0 ; i < favMovies.length; i++ ){
        for(let j = 0 ; j <favMovies[i].genre_ids.length;j++ ){
          if(genreids[genrelistItem] === genreids[favMovies[i].genre_ids[j]]){
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
  }

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

  let searchedMovies = FilterLogic(value, Movies);

  return (
    <div className="contentBox">
      <h2 className="titleTrending">Trending Movies</h2>
      <div className="searchMe">
        <input placeholder="Search Here" className="searchBox" onChange={setText} style={{ marginLeft: "23px" }} />
      </div>
      {Movies === "" ? (
        <h2>Movies are yet to come</h2>
      ) : (
        <div className="trending-box">
          {searchedMovies.map((movieObj, index) => {
            return (
              <div key={index} className="list-box">
                <div className="addToFavContainer">
                  <h2 className="movieName">{movieObj.title}</h2>
                  {presentInFav(movieObj.id)?
                    <FcCheckmark className="FcCheckmark" onClick={function(){removeFromFav(movieObj.id)}} ></FcCheckmark>:
                    <FcPlus className="FcPlus"  onClick={function(){addToFav(movieObj.id)}}  ></FcPlus>}
                </div>  
                  <img
                  className="list-img"
                  key={index}
                  alt="thisIsFromMOvieList"
                  src={
                    "https://image.tmdb.org/t/p/w500/" + movieObj.poster_path
                  }
                  ></img>   
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieList;

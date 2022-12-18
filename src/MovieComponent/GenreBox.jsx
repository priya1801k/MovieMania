/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */

// import React from 'react';
// import './GenreBox.css';

// const GenreBox=(props)=>{
//     // const moviesData = JSON.parse(localStorage.getItem("favorites"));
//     // return (<div>
//     //     <h4>GenreBox</h4>
//     //     <div className='genreTitle'>
//     //     {props.genres.map((genre,index)=>{
//     //       return (<h4 key={index}>{genre}</h4>) 
//     //     })}
//     //     </div>
//     //     <div>
//     //         <input type="text" placeholder="search" onChange={props.setText} value={props.value}/>
//     //         <input value={props.num} type="number" placeholder="5" onChange={props.setVal} ></input>
//     //     </div>
//     // </div>)

    
// // return(<div className='genreHead'>
// //          <div className='genreTitle'>
// //          {props.genres.map((genre,index)=>{
// //         //   return (<h4 key={index}>{genre}</h4>) 
// //         return (<NavLink key={index} to={`/favorite/${genre}`} >{genre}</NavLink>)
// //         })}
// //         </div>
// //         <div className='searchHere'>
// //             <input className='searchBoxes' type="text" placeholder="search" onChange={props.setText} value={props.value}/>
// //             <input className='searchBoxes' value={props.num} type="number" placeholder="5" onChange={props.setVal} ></input>
// //         </div>
// //     </div>)

// // const tabs = ["All Genres", "Thriller", "Action", "Adventure", "Emotional", "Motivation"];

// return (<div>
//   GenreBox
// </div>)
// }

// export default GenreBox;

// // import React from 'react'


// function AllGenreBox() {
//   return (
//     <div>
//         <div className='genreTitle'>
//         {props.genres.map((genre,index)=>{
//             <Switch>
//                 return (<Route to="/home/allgenres" from="/home"><h4 key={index}>{genre}</h4></Route>)
//             </Switch>
//         })}
//         </div>
//     </div>
//   )
// }

// export default AllGenreBox;



// // import React from 'react';
// import Favorite from './Favorite';
// import Home from './Home';
// import PageNotFound from './PageNotFound';
// import { Redirect, Route,Switch } from 'react-router-dom';
// function Movie() {

  
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/Favorite" component={Favorite} />
//         <Redirect exact from='/' to='/home'></Redirect>
//         <Route component={PageNotFound}  />
//       </Switch>
//     </div>
//   );
// }


// export default Movie;

// import TableForData from './TableForData'

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import './GenreBox.css';
import TableForData from './TableForData';

function GenreBox(props) {

  const [buttonPressed,setButtonPressed] = useState("");
  const [genreListData,setGenreListData]=useState([]);
  const [favMovList,setFavMovList] = useState([]);
  const [tableData,setTableData] = useState([]);
  const [pgNo,setpgNo] = React.useState(1);

useEffect(()=>{
  setButtonPressed(props.btnPress);
  let favMov = JSON.parse(localStorage.getItem("favourites" || "[]"));//task one
  setFavMovList(favMov);
  let genreList = JSON.parse(localStorage.getItem("genreList"||"[]"));
    setGenreListData(genreList);
    updateMovieList("AllGenres");
},[])

useEffect(()=>{
    let genreList = JSON.parse(localStorage.getItem("genreList"||"[]"));//task one side two
    setGenreListData(genreList);
    let favMov = JSON.parse(localStorage.getItem("favourites" || "[]"));
    setFavMovList(favMov);
    updateMovieList(buttonPressed);
},[buttonPressed,removeFromFav]);

const setButtonPressedHandler=(genre)=>{//task one side one
    // console.log(genre);
    setButtonPressed(genre);
    setpgNo(1);
  }

  const updateMovieList = (myBtn) => {//task two
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
    80:'Crime',99:'Documentary',18:'Drama',
    14:'Fantasy',36:'History',27:'Horror',10402:'Music',
    9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
    53:'Thriller',10752:'War',37:'Western',10751:'Family'};
    const data = [];

    if(myBtn === "AllGenres"){
      // console.log("in AllGenre");
       favMovList && favMovList.forEach(movieObj => {
        data.push(movieObj);
      });
      localStorage.setItem("displayFilterList",JSON.stringify(data));
      setTableData(data);
    } else { 
        favMovList.forEach(movieObj => {
        let myGen = movieObj.genre_ids.map(id=>{ return genreids[id]});
        if (myGen.includes(myBtn)) {
        data.push(movieObj);
        }
      })
      localStorage.setItem("displayFilterList",JSON.stringify(data));
      setTableData(data);
    }
    // console.log("data",data);
    // console.log("tableData",tableData);
  }


  function removeFromFav(uniqueMovieId){
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
    80:'Crime',99:'Documentary',18:'Drama',
    14:'Fantasy',36:'History',27:'Horror',10402:'Music',
    9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
    53:'Thriller',10752:'War',37:'Western',10751:'Family'};
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
    localStorage.setItem("genreList",JSON.stringify([]));
  }
  updateMovieList(buttonPressed);
  }

  return (
    <div>
      <div className='genreBoxList'>
      <button className='myBtn' onClick={()=>setButtonPressedHandler("AllGenres")}>AllGenres</button>
        {genreListData && genreListData.map((genre,index)=>{
          return (<button className='myBtn' key={index} onClick={()=>setButtonPressedHandler(genre)}>{genre}</button>)
        })}
      </div>
      <TableForData
      buttonPressed={buttonPressed}
      pgNo={pgNo}
      removeFromFav={removeFromFav}
      updateMovieList={updateMovieList}
      tableData={tableData}
      />
    </div>
  )
}

export default GenreBox

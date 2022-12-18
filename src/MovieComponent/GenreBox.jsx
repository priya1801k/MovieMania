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

function GenreBox() {

  let [genreListData,setGenreListData]=useState([]);
const [favMovList,setFavMovList] = useState([]);
  useEffect(()=>{
    let genreList = JSON.parse(localStorage.getItem("genreList"||"[]"));
    setGenreListData(genreList);
    let favMov = JSON.parse(localStorage.getItem("favourites" || "[]"));
setFavMovList(favMov);
  },[])

  let [buttonPressed,setButtonPressed] = useState("AllGenres");
  let [tableData,setTableData] = useState([]);
  // localStorage.setItem("displayFilterList",JSON.stringify([]));

  useEffect(()=>{
    updateMovieList();
  },[buttonPressed]);

  const [pgNo,setpgNo] = React.useState(1);

  const setButtonPressedHandler=(genre)=>{
    setButtonPressed(genre);
    setpgNo(1);
  }
  const updateMovieList = () => {
    // console.log(genre);
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',
    80:'Crime',99:'Documentary',18:'Drama',
    14:'Fantasy',36:'History',27:'Horror',10402:'Music',
    9648:'Mystery',10749:'Romance',878:'SciFi',10770:'TV',
    53:'Thriller',10752:'War',37:'Western',10751:'Family'};
    const data = [];

    // console.log("favMov",favMov);

    if(buttonPressed === "AllGenres"){
      console.log("in AllGenre");
      favMovList.forEach(movieObj => {
        data.push(movieObj);
      });
      localStorage.setItem("displayFilterList",JSON.stringify(data));
      setTableData(data);
    } else { 
        // let allAction = favMov.filter((fav,index)=>{
        //     // return genreids[fav.genre_ids[0]]==="Action";
        //     let myGen = ;
        //     if (movieObj.genre_ids.map(id=>{ return genreids[id]}).includes(buttonPressed)) {
        //     return movieObj;
        // });

        favMovList.forEach(movieObj => {
        let myGen = movieObj.genre_ids.map(id=>{ return genreids[id]});
        if (myGen.includes(buttonPressed)) {
        data.push(movieObj);
        }
      })
      localStorage.setItem("displayFilterList",JSON.stringify(data));
      setTableData(data);
    }
    // setTableData(data);
    console.log("data",data);
    console.log("tableData",tableData);
  }

  return (
    <div>
      <div className='genreBoxList'>
        {genreListData.map((genre,index)=>{
          return (<button className='myBtn' key={index} onClick={()=>setButtonPressedHandler(genre)}>{genre}</button>)
        })}
      </div>
      <TableForData
      buttonPressed={buttonPressed}
      pgNo={pgNo}
      updateMovieList={updateMovieList}
      />
    </div>
  )
}

export default GenreBox

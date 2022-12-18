/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MovieList from './MovieList';
import './Header.css';
// import { results } from '../movie'; //got json data from movie file 
import Banner from './Banner';
import PaginationForMovie from './PaginationForMovie';
import Header from './Header';
import './Home.css';

function Home() {

  const [globalPageNumber,setglobalPageNumber]=React.useState(1);

  const setglobalPageNumberHandler = (pgnumber) => {
    
    if(pgnumber > 0){
       setglobalPageNumber(pgnumber);
    }else{
      setglobalPageNumber(globalPageNumber);
    }
    console.log(globalPageNumber);
  };

  return (
    <div className='myBox'>
      <Header></Header>
      <Banner></Banner>
      <MovieList globalPageNumber={globalPageNumber}></MovieList>
      <PaginationForMovie
        globalPageNumber={globalPageNumber}
        setglobalPageNumberHandler={setglobalPageNumberHandler}
      ></PaginationForMovie>
    </div>
  );
}

export default Home;


//setup
//header
// function Header(){
    
// }

// function useEffectExplaination(){
//     const [firstMovie,setMovie] = useState("");
 
//     useEffect(function(){
//         setTimeout(function(){
//             let firstMovie = results[0];
//             setMovie(firstMovie);
//         },4000)
//     },[])

    
//     return(<>
//         {firstMovie == "" ? <h2>Loading..........</h2>:
//         <div>
//         {/* <h2>{JSON.stringify(firstmovie)}</h2> */}
//         <h2>{firstMovie.title}</h2>
//         <h2>{firstMovie.overview}</h2>
//         <img className='poster-img' alt='thisIsWagandaForeverMyDear' src={'https://image.tmdb.org/t/p/original/' + '/8sMmAmN2x7mBiNKEX2o0aOTozEB.jpg'} ></img>
//         </div>
//         }
//         </>
//         )
// }

//Banner 


//MovieList


//pagination
// function Pagination(){
//     
//     )
// }
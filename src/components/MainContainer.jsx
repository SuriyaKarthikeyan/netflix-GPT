import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

import {useSelector} from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.moviesList);
    if(!movies) return;

    const mainMovie = movies.Search[0];
    
    //const moviesToShow = movies.filter((item)=> item.genres.includes("Comedy") && !item.genres.includes("Thriller") && !item.genres.includes("Crime") && !item.genres.includes("Horror") );
    
    //const mainMovie = moviesToShow[10];
    //console.log(mainMovie);
    
    //get the videoId from the trailer attribute
   // const url = mainMovie.trailer;
   // const videoId = new URL(url).searchParams.get("v");
    const videoId = "lirBhHXvDSg";
    const {Title} = mainMovie;
    return (
        <div>
           <VideoBackground videoId={videoId}/>
           <VideoTitle originalTitle={Title}  />
        </div>
    )};

    export default MainContainer;
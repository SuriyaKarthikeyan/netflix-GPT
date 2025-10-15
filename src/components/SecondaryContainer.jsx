import MovieList from "./MovieList.jsx";
import {useSelector} from "react-redux";
const SecondaryContainer = () => {

    const newOnNetflix = useSelector((store)=> store.movies );
    console.log(newOnNetflix?.animatedMovies?.Search);
    
    const newMovie = newOnNetflix?.moviesList?.Search;
    const animatedMovies = newOnNetflix?.animatedMovies?.Search;
    return (
        <div className="-mt-52 z-[999] relative">
           <MovieList title={"New on Netflix"} newOnNetflix={newMovie} />
           <MovieList title={"HarryPotter Movies"} newOnNetflix={animatedMovies} />
           <MovieList title={"Trending"} newOnNetflix={newMovie} />
           <MovieList title={"Now Playing"} newOnNetflix={newMovie} />
           <MovieList title={"Crowd Pleasers"} newOnNetflix={newMovie} />
        </div>
    )};

    export default SecondaryContainer;
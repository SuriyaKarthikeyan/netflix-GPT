import MovieCard from "./MovieCard.jsx";

const MovieList = ({title, newOnNetflix}) => {
   // const poster = newOnNetflix?.Poster;
    return (
        <div>
            <p className="px-13 font-bold py-2 text-white"> {title} </p>
            <div className="flex px-13 space-x-2">
            {
            newOnNetflix?.map((newItem) => <MovieCard poster={newItem.Poster} />)
            }
            </div>
            
        </div>
    )};

    export default MovieList;
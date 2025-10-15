import Header from './Header.jsx';
import useMoviesList from "../hooks/useMoviesList";
import useAnimatedMovies from "../hooks/useAnimatedMovies";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
const Browse = () =>
{

    useMoviesList();
    useAnimatedMovies();

    return (
        <div className="bg-black">
        
            <Header context="browse" />
            <MainContainer />
            <SecondaryContainer />
          
        </div>
    )
}

export default Browse;
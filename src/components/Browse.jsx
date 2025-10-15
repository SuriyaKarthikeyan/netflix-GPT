import Header from './Header.jsx';
import useMoviesList from "../hooks/useMoviesList";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
const Browse = () =>
{

    useMoviesList();
    return (
        <div>
        
            <Header context="browse" />
            <MainContainer />
            <SecondaryContainer />
          
        </div>
    )
}

export default Browse;
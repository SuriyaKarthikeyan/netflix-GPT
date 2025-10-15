const VideoTitle = ({originalTitle}) => {
    return (
        <div className="relative w-screen aspect-video pt-60 text-white bg-gradient-to-b from-black"> 
            <p className="px-13  font-bold text-4xl"> {originalTitle} </p>
       

            <div>
                <button className="ml-13 bg-white text-black font-bold rounded px-10 py-2 mr-2 my-4 cursor-pointer"> Play</button>
                <button className="bg-gray-500 text-white font-bold rounded px-10 py-2 opacity-50 cursor-pointer"> More Info </button>
            </div>
        </div>
    )};

    export default VideoTitle;


    
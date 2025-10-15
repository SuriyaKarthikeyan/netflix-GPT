const VideoBackground = ({videoId}) => {
    return (
        <> 
            <iframe className="absolute w-screen aspect-video bg-gradient-to-b from-black" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} title="Batman Begins - Trailer Flashback - Warner Bros. UK &amp; Ireland" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
    )};

    export default VideoBackground;
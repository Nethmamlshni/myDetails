
  const BackgroundVideo = () => {
    return (
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/92680-637275034_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };
  
  export default BackgroundVideo;
  
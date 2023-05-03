

const Banner = () => {
    return (
        <div className='carousel'>
            <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("./../../../public/food1.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl font-semibold font-serif">Welcome to Best Vegans Food</h1>
                <p className="mb-5 text-5xl font-semibold ">The best way to celebrate the some delicious food.</p>
                <button className="btn btn-primary">View Special Foods</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("./../../../public/food2.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl font-semibold font-serif">Welcome to Best Vegans Food</h1>
                <p className="mb-5 text-5xl font-semibold">Restaurant Fresh Dishes For Home Desh lover</p>
                <button className="btn btn-primary">View Special Foods</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("./../../../public/food3.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl font-semibold font-serif">Welcome to Best Vegans Food</h1>
                <p className="mb-5 text-5xl font-semibold">Good food is to be enjoyed food very beautiful in itse</p>
                <button className="btn btn-primary">View Special Foods</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          </div>
        </div>
    );
};

export default Banner;
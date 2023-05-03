

const Banner = () => {
    return (
        <div className='carousel'>
            <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg?w=740&t=st=1683129464~exp=1683130064~hmac=522f10017685f6f1b17182d892e06f92aed55d9671adcd9049e0523c9546e16b")` }}>
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
            <div className="hero min-h-screen" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1683129135~exp=1683129735~hmac=7f32b1b4fdbaca681327834d6fe78c2e5822c15d7d1953dc73cf00f77b394bf0')`}}>
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
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/farfalle-pasta-durum-wheat-with-baked-meatballs-chicken-fillet-tomato-sauce-salad-bowl_2829-11169.jpg?w=740&t=st=1683129493~exp=1683130093~hmac=0cb1126cfab5aed194ee40fc8afc7899503cc9b37d2577fd62c94eacfa1903a0")` }}>
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
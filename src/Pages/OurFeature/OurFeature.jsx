import { TruckIcon, WalletIcon, ChartPieIcon } from '@heroicons/react/24/solid'

const OurFeature = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-200 py-5">
            <h2 className="text-3xl text-center font-bold pt-4 mb-4">Out Feature</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 pb-4 justify-items-center">
                <div className=''>
                <div className="card card-compact w-96 bg-white hover:bg-purple-300 shadow-xl border border-1 border-purple-300">
                  <TruckIcon className='mt-4 h-10 w-10  mx-auto text-purple-800'></TruckIcon>
                  <div className="card-body text-center">
                    <h2 className="text-2xl text-center">Free & Fast Delivery</h2>
                    <p>We offer free delivery options on all of our items,  Wales and areas of Scotland.</p>
                  </div>
                </div>
                </div>
                <div>
                <div className="card card-compact w-96 bg-white hover:bg-purple-300 shadow-xl border border-1 border-purple-300">
                  <WalletIcon className='mt-4 h-10 w-10  mx-auto text-purple-800'></WalletIcon>
                  <div className="card-body text-center">
                    <h2 className="text-2xl text-center">Book A Table Online</h2>
                    <p>Make online reservations, read restaurant reviews from diners, and earn points towards free meals.</p>
                  </div>
                </div>
                </div>
                <div>
                <div className="card card-compact w-96 bg-white hover:bg-purple-300 shadow-xl border border-1 border-purple-300">
                  <ChartPieIcon className='mt-4 h-10 w-10  mx-auto text-purple-800'></ChartPieIcon>
                  <div className="card-body text-center">
                    <h2 className="text-2xl text-center">Healthy And Tasty Food</h2>
                    <p>We know health looks different to different people, so we’ve included  vegan, pescatarian, or gluten-free.</p>
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeature;
import React from 'react';
import './Home.css'

import { Link } from 'react-router-dom';

const services = [
	{
		name: 'Bike',
		image: '/images/Frame-1.png',
		url: '/rider/bike'
	},
	{
		name: 'Bus',
		image: '/images/Frame-2.png',
		url: '/rider/bus'
	},
	{
		name: 'Car',
		image: '/images/Frame.png',
		url: '/rider/car'
	},
	{
		name: 'Train',
		image: '/images/Group.png',
		url: '/rider/train'
	}
];


const Home = () => {
    const handleBook =() =>{

    }
    return (
        <div
        style={{
            backgroundImage: "url('/images/Bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '90vh'
        }}
    >
        <div className="container py-5">
            <div className="row">
                {services.map((service) => {
                    return (
                        <div class="col-md-3 mb-4">
                            <Link to={service.url}>
                                <div class="card p-3">
                                    <img
                                        style={{ width: 'auto', height: '100px' }}
                                        onClick={handleBook}
                                        class="card-img-top mx-auto"
                                        src={service.image}
                                        alt=""
                                    />
                                    <div class="text-center py-4 px-2">
                                        <h5 class="card-title mb-0"> {service.name} </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

export default Home;
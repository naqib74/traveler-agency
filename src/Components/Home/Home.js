import React from 'react';
import './Home.css'
import frame from '../../Components/images/Frame.png';
import frame1 from '../../Components/images/Frame-1.png';
import frame2 from '../../Components/images/Frame-2.png';
import group from '../../Components/images/Group.png';



const Home = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card className='card-img'">
                        <img  src={frame} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bike</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img className='card-img' src={frame1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Car</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img className='card-img' src={frame2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bus</h5>
                        </div>

                    </div>


                </div>
                <div class="col">
                    <div class="card">
                        <img className='card-img' src={group} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Train</h5>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default Home;
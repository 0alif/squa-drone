import React from 'react';
import pic1 from '../../../images/drone-white.png';
import pic2 from '../../../images/drone-black.png';
import './Drone.css';

const Drone = () => {
    return (
        <div>
            <div className="row m-0 py-5">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={pic1} alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="drone">
                        <h1>We Are Drone Pilots</h1>
                        <p className="drone-text">The most innovate feature is probably its advanced controls. Using simple hand gestures, you can take off, tell the drone to follow you and fly hi-quality drones.</p>
                        <h5>FASTER THAN EVER</h5>
                        <p className="drone-text">Our drone services provide you with a skilled UAV pilot that will provide aerial drone videography.</p>
                    </div>
                </div>
            </div>
            <div className="row m-0 pb-5">
                <div className="col-sm-12 col-md-6">
                    <div className="drone">
                        <h1>We Use The Best Drones & HD Cameras</h1>
                        <p className="drone-text">New intelligent flight mode where drone flies along</p>
                        <p className="drone-text">Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
                        <h5>PHOTOGRAPHY</h5>
                        <p className="drone-text">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={pic2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Drone;
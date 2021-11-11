import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navigation from '../../Sheared/Navigation/Navigation';

const Dashboard = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <h2>This is dashboard</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
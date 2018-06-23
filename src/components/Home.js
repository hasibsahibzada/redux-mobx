import React from 'react';
import { homeStyles } from '../styles/index';
import Map from './Map';

const Home = () => {
    return (
        <div style={homeStyles}>
            <div >
                side bar
            </div>
            <div>
                <Map/>
            </div>
        </div>
    )
};

export default Home;

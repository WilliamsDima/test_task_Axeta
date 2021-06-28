import React from 'react';
import './content.scss';
import Portfolio from './Portfolio/Portfolio';
import ExperienceContainer from './Experience/ExperienceContainer';
import SampleCode from './SampleCode/SampleCode';
import Availability from './Availability/Availability';
import Reviews from './Reviews/Reviews';
import UserMap from './UserMap/UserMap';

const Content = (props) => {

    
    return (
        <div className='content'>
           <Portfolio />
           <ExperienceContainer />
           <SampleCode />
           <Availability />
           <Reviews />
           <UserMap />
        </div>
    );
}

export default Content;
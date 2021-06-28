import React from 'react';
import './reviews.scss';
import right from '../../../assets/images/Content/left.svg';
import left from '../../../assets/images/Content/right.svg';

const Reviews = (props) => {

    
    return (
        <div className='reviews'>

           <div className='reviews_item'>
                <h1>The Most Amaizing...</h1>
                <p><img src={left} className='left'/>The only true wisdom is in knowing you know nothing... <img src={right} className='right'/></p>
           </div>

           <div className='reviews_item'>
                <h1>In clients I look for...</h1>
                <p><img src={left} className='left'/>There is only one good, knowledge, and one evil, ignorance.<img src={right} className='right'/></p>
           </div>

        </div>
    );
}

export default Reviews;
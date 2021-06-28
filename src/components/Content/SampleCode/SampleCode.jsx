import React from 'react';
import './sampleCode.scss';
import code from '../../../assets/images/Content/cod.svg'
import number from '../../../assets/images/Content/number.svg'

const SampleCode = (props) => {

    
    return (
        <div className='sample-code'>
            <h1>Sample code</h1>


            <div className='code'>
                <img src={number}/>
                <img src={code}/>
            </div>
           
        </div>
    );
}

export default SampleCode;
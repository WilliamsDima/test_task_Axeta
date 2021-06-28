import React, { useState } from 'react';
import './experience.scss';

const Experience = (props) => {


    let [ageMode, setAgeMode] = useState(false);
    let [age, setAge] = useState(props.expretionce[0].expretionce);

    let onChangeAge = (e, i) => {
        let numb = e.currentTarget.value
        props.newAgeNumber(numb, i)
    }

    let setNewAge = () => {
        setAgeMode(false)
        setAge(props.expretionce[0].expretionce) 
    }
   
    let exp = props.expretionce[0].expretionce.map( (el, i) => {
       return <li key={i}>
            <p>{el.skill}</p>
            {ageMode ? <input type="number" onBlur={setNewAge} onChange={(e) => onChangeAge(e, i)} /> : <p className='skills-item' onClick={() => setAgeMode(true)}>{age[i].exp + ' years'}</p>}
        </li>
    })
    
    return (
        <div className='experience'>
            <h1>Experience</h1>
            <ul>
                {exp}
            </ul>
        </div>
    );
}

export default Experience;
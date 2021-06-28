import React from 'react';
import { useState } from 'react';
import './profile.scss';

const ProfileInfo = (props) => {

    let nameUser = React.createRef();
    let locationUser = React.createRef();
    let addSkillsUser = React.createRef();

    let [editMode, setEditMode] = useState(false);
    let [editModeLocation, setEditModeLocation] = useState(false);
    let [editModeSkill, setEditModeSkill] = useState(false);

    let [name, setName] = useState(props.userProfile[0].name);
    let [location, setLocation] = useState(props.userProfile[0].location);
    let [skill, setSkill] = useState('');

    let [errorName, setErrorNme] = useState(false);
    let [errorLocation, setErrorLocation] = useState(false);
    let [errorSkill, setErrorSkill] = useState(false);

    let [expretionce, deleteExpretionce] = useState(props.expretionce);

    const sb = ['~', '`', '!', '@', '#', '№', '$', ';', ':', '\'', '\"', ',', '.', '!', '/', '\\', '|', '+', '-', '{', '}', '(', ')', '[', ']', '_', '<', '>', '%', '^', '&', '?', '*', '=']
    
    let newTextName = () => {
        let text = nameUser.current.value;
        let error = validator(text);
        if(error) setErrorNme(false)
        else setErrorNme(true)
        setName(text);
    }

    let setTextName = () => {
        let text = nameUser.current.value;
        let error = validator(text);
        if(error) setEditMode(false)
        else return false
    }

    let newTextLocation = () => {
        let text = locationUser.current.value;
        let error = validator(text);
        if(error) setErrorLocation(false)
        else setErrorLocation(true)
        setLocation(text);
    }

    let setTextLocation = () => {
        let text = locationUser.current.value;
        let error = validator(text);
        if(error) setEditModeLocation(false)
        else return false
    }

    
    let newTextSkills = () => {
        let text = addSkillsUser.current.value;
        let error = validator(text);
        if(error) setErrorSkill(false)    
        else setErrorSkill(true)
        setSkill(text);
    }

    let setSkills = () => {
        let text = addSkillsUser.current.value;
        let error = validator(text);
        if(error) {
            setEditModeSkill(false) 
            deleteExpretionce(props.expretionce)  
            props.addNewSkill(text)
        }
        else {
            setEditModeSkill(false) 
            return false 
        }

    }

    let validator = (text) => {
        for(let i = 0; i < text.length; i++) {

            for(let j = 0; j < sb.length; j++) {
                if(text[i] === sb[j]) {
                    return false
                }
            }
        }

        if(text === "") {
            return false
        }
        return true

    }

    let deleteSkill = (i) => {
        expretionce.splice(i, 1)
        deleteExpretionce([...expretionce])
        props.deleteSkill(i)
    }

    
    let skills = expretionce.map( (el, i) => {
        return  <span className='profile_info_expretionce_item' key={i}>{expretionce[i].skill}<span className='delete-item' onClick={() => deleteSkill(i)}>&#10006;</span></span>
    })

    let profile = props.userProfile.map( el => {
        return (
            <div className='profile_info' key={el.id}>

                <div className='profile_info_name'>
                    {editMode ? <input type="text" 
                        onBlur={setTextName}
                        onChange={newTextName} ref={nameUser}
                        value={name} autoFocus />
                    : <p onClick={() => setEditMode(true)}>{name || 'your name'}</p>}
                    {editMode ? errorName ? <span className='error'>&#10006;</span>:<span className='error on'>&#10004;</span> : null}
                    {errorName ? <p className='error-text'>Invalid character</p> : null}
                </div>

                <div className='profile_info_location'>
                    {editModeLocation ? <input type="text" 
                            onBlur={setTextLocation}
                            onChange={newTextLocation} ref={locationUser}
                            value={location} autoFocus/> 
                        : <p onClick={() => setEditModeLocation(true)}>{location || "your location" }</p>}
                    {editModeLocation ? errorLocation ? <span className='error'>&#10006;</span>:<span className='error on'>&#10004;</span> : null}
                    {errorLocation ? <p className='error-text'>Invalid character</p> : null}
                </div>

                <div className='profile_info_language'>
                    <img src={el.language.img}/>
                    <p>{el.language.text}</p>
                </div>

                <div className='profile_info_expretionce'>
                    {skills}
                    {expretionce.length === 0 ? <p className='empti-exp'>Добавить навык: </p> : null}
                    {editModeSkill ? <input type="text" 
                            onBlur={setSkills}
                            onChange={newTextSkills} ref={addSkillsUser}
                            value={skill} 
                            autoFocus/> 
                        : <button className='profile_info_expretionce_add' onClick={() => setEditModeSkill(true)}>&#10010;</button>}
                    {editModeSkill ? errorSkill ? <span className='error'>&#10006;</span>:<span className='error on'>&#10004;</span> : null}
                    {errorSkill ? <p className='error-text'>Invalid character</p> : null}
                </div>

            </div>
        )
    })

    return (
        <>
            {profile}
        </>
    );
}

export default ProfileInfo;
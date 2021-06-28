import React, { useState } from 'react';
import './profile.scss';
import userImg from '../../../assets/images/Profile/User.jpg';
import editImg from '../../../assets/images/Profile/edit-img.svg';
import ProfileIfoContainer from './ProfileInfoContainer';

const Profile = (props) => {

    let [avatarImg, setAvatarImg] = useState(userImg)

    let imgAvatar = (e) => {
        let a = e.currentTarget.files[0]
        let reader = new FileReader();
        reader.onload = (e) => {
            setAvatarImg(e.target.result) 
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    
    return (
        <div className='profile'>

           <div className='profile_avatar'>
                <label for='ava' className='user-edit-avatar'><img src={editImg}/></label>
                <input type="file" id='ava' onChange={imgAvatar} className='select-photo'/>
                <img src={avatarImg} className='user-avatar'/>
           </div>

           <ProfileIfoContainer />

        </div>
    );
}

export default Profile;
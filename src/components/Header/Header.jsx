import React from 'react';
import './header.scss';
import ProfileContainer from './Profile/ProfileContainer';
import print from '../../assets/images/print.svg';

const Header = (props) => {
    
    let createPdf = () => {
        let divContents = document.getElementById('root');
        window.html2pdf().from(divContents).save();
    }

    return (
        <div className='header'>
           <ProfileContainer />
           <button className='header_print' onClick={createPdf}>
                <img src={print} />
                <p>Print this page</p>
           </button>
        </div>
    );
}

export default Header;
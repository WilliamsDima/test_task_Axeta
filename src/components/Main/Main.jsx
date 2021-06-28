import React from 'react';
import './main.scss';
import HeaderContainer from '../Header/HeaderContainer';
import ContentContainer from '../Content/ContentContainer';


const Main = (props) => {

    return (
        <div className='main'>
            <HeaderContainer />
            <ContentContainer />
        </div>
    )
}

export default Main;
import React from 'react';
import { connect } from 'react-redux';
//import {  } from '../../redux/reducers/mainReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    
    render() {
        
        return <Header />
    }
}

let mapStateToProps = (state) => {
    
    return {
        
    }
}


export default connect(mapStateToProps, {

})(HeaderContainer)

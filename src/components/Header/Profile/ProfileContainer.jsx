import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';


class ProfileContainer extends React.Component {

    
    render() {
        return <Profile />
    }
}

let mapStateToProps = (state) => {
    
    return {
        userProfile: state.main.userProfile
    }
}


export default connect(mapStateToProps, {

})(ProfileContainer)

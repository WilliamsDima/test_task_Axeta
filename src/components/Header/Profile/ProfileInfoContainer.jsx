import React from 'react';
import { connect } from 'react-redux';
import { addNewSkill, deleteSkill } from '../../../redux/reducers/mainReducer';
import ProfileInfo from './ProfileInfo';


class ProfileIfoContainer extends React.Component {

    render() {
        return <ProfileInfo 
            userProfile={this.props.userProfile}
            expretionce={this.props.expretionce}
            
            addNewSkill={this.props.addNewSkill}
            deleteSkill={this.props.deleteSkill}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
        userProfile: state.main.userProfile,
        expretionce: state.main.userProfile[0].expretionce
    }
}


export default connect(mapStateToProps, {
    addNewSkill,
    deleteSkill
})(ProfileIfoContainer)

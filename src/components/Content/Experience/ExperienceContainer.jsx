import React from 'react';
import { connect } from 'react-redux';
import {newAgeNumber} from '../../../redux/reducers/mainReducer';
import Experience from './Experience';


class ExperienceContainer extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if(this.props.expretionce[0].expretionce !== this.props.expretionce[0].expretionce) {
            this.forceUpdate()
        }
    }

    render() {
        return <Experience 
            expretionce={this.props.expretionce} 
            
            newAgeNumber={this.props.newAgeNumber}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
        expretionce: state.main.userProfile
    }
}


export default connect(mapStateToProps, {
    newAgeNumber
})(ExperienceContainer)

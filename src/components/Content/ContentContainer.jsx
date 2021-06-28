import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';


class ContentContainer extends React.Component {

    
    render() {
        
        return <Content />
    }
}

let mapStateToProps = (state) => {
    
    return {
        
    }
}


export default connect(mapStateToProps, {

})(ContentContainer)

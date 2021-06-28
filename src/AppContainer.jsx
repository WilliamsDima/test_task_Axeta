import React from 'react';
import { connect } from 'react-redux';
import App from './App';


class AppContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <App />
    }
}

let mapStateToProps = (state) => {
    
    return {
        
    }
}


export default connect(mapStateToProps, {

})(AppContainer)

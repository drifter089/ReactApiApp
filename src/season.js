import React from 'react';
import SeasonDisplay from './seasondisplay';
import Spinner from './Spinner';

class Season extends React.Component {
    state={lat: null, errorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({ lat: position.coords.latitude });
            },
            (err)=> {
                this.setState({errorMessage: err.message })
            }
        );
    }

    renderContent(){

        if(!this.state.lat && this.state.errorMessage){
            return <Spinner message={this.state.errorMessage} />;
        }

        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return (
            <Spinner message="Please accept location request" />
        );

    }

    render() {
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        );

    }
}
export default Season;
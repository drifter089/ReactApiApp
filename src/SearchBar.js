import React from 'react';

class SearchBar extends React.Component{
    
    // onInputChange(event){

    //     console.log(event.target.value);
        
    // }
    state={term:''}

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render(){

        return (
            <div className="ui segment">
                {/* Search: */}
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                    <input
                        value={this.state.term}
                        onChange={(e)=>this.setState({term:e.target.value})} 
                        type="text" />
                    </div>
                </form>
            </div>   
        );
    }
}

export default SearchBar;
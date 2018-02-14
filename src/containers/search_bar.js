import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

// don't export default if use connect
/*export default */class SearchBar extends Component{
    constructor(props){
        super(props);
        //term is component level state not redux state
        this.state = {
            term: ''
        };

        // for access component context from onInputChange method without usa big fat arrow approach
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    // another usage:
                    // The YTSearch callback uses an es6 fat arrow function, which automatically inherits scope. It's like adding .bind(this)  onto the end of an es5 function.
                    // for transfer state to method
                    //onChange={() => this.onInputChange}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}


// props mapping here instead of inside of constructor
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
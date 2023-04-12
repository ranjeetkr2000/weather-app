import React, {Component} from "react";

class Header extends Component{

    render(){
        return (
            <header className="header">
                <div className="logo_div">
                    <i className="fa-solid fa-sun"></i>
                    <h1>Weather App</h1>
                </div>
                <form className="search" onSubmit={this.props.handleOnSubmit}>
                    <input type="text" placeholder="Search City"></input>
                    <button type="submit">Search</button>
                </form>
            </header>
        )
    }
}

export default Header;
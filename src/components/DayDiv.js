import React, { Component } from "react";
import kelvinToCelcius from "../services/kelvinToCelcius";

class DayDiv extends Component {

    weekdays=["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
    render() {
        const{dt_txt, main } = this.props.dayData;

        return (
            <div className="day_div">
                <span>{this.weekdays[new Date(dt_txt).getDay()]}</span>
                <span>Min: {kelvinToCelcius(main.temp_min)}</span>
                <span>Max: {kelvinToCelcius(main.temp_max)}</span>
            </div>
        )
    }
}

export default DayDiv;
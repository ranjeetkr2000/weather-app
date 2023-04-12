import React from "react";
import kelvinToCelcius from "../services/kelvinToCelcius";
import DailyDiv from "./DailyDiv";

class CurrCity extends React.Component{

    render() {
        console.log(this.props.currData.name);
        const {weather, main, wind} = this.props.currData;
        return (
            <div className="current_div">
                <h2 className="city_name">
                    {this.props.currData.name}
                </h2>
                <p className="current_temp">{kelvinToCelcius(main.temp)}°</p>
                <div className="current_info">
                    <span>{weather[0].main}</span>
                    <span>{kelvinToCelcius(main.temp_max)}°/{kelvinToCelcius(main.temp_min)}°</span>
                </div>
                <div className="info_div">
                    <span>Feels Like: {kelvinToCelcius(main.feels_like)}°</span>
                    <span><i class="fa-solid fa-wind"></i> {wind.speed}</span>
                </div>

                <div className="info_div">
                <span>Pressure: {main.pressure}</span>
                    <span><i class="fa-solid fa-droplet"></i> {main.humidity}</span>
                </div>
                <DailyDiv dailyData={this.props.dailyData}/>
            </div>
        )
    }
}

export default CurrCity;
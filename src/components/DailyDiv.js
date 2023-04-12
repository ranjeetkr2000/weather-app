import React, { Component } from "react";
import DayDiv from "./DayDiv";

class DailyDiv extends Component {

    render() {
        const list = this.props.dailyData.list;
        return (
            <div className="daily_div">
                {/* <div className="day">list</div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div> */}
                <DayDiv dayData={list[0]}/>
                <DayDiv dayData={list[1]}/>
                <DayDiv dayData={list[2]}/>
                <DayDiv dayData={list[3]}/>
                <DayDiv dayData={list[4]}/>
            </div>
        )
    }
}

export default DailyDiv;
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CurrCity from "./components/CurrCity";
import Loader from "./components/Loader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName : "Bengaluru",
            currData : null,
            dailyData: null,
            query : "",
            lat: 12.9762,
            lon: 77.6033,
            loading: false,
        };
    }

    searchCity = (event) => {
        event.preventDefault();
        let query = event.target.firstChild.value;
        if (query.trim() === "") {
            return;
        }

        this.setState(
            {
                cityName: query,
            },
            () => {
                this.fetchCurrData();
            }
        )
        
    }

    fetchCurrData = () => {
        this.setState({
            fetchError: false,
            loading: true,
        });

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Fetch Failed");
            }
        })
        .then((data) => {
            this.setState({
                currData : data,
                lat: data.coord.lat,
                lon: data.coord.lon,
            })
        })
        .then(() => {
            this.fetchDailyData();
        })
        .catch((err) => {
            console.error(err)
            this.setState({
                fetchError: true,
            })
        })
        .finally(() => {
            console.log("Finished Fetching")
            this.setState({
                loading: false
            })
        })
    }

    fetchDailyData = () => {
        this.setState({
            fetchError: false,
            loading: true,
        });

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&cnt=5&appid=2b85f12c9b98475443962f37f8cf65bf`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Fetch Failed");
            }
        })
        .then((data) => {
            this.setState({
                dailyData : data
            })
        })
        .catch((err) => {
            console.error(err)
            this.setState({
                fetchError: true,
            })
        })
        .finally(() => {
            console.log("Finished Fetching")
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="App">
              <Header handleOnSubmit={this.searchCity.bind(this)}/>
              {this.state.loading && <Loader />}

              {this.state.currData !== null && 
              this.state.dailyData!==null && 
              !this.state.loading &&
              !this.state.fetchError &&
              <CurrCity currData={this.state.currData} dailyData = {this.state.dailyData}/>
              }


              {
                !this.state.loading &&
                this.state.fetchError &&
                (<p className="error_msg">Invalid City name</p>)
              }
            </div>
          );
    }

    componentDidMount(){
        this.fetchCurrData();
    }
}

export default App;

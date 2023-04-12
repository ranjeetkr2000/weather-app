function kelvinToCelcius(temp){
    temp = parseFloat(temp);
    if(temp){
        return (temp-273.15).toFixed(2);
    } else{
        return null;
    }
}

export default kelvinToCelcius;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e0f35971606aa5a36e8a366acfd64ebb`)
    .then((response) => {
        let data = response.json();
        console.log(data);
        return data;
    }).then((res)=>{
     console.log(res);
    }).catch(()=> console.log("Error"));


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=e0f35971606aa5a36e8a366acfd64ebb`)
    .then((response) => {
        let data = response.json();
        console.log(data);
      return data;
    }).then((res)=>{
     console.log(res);
    }).catch(()=> console.log("Error"));



//Selecting elements

// const temp_value = document.querySelector("#temp-value")
const temp = document.getElementById('temp')
const temp_desc = document.getElementById("temp-desc")
const location_name = document.getElementById("location")
const icon = document.getElementById("icon")



const key  = "c58c1e31f6476f3701405697e091828b"


//getting the Data from the API

window.addEventListener("load",function() {
    var form = document.getElementById("form")
    form.addEventListener('submit',getData)
})

function getData() {
    event.preventDefault()
    var form = new FormData(event.target)
    var city = form.get("city")
 
    var xhr = new XMLHttpRequest()
    // var url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    xhr.open("GET",`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    xhr.send()
    xhr.onload = function() {
        var response = JSON.parse(xhr.response)
        console.log(response.weather[0].description)
        console.log(response.name)
        console.log(response.sys.country)
        appendData(response)
        
        
    }
    
}
//appendingData to Window using appenddata function

function appendData(data) {
    var temp_value = Math.floor(data.main.temp) - 273
    var desc = data.weather[0].description
    var location = data.name
    var country = data.sys.country
    var icon_id = data.weather[0].icon

    temp.innerHTML = temp_value
    temp_desc.innerHTML = desc
    location_name.innerHTML = location + "," + country
    icon.innerHTML = `<img src="icons/${icon_id}.png"/>`;
    document.querySelector("form").reset()
}



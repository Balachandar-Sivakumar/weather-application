let searchinp = document.querySelector('.Search_inp'),
    searchicon = document.querySelector('.fa-search'),
    pic = document.querySelector('.pic_icon'),
    celcious = document.querySelector('.celcious'),
    day= document.querySelector('.get_day'),
    condition = document.querySelector('.condition'),
    windspeed= document.querySelector('.windspeed'),
    humidity = document.querySelector('.humidity'),
    visiblity = document.querySelector('.visibility'),
    seapresure = document.querySelector('.sea_presusere'),
    sunset = document.querySelectorAll('.sunrise'),
    ctyname = document.querySelector('.inp_value'),
    toggle_container=document.querySelector('.toggle_div');




async function getdata(){

    if(searchinp.value.trim()=='') return alert('Please insert the name of the city')

    let request = `https://api.openweathermap.org/data/2.5/weather?q=${searchinp.value}&units=metric&appid=5b1444e06f41558b2bc231393ce69d11`; 
   
   await fetch (request,{method : 'GET'})
    .then(res => res.json())
    .then(res => setdata(res))
    .catch(error=>console.log(error)) 
}

searchicon.addEventListener('click',()=>{getdata()});

let icons = {
    '01d': 'https://openweathermap.org/img/wn/01d@2x.png',
    '01n': 'https://openweathermap.org/img/wn/01n@2x.png',
    '02d': 'https://openweathermap.org/img/wn/02d@2x.png',
    '02n': 'https://openweathermap.org/img/wn/02n@2x.png',
    '03d': 'https://openweathermap.org/img/wn/03d@2x.png',
    '03n': 'https://openweathermap.org/img/wn/03n@2x.png',
    '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
    '04n': 'https://openweathermap.org/img/wn/04n@2x.png',
    '09d': 'https://openweathermap.org/img/wn/09d@2x.png',
    '09n': 'https://openweathermap.org/img/wn/09n@2x.png',
    '10d': 'https://openweathermap.org/img/wn/10d@2x.png',
    '10n': 'https://openweathermap.org/img/wn/10n@2x.png',
    '11d': 'https://openweathermap.org/img/wn/11d@2x.png',
    '11n': 'https://openweathermap.org/img/wn/11n@2x.png',
    '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
    '13n': 'https://openweathermap.org/img/wn/13n@2x.png',
    '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
    '50n': 'https://openweathermap.org/img/wn/50n@2x.png'
};

function setdata(data){
    pic.src=icons[data.weather[0].icon]
    celcious.innerHTML=data.main.temp+'°C';
    day.innerHTML= new Date().toLocaleString('en-US',{weekday:'long',hour :'2-digit',minute:'2-digit',hour12:true});
    condition.innerHTML=` <img alt="Weather icon" class="w-10 h-10 pic_icon" src='${icons[data.weather[0].icon]}'>${data.weather[0].description}`;
    windspeed.innerHTML=data.wind.speed+'km/h';
    humidity.innerHTML=data.main.humidity;
    visiblity.innerHTML=data.visibility/1000;
    seapresure.innerHTML=data.main.sea_level;
    sunset[0].innerHTML=new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US',{hour :'2-digit',minute:'2-digit',hour12:true});
    sunset[1].innerHTML=new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US',{hour :'2-digit',minute:'2-digit',hour12:true});
    ctyname.innerHTML=searchinp.value;
    
}

let mode_change = document.querySelector('.toggle-bg');

mode_change.addEventListener('click',()=>{
    let circle = document.querySelector('.toggle-circle');
    circle.classList.toggle('toggle')
    document.body.classList.toggle('bgchange');
    toggle_container.classList.toggle('bgchange')
})
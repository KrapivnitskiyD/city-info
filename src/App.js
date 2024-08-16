import React from "react";
import './styles.css';

function PlacesPhoto(props) {
    return (
        <div className="place-card">
            <p>{props.place}</p>
            <img src={props.photo} alt={props.place} />
        </div>
    );
}

function AboutCity() {
    const cityInfo = {
        city: 'Одесса',
        country: 'Украина',
        founded: '2 сентября 1974',
        places: [
            ['Потёмкинская Лестница', 'potiomkin_stairs.jpg'],
            ['Театр Оперы и Балета', 'opera_ballet.jpg'],
            ['Катакомбы', 'catacombs.avif']
        ],
        flag: 'Flag_of_Odessa.jpg'
    };

    const cityStyle = {
        width: '80%',
        margin: '10px auto',
        padding: '20px',
        textAlign: 'center'
    };

    return (
        <div style={cityStyle} className="place-info">
            <h1>{cityInfo.city}</h1>
            <img className="flag" src={cityInfo.flag} alt={cityInfo.flag} />
            <p><strong>Страна: </strong> {cityInfo.country}</p>
            <p><strong>Город основан: </strong> {cityInfo.founded}</p>
            <h3>Интересные места и достопримечательности</h3>

            {cityInfo.places.map((place, index) => (
                <PlacesPhoto key={index} place={place[0]} photo={place[1]}></PlacesPhoto>
            ))}
        </div>
    );

}


function App() {
    return (
        <div className="App">
            <AboutCity></AboutCity>
        </div>
    );
}

export default App;

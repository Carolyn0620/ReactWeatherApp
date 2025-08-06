import { getcurrentWeather } from '../api';

function CurrentWeather() {
    const data = getcurrentWeather();
    const {
        cloud_cover, feels_like, humidity, icon_num, precipitaion, summary, temperature, uv_index, visibility, wind, } = data;

    const otherInfoWidgets = [
        {
            id: 0,
            icon: 'droplet',
            name: "Precipitation",
            value: Math.round(precipitaion),
            unit: 'in/h',
        },
        {
            id: 1,
            icon: 'wind',
            name: "Wind",
            value: Math.round(wind.speed),
            unit: 'mph',
        },
        {
            id: 2,
            icon: 'moisture',
            name: "Humidity",
            value: Math.round(humidity),
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: "uv_index",
            value: Math.round(uv_index),
            unit: '',
        },
        {
            id: 4,
            icon: 'clouds-fill',
            name: "Clouds cover",
            value: Math.round(cloud_cover),
            unit: '%',
        },
        {
            id: 5,
            icon: 'eye',
            name: "Visibility",
            value: Math.round(visibility),
            unit: 'mi',
        },
    ];

    return (
        <div className="CurrentWeather">
            <div className="temperature">
                <div className="weather-icon">
                    <img 
                    src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${icon_num}.png`} 
                    alt={summary}
                    />
                </div>
                <div className="value">
                    <div className="real">{temperature} °C</div>
                    <div className="feels_like">{feels_like} °C</div>
                </div>
                <div className="other-info">
                    {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
                        <div className="widget" key={id}>
                            <div className="widget-container">
                                <div className="info">  
                                    <div className="icon">
                                        <i className={`bi bi-${icon}`}></i>
                                    </div>
                                    <div className="details">
                                        <span className="name">{name}</span>
                                        <span className="value">{value}{unit ? ` ${unit}` : ''}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather

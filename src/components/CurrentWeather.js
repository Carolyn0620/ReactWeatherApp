import { getcurrentWeather } from '../api';

function CurrentWeather() {
    const data = getcurrentWeather();
    const {
        cloud_cover, feeka_like, humidity, icon_num, precipitaion, summary, temperature, uv_index, visibility, wind, } = data;

    return (
        <div className="CurrentWeather">
            <div className="temperature"></div>
            <div className="other-info"></div>

        </div>
    )
}

export default CurrentWeather

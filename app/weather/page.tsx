import axios from 'axios'
import React from 'react'

async function getData() {
    try {
        const res = await axios.get(" https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
        return res.data;
    } catch (error) {
        console.error('Lỗi', error);
        return error;
    }
}

export default async function page() {
    const data = await getData();
    if (!data || !data.current || !data.hourly) {
        return <div> không tìm thấy</div>;
    }

    return (
        <div>
            <h2>Thời tiết</h2>
            <p>Nhiệt độ: {data.current.temperature_2m} °C</p>
            <p>Tốc độ gió: {data.current.wind_speed_10m} m/s</p>
            
            <ul>
                {data.hourly.time.map((time: string, index: number) => (
                    <li key={index}>
                        Thời gian: {time}, Nhiệt độ: {data.hourly.temperature_2m[index]} °C, Độ ẩm: {data.hourly.relative_humidity_2m[index]}%
                    </li>
                ))}
            </ul>
        </div>
    )
}
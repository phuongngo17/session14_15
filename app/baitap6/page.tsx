"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data)
        }
        getData();
    }, [])
    /*
        render dữ liệu phía client 
    */
    return (
        <div>
            {users.map((item: any) => {
                return (
                    <div key={item.id}>
                        <h2>Name: {item.name}</h2>
                        <p>Email: {item.email}</p>
                        <p>Address: </p>
                        <ul>
                            <li>Street: {item.address.street}</li>
                            <li>Suite: {item.address.suite}</li>
                            <li>City: {item.address.city}</li>
                            <li>Zipcode: {item.address.zipcode}</li>
                            <li>Lat: {item.address.geo.lat}</li>
                            <li>Lng: {item.address.geo.lng}</li>
                        </ul>
                        <p>-------------------------------</p>
                    </div>
                )
            })}
        </div>
    )
}

"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                let res = await axios.get("/api/products");
                setUsers(res.data);
            } catch (error) {
                console.error("Lỗi", error);
            }
        }
        getData();
    }, [])

    return (
        <div>
            Bài tập 5
            {users.map((item: any) => {
                return (
                    <div key={item.id}>
                        <h2>Tên:{item.title}</h2>
                        <p>Giá: {item.price}</p>
                        <p>Miêu tả: {item.description}</p>
                        <p>Loại: {item.category}</p>
                        <img src={item.image} alt="" />
                        <p>Đáng giá: {item.rating.rate}({item.rating.count})</p>
                    </div>
                )
            })}
        </div>
    )
}
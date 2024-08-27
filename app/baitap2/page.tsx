import React from 'react'
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
}
export default async function page() {
    const users = await getData();
    return (
        <div> Bài 2
            {users.map((item: any) => {
                return (
                    <div key={item.id}>
                        <img src={item.image} alt="" />
                        <p>Tên: {item.title}</p>
                        <p>Giá: {item.price}</p>
                    </div>
                )
                
            })}
        </div>
    )
}

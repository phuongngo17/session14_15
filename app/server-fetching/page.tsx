import React from 'react'
/*
    dùng fetching đi lấy dữ liệu và render dữ liệu ở phía server
 */
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    return data;
}
export default async function page() {
    const users = await getData();
  return (
    <div>
          Tìm nạp dữ liệu server với fetching
          {users.map((item: any) => {
              return <li>{item.name}</li>
          })}
    </div>
  )
}

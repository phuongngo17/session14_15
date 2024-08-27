import React from 'react'
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();
    return data;
}
export default async function page() {
    const users = await getData();
  return (
      <div> Bài 1
         List of Posts
          {users.map((item: any) => {
              return <p key ={item.id}>{item.title}</p>
      })}
    </div>
  )
}

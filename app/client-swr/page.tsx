"use client"
import useSWR from 'swr'
import axios from 'axios'

// viết hàm đi lấy data
const getData = (url: string) => axios.get(url).then((res) => res.data);
export default function page() {
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", getData);
    if (error) return <div>quá trình lấy dữ liệu thất bại</div>
    if (!data) return <div>đang tải dữ liệu ...</div>
    console.log();
    
  return (
    <div>
        fetching data với thư viện swr
        {data.map((item: any) => {
           return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}

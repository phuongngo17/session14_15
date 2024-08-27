// cấu hình các method(GET, POST,PUT, PATCH, DELETE);

import { NextResponse } from "next/server";

let users = [
    {
        id: 1,
        name: "hoa",
        address:"HN",
    },
    {
        id: 2,
        name: "Hồng",
        address: "HCM",
    },
    {
        id: 3,
        name: "Tuấn",
        address: "HN",
    },

]
export async function GET() {
    return NextResponse.json(users);
}

import { NextResponse } from "next/server";
export function GET() {
    return NextResponse.json(
        {
            mensage:"Hola desde api"
        })
}
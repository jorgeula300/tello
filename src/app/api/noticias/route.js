import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(req) {
    const posts = await db.Noticias.findMany();

    return NextResponse.json(posts);

}



export async function POST(req) {

    const respuesta = await req.json();


    const post = await db.Noticias.create({
        data: respuesta
    })
    console.log(post);



    return NextResponse.json(post);



}
import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(req) {
    const posts = await db.Home.findMany();

    return NextResponse.json(posts);

}



export async function POST(req) {

    const respuesta = await req.json();

    const { titulo, urlImagen, contenido } = respuesta;

    const post = await db.Home.create({
        data: {
            titulo,
            urlImagen,
            contenido,
        }
    })
    console.log(post);



    return NextResponse.json(post);



}
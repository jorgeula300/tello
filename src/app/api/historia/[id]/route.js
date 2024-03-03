import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function DELETE(req, { params }) {

    const id = params.id;

    const post = await db.Historia.delete({
        where: {
            id: Number(id)
        }
    })

    return NextResponse.json(post);

} 
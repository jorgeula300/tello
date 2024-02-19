import {verify} from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get("tokenTello");

    if (!token) {
        return NextResponse.json({ error: "Not logged in" });
    }else {
        const { nombre, correo } = verify(token.value, process.env.TOKEN_SECRET);

        console.log(nombre,correo)
    
        return NextResponse.json({
            nombre,
            correo,
        });
        
    }
    


}
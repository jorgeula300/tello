import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(req) {

    const { correo, password } = await req.json();

    console.log(`${correo} ${password}`);

    const user = await db.User.findUnique({
        where: {
            correo: correo,
        },
    });

    console.log(user);
    if (!user) return NextResponse.json({ message: false });
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);
    if (!validPassword) return NextResponse.json({ message: false });

    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            nombre: user.nombre,
            correo: user.correo,
        },
        process.env.TOKEN_SECRET
    );

    console.log(token)

    const response = NextResponse.json({
        token,
    });

    response.cookies.set({
        name: "tokenTello",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
    });

    return response;
}

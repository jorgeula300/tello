import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(req) {
    try {
        const usuarios = await req.json();

        const validar = await db.User.findUnique({
            where: {
                correo: usuarios.correo
            }
        })
        if (validar) {
            return NextResponse.json({ message: "El correo ya esta registrado" })

        }
        const passwordHashed = await bcrypt.hash(usuarios.password, 10)
        const newUser = await db.User.create({
            data: {
                nombre: usuarios.nombre,
                correo: usuarios.correo,
                password: passwordHashed,
            }
        })

        const { password, ...rest } = newUser;

        return NextResponse.json(rest)
    } catch (error) {

        return NextResponse.json({ message: error.message }, { status: 500, })




    }

}
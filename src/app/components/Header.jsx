'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";






const Header = () => {


    const [data, setData] = useState([])
    const [menu, setMenu] = useState('hidden')




    useEffect(() => {

        axios.get("/api/profile")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            });
    }, []);





    const handleMenu = () => {
        if (menu === 'hidden') {
            setMenu('flex flex-col')
        } else {
            setMenu('hidden')
        }
    }



    let user = data.nombre
    console.log()







    return (<header className=" fixed w-full justify-between items-center  bg-slate-800 h-[50px] text-white px-5 z-40">

        <nav className="flex justify-between items-center space-x-2  ">

            <h1 className=" text-xl font-bold">REVOCATÓMETRO LATINOAMERICANO</h1>

            <ul className={`${menu}    absolute top-[200%] left-[0%] md:left-[25%] text-white  bg-slate-800 shadow-slate-700 shadow-xl  w-[98%] md:w-[50%]  rounded-xl  space-y-5 py-4 justify-center items-center  [&>li]:text-xl [&>li]:text-center [&>li]:font-bold`}>
                <li >
                    <Link href="/">Inicio</Link>
                </li>

                <li>
                    <Link
                        href="/pages/principalesAportes">
                        Principales aportes
                    </Link>
                </li>

                <li>
                    <Link
                        href="/pages/normativaCyL">
                        Normativa C y L de la rvocatoria
                    </Link>
                </li>

                <li>
                    <Link
                        href="/pages/noticias">
                        Noticias
                    </Link>
                </li>

                <li>
                    <Link
                        href="/pages/biblioteca">
                        Biblioteca
                    </Link>
                </li>

                <li>
                    <Link
                        href="/pages/historia">
                        Historia
                    </Link>
                </li>

                <li>
                    <Link
                        href="/pages/revocatoria_M_P">
                        Revocatoria del mandato por pais
                    </Link>
                </li>

                <li>
                    <Link
                        target="_blank"
                        href="/auth/login" >Admin</Link>
                </li>

            </ul>

            <svg onClick={handleMenu} className="w-10 h-10 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


        </nav>

    </header>);
}

export default Header;
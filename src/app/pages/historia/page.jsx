'use client'
import Header from "@/app/components/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
const Historia = () => {
    const [datos, setDatos] = useState();

    useEffect(() => {
        axios.get("/api/historia")
            .then((res) => { setDatos(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    console.log(datos)
    return (<>
    <Header/>
    <section className=" w-full min-h-[100vh] text-black bg-white pt-16 px-5">
    <h2 className=" text-xl font-bold uppercase text-slate-800">Historia</h2>
    <div className=" w-full flex flex-col justify-center items-center">
                {datos?.map(dato => (
                    <div className=" w-full lg:w-[70%] flex flex-col gap-3   lg:py-10 lg:px-8  text-black" key={dato.id} id={dato.id}>
                        <h2 className=" text-center text-2xl font-bold my-3 text-slate-800">{dato.titulo}</h2>
                        {dato.contenido ? <p className=" ">{dato.contenido}</p> : null}
                        {dato.urlImagen ? <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImagen} alt="imagen" /> : null}
                    </div>

                ))}

            </div>


            <div className=" w-[17%] min-h-[50vh] overflow-y-scroll lg:flex hidden flex-col justify-center items-center space-y-5 text-white bg-slate-800 rounded-3xl py-5 fixed top-80 right-[0] opacity-100 z-20 [&>h2]:border [&>h2]:border-x-transparent [&>h2]:border-t-transparent [&>h2]:border-slate-400">

                {datos?.map(dato => (

                    <h2 className=" text-center text-xl font-bold mb-3 cursor-pointer " key={dato.id}
                        onClick={() => {
                            document.getElementById(dato.id).scrollIntoView({ behavior: "smooth" });
                        }}
                    >{dato.titulo}</h2>

                ))}

            </div>
</section>
    </>);
}

export default Historia;
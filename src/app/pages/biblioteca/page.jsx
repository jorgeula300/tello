'use client'
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Biblioteca = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/api/biblioteca")
            .then((res) => { setData(res.data) })
            .catch((err) => console.log(err))
    }, [])
    console.log(data)
    return (<>
        <Header />
        <section className=" w-full min-h-[100vh] text-black bg-white pt-16 px-5">
            <h2 className=" text-xl font-bold uppercase text-slate-800">Biblioteca</h2>
            <div className="w-full flex flex-col justify-center items-center" >
                <div className=" min-w-[70%] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-2 gap-3">
                    {data?.map(dato => (
                        <Link className=" w-[250px] h-[250px] shadow-xl rounded-xl " href={dato.urlPdf} target="_blank" key={dato.id}>
                            <div className=" w-full h-[70%] overflow-hidden">
                                <Image className=" rounded-t-xl" width={300} height={300} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImagen} alt="imagen" style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} />
                            </div>
                            <div className="w-full h-[25%] flex justify-center items-center px-4">
                                <h2 className=" text-center text-xl font-bold  ">{dato.titulo}</h2>
                            </div>
                        </Link>

                    ))}
                </div>

            </div>
        </section>
    </>);
}

export default Biblioteca;
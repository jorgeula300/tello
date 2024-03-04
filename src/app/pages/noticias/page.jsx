'use client'
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";
const Noticias = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/api/noticias")
            .then((res) => { setData(res.data) })
            .catch((err) => console.log(err))
    }, [])
    console.log(data)
    return (<>
        <Header />
        <section className=" w-full min-h-[100vh] text-black bg-white pt-16 px-5">
            <h2 className=" text-xl font-bold uppercase text-slate-800">Noticias</h2>
            <div className="w-full flex flex-col justify-center items-center" >
                <div className=" w-[100%] xl:w-[70%] lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 py-2 gap-3 justify-items-center">
                    {data?.map(dato => (
                        <div className=" w-[330px] h-[380px] sm:w-[400px] sm:h-[400px] shadow-xl rounded-xl  " key={dato.id}>
                            <div className=" w-full h-[50%] overflow-hidden">
                                <Image className=" rounded-t-xl" width={300} height={300} layout="responsive" objectFit="cover" objectPosition="center" src={dato?.urlImagen} alt="imagen" style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} />
                            </div>
                            <div className=" px-4 h-[45%] ">
                                <h2 className=" text-center text-xl font-bold  ">{dato?.titulo}</h2>
                                
                                <div className=" flex flex-col  h-[80%] justify-between items-center">
                                <p className=" text-sm">{dato?.contenido}</p>
                                    <Link className=" w-full text-center bg-slate-800 text-white px-3 py-1 rounded-xl font-semibold"
                                        href={dato?.urlNoticia}
                                        target="_blank"
                                    >Ver mas</Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    </>);
}

export default Noticias;
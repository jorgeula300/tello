'use client'
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const NormativaCyL = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/api/normas")
            .then((res) => { setData(res.data) })
            .catch((err) => console.log(err))
    }, [])
    console.log(data)
    return (<>
        <Header />
        <section className=" w-full min-h-[100vh] text-black bg-slate-200 pt-16 px-5">
            <h2 className=" text-xl font-bold uppercase text-[#614E2E]">Normativa constitucional y legal de la revocatoria</h2>
            <div className="w-full flex flex-col justify-center items-center" >
                <div className=" w-[70%] grid grid-cols-4 py-2 gap-3">
                    {data?.map(dato => (
                        <div className=" w-[300px] h-[300px] shadow-xl rounded-xl " key={dato.id}>
                            <div className=" w-full h-[70%] overflow-hidden">
                                <Image className=" rounded-t-xl" width={300} height={300} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImagen} alt="imagen" style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} />
                            </div>
                            <div className=" px-4">
                            <h2 className=" text-center text-xl font-bold  ">{dato.titulo}</h2>
                            <div className=" flex justify-between items-center">
                            <h2><span className=" font-semibold">Pais: </span>
                                {dato.pais}</h2>
                                <Link className=" bg-[#614E2E] text-white px-3 py-1 rounded-xl font-semibold"
                                    href={dato.urlDoc}
                                    target="_blank"
                                >Ver Ley</Link>
                            </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>


        </section>
    </>);
}

export default NormativaCyL;
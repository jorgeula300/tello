'use client'
import Header from "@/app/components/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Revocatoria_M_P = () => {
    const [datos, setDatos] = useState();

    useEffect(() => {
        axios.get("/api/revocatoriaP")
            .then((res) => { setDatos(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    console.log(datos)
    return (<>

        <Header />
        <section className=" w-full min-h-[100vh] text-black bg-white pt-16 px-5">
            <h2 className=" text-xl font-bold uppercase text-slate-800">Revocatoria de mandato por pais</h2>
            <div className="w-full flex flex-col justify-center items-center" >
                <div className=" min-w-[70%] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-2 gap-3">
                    {datos?.map(dato => (
                        <Link className=" w-[250px] h-[250px] shadow-xl rounded-xl " href={dato.urlPdf} target="_blank" key={dato.id}>
                            <div className=" w-full h-[70%] overflow-hidden">
                                <Image className=" rounded-t-xl" width={300} height={300} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImagen} alt="imagen" style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} />
                            </div>
                            <div className="w-full h-[25%] flex flex-col justify-center items-center px-4">
                                <h2 className=" text-center text-xl font-bold  ">{dato.pais}</h2>
                                <h2 className=" text-center text-xl font-bold  ">{dato.fechas}</h2>
                            </div>
                        </Link>

                    ))}
                </div>

            </div>
        </section>

    </>);
}

export default Revocatoria_M_P;
'use client'
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";



export default function Home() {

  const [datos, setDatos] = useState();

  useEffect(() => {
    axios.get("/api/home")
      .then((res) => { setDatos(res.data) })
      .catch((err) => { console.log(err) })
  }, [])
  console.log(datos)
  return (
    <>
      <Header />
      <div className=" w-full min-h-[100vh] bg-white text-black pt-20 px-40">


        <div className=" w-[100%] h-[30vh] bg-slate-800 grid grid-cols-5 rounded-full [&>div]:rounded-full [&>div]:overflow-hidden [&>div]:flex [&>div]:justify-center [&>div]:items-center ">

          <div>
          <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src="/colombia.png" alt="imagen" /> 
          </div>
          <div>
          <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src="/Peru.png" alt="imagen" /> 
          </div>
          <div>
            <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src="/Ecuador.png" alt="imagen" /> 
          </div>
          <div>
          <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src="/Venezuela.png" alt="imagen" /> 
          </div>
          <div>
          <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src="/Bolivia.png" alt="imagen" /> 
          </div>
        
         


        </div>


        {datos?.map(dato => (
          <div className=" w-full lg:w-[70%] flex flex-col gap-3   lg:py-10 lg:px-8  text-black" key={dato.id} id={dato.id}>
            <h2 className=" text-center text-2xl font-bold my-3 text-slate-800">{dato.titulo}</h2>
            {dato.contenido ? <p className=" ">{dato.contenido}</p> : null}
            {dato.urlImagen ? <Image width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImagen} alt="imagen" /> : null}
          </div>

        ))}



        <div className=" w-[25%] min-h-[50vh] overflow-y-scroll lg:flex hidden flex-col justify-center items-center space-y-5 text-white  bg-slate-800 rounded-3xl py-5 fixed top-80 right-32 opacity-100 z-20 [&>h2]:border [&>h2]:border-x-transparent [&>h2]:border-t-transparent [&>h2]:border-slate-400">

          {datos?.map(dato => (

            <h2 className=" text-center text-2xl font-bold mb-3 cursor-pointer " key={dato.id}
              onClick={() => {
                document.getElementById(dato.id).scrollIntoView({ behavior: "smooth" });
              }}
            >{dato.titulo}</h2>

          ))}

        </div>



      </div>

    </>
  )
}

'use client'
import { useForm } from "react-hook-form";

import axios from "axios";

const revocPais = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        axios.post("/api/revocatoriaP", data)
        reset()
    })


    return (<section className=" w-full h-[100vh] bg-slate-200 flex justify-center items-center">
        <div className=" w-[80%] h-[80%] flex flex-col justify-center items-center bg-slate-800 rounded-xl  shadow-xl shadow-slate-600">
            <h2 className=" font-bold text-xl text-center">Revocatoria del mandato por pais</h2>

            <form action="" onSubmit={onSubmit} className=" flex flex-col justify-center  space-y-3 mt-5 w-[50%] h-[80%]  [&>input]:rounded-xl  [&>input]:text-black [&>input]:pl-3 [&>input]:pr-3 [&>textarea]:text-black [&>textarea]:rounded-xl [&>textarea]:pr-3 [&>textarea]:pl-3 " >
                <label htmlFor="pais">Pais</label>
                {errors.pais && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.pais.message}</span>}
                <input type="text" id="pais" {...register("pais", {
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    minLength: {
                        value: 3,
                        message: "El pais debe tener al menos 3 caracteres"
                    }
                })} placeholder="Ingrese el pais " />

                <label htmlFor="urlImagen">Ingresa url de imagen</label>
                {errors.urlImagen && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.urlImagen.message}</span>}
                <input type="text" id="urlImagen" {...register("urlImagen",{
                    required:{
                        value:true,
                        message:"Este campo es requerido"
                    } 
                
                })} placeholder="Ingrese la url de la imagen" />

                <label htmlFor="urlPdf">Ingresa url del documento</label>
                {errors.urlPdf && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.urlPdf.message}</span>}
                <input type="text" id="urlPdf" {...register("urlPdf", {
                    required:{
                        value:true,
                        message:"Este campo es requerido"
                    }
                })} placeholder="Ingrese la url del documento" />

                <label htmlFor="urlImagen">Fechas de revocatorias</label>
                <input type="text" id="urlImagen" {...register("fechas")} placeholder="Desde - hasta" />

                
  
                <button className=" bg-slate-200 text-slate-800 text-lg font-bold rounded-lg hover:bg-slate-300 " type="submit">Enviar</button>

            </form>


        </div>
    </section>);
}

export default revocPais;
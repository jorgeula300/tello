'use client'
import { useForm } from "react-hook-form";
import axios from "axios";
const Biblioteca = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        axios.post("/api/biblioteca", data)
        reset()
    })

    return (<section className=" w-full h-[100vh] bg-slate-200 flex justify-center items-center">
        <div className=" w-[80%] h-[80%] flex flex-col justify-center items-center bg-slate-800 rounded-xl  shadow-xl shadow-slate-600">
            <h2 className=" font-bold text-xl text-center">Biblioteca</h2>

            <form action="" onSubmit={onSubmit} className=" flex flex-col justify-center  space-y-3 mt-5 w-[50%] h-[80%]  [&>input]:rounded-xl  [&>input]:text-black [&>input]:pl-3 [&>input]:pr-3 [&>textarea]:text-black [&>textarea]:rounded-xl [&>textarea]:pr-3 [&>textarea]:pl-3 " >
                <label htmlFor="Titulo">Titulo del libro</label>
                {errors.titulo && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.titulo.message}</span>}
                <input type="text" id="Titulo" {...register("titulo", {
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    minLength: {
                        value: 5,
                        message: "El titulo debe tener al menos 5 caracteres"
                    }
                })} placeholder="Ingrese el titulo de la tematica" />

                <label htmlFor="urlImagen">Ingresa url de imagen</label>
                <input type="text" id="urlImagen" {...register("urlImagen", {
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    minLength: {
                        value: 5,
                        message: "La url debe de tener almenos 5 caracteres"
                    }
                })} placeholder="Ingrese la url de la imagen" />

                <label htmlFor="urlPdf">Ingresa url del pdf</label>
                <input type="text" id="urlPdf" {...register("urlPdf", {
                    required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    minLength: {
                        value: 5,
                        message: "La url debe de tener almenos 5 caracteres"
                    }
                })} placeholder="Ingrese la url del PDF" />





                <button className=" bg-slate-200 text-slate-800 text-lg font-bold rounded-lg hover:bg-slate-300 " type="submit">Enviar</button>

            </form>


        </div>
    </section>);
}

export default Biblioteca;
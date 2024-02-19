"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";


const Registrar = () => {
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async data => {
        if(data.password !== data.comfirmPassword){
            
            return alert("Las contraseñas no coinciden")
        }
        const res  = await axios.post("/api/auth/registro", {
            nombre: data.username,
            correo: data.email,
            password: data.password,
        })
        const resJson = await res.data

        if(resJson.ok){
            router.push("/auth/login")
        }

        console.log(resJson)

    } );


    return (<div className=" h-[calc(100vh-7rem)] flex  justify-center items-center text-black">
        <form action="" onSubmit={onSubmit}>

            <label htmlFor="nombre" className="text-white">Nombre</label>
            <input type="text"
                {...register("username", { required: true })}
                className="p-3 rounded-lg block mb-2 "
            />
            {errors.username && <span className=" text-red-700 block">Este campo es requerido</span>}
            <label htmlFor="email" className="text-white">Correo</label>

            <input type="email"{...register("email", { required: true })}
                className="p-3 rounded-lg block mb-2 "
            />
            {errors.username && <span className=" text-red-700 block">Este campo es requerido</span>}
            <label htmlFor="password" className="text-white">Contraseña</label>

            <input type="password"{...register("password", { required: true })}
                className="p-3 rounded-lg block mb-2 "
            />
            {errors.username && <span className=" text-red-700 block">Este campo es requerido</span>}
            <label htmlFor="password" className="text-white">Confirmar Contraseña</label>
            <input type="Password"{...register("comfirmPassword", { required: true, })}
                className="p-3 rounded-lg block mb-2 "
            />
            {errors.username && <span className=" text-red-700 block">Este campo es requerido</span>}

            <button className=" w-full text-white bg-blue-900 rounded-lg py-3 hover:bg-blue-700 mt-2 ">Registrar</button>
        </form>
    </div>);
}

export default Registrar;
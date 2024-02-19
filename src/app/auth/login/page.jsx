'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async (data) => {



        const response = await axios.post('/api/auth/login', {
            correo: data.correo,
            password: data.contraseña,
        });
        const responseJson = await response.data;
        router.push('/dashboard');

    })


    return (<div className=" flex flex-col h-[100vh]  justify-center items-center bg-slate-950 ">

        <div className=" bg-slate-900 w-[80%] md:w-[50%] lg:w-[30%] flex justify-center rounded-t-lg ">
            <h1 className=" md:text-xl lg:text-3xl m-1">LOGIN</h1>
        </div>
        <form className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%] bg-slate-700 p-4 rounded-b-md space-y-3 [&>input]:rounded-lg [&>input]:text-black [&>input]:px-3" action="POST" onSubmit={onSubmit}>
            <label htmlFor="email"
            > Correo</label>
            <input type="email"
                {...register("correo", { required: true })}
            />
            <label htmlFor="password">Contraseña</label>
            <input type="password"
                {...register("contraseña", { required: true })}
            />
            <button className=" bg-slate-900 w-[50%] py-1  text-sm lg:text-lg rounded-lg hover:bg-slate-800 m-auto">Iniciar Seccion</button>
        </form>
    </div>);
}
export default Login;
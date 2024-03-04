"use client"
import { useRouter } from "next/navigation";
import axios from "axios";  

const dasboardLayout = ({ children }) => {

    const router = useRouter()

    const logout = async () => {
        const response = await axios.get("/api/auth/logout");
        router.push("/auth/login")
        console.log(response.data);
    }

    return (<section className=" flex w-full h-[100vh]">

        <header className=" w-[220px] bg-slate-800">
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/dashboard">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard/principalesA">Principales aportes</a>
                    </li>

                    <li>
                        <a href="/dashboard/normas">Normativa constitucional</a>
                    </li>

                    <li>
                        <a href="/dashboard/noticias">Noticias</a>
                    </li>
                    <li>
                        <a href="/dashboard/biblioteca">Biblioteca</a>
                    </li>
                    <li>
                        <a href="/dashboard/historia">Historia</a>
                    </li>
                    <li>
                        <a href="/dashboard/revocPais">Revocatoria del mandato por pais</a>
                    </li>

                    <li>
                        <button
                            onClick={() => logout()}
                            className=" bg-red-700 px-2 rounded-lg shadow-red-500 shadow-inner hover:bg-red-500 hover:shadow-inner hover:shadow-red-700">Logout</button>
                    </li>
                </ul>
            </nav>
        </header>


        {children}


    </section>);
}

export default dasboardLayout;
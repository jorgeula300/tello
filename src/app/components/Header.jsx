'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";






const Header = () => {


    const [data, setData] = useState([])
    const [menu, setMenu] = useState('hidden')
    const router = useRouter()



    useEffect(() => {

        axios.get("/api/profile")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            });
    }, []);


    const logout = async () => {
        const response = await axios.get("/api/auth/logout");

        router.push("/auth/login")


        console.log(response.data);

    }


    const handleMenu = () => {
        if (menu === 'hidden') {
            setMenu('block')
        } else {
            setMenu('hidden')
        }
    }



    let user = data.nombre
    console.log()







    return (<header className=" fixed w-full justify-between items-center bg-[#614E2E] h-[50px] text-white px-5">

        <nav className="flex justify-between items-center space-x-2  ">

            <h1 className=" text-xl font-bold">REVOCATÓMETRO LATINOAMERICANO</h1>



            <div>
                {user ? user.split(" ")[0] + " " + user.split(" ")[1].charAt(0) + "." : null}

            </div>

            <ul className={`${menu}    absolute top-[200%] left-[30%] text-white bg-[#614E2E] shadow-slate-700 shadow-xl  w-[50%] h-[50vh] rounded-xl  space-x-3 [&>li]:text-center  z-30`}>
                <li className=" text-center">
                    <Link href="/">Inicio</Link>
                </li>

                <li>
                    <Link
                        href="/historia">
                        Historia
                    </Link>
                </li>
                <li>
                    {user ? <button
                        onClick={() => logout()}
                        className=" bg-red-700 px-2 rounded-lg shadow-red-500 shadow-inner hover:bg-red-500 hover:shadow-inner hover:shadow-red-700">Logout</button> : <Link
                            href="/auth/login" >Admin</Link>}
                </li>
            </ul>

            <svg onClick={handleMenu} className="w-10 h-10 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


        </nav>

    </header>);
}

export default Header;
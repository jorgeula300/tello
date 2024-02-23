const dasboardLayout = ({children}) => {
    return ( <section className=" flex w-full h-[100vh]">

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
            </ul>
        </nav>
    </header>
    
    
    {children}
    
    
    </section> );
}

export default dasboardLayout;
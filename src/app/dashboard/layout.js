const dasboardLayout = ({children}) => {
    return ( <section className=" flex w-full h-[100vh]">

    <header className=" w-40">
        <h1>Dashboard</h1>
        <nav>
            <ul>
                <li>
                    <a href="/dashboard">Home</a>
                </li>
                <li>
                    <a href="/formulario1">Formulario1</a>
                </li>
            </ul>
        </nav>
    </header>
    
    
    {children}
    
    
    </section> );
}

export default dasboardLayout;
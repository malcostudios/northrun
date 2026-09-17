function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-5">
            <h1 className="text-2xl font-bold tracking-tight">NORTHRUN</h1>

            <div className="flex gap-6 uppercase">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Trail</a>
                <a href="#">About</a>
            </div>
        </nav>
    )
}

export default Navbar
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="relative px-6 py-5">
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight">NORTHRUN</h1>

                {/* Desktop Navigation */}
                <div className="hidden gap-6 md:flex">
                    <a href="#" className='hover:text-lime-600 transition'>
                        Men
                    </a>
                    <a href="#" className='hover:text-lime-600 transition'>
                        Women
                    </a>
                    <a href="#" className='hover:text-lime-600 transition'>
                        Trail
                    </a>
                    <a href="#" className='hover:text-lime-600 transition'>
                        About
                    </a>
                </div>

                {/* Mobile Button */}
                <button onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden text-2xl'
                    aria-label='Toggle Menu'
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className='mt-6 flex flex-col gap-5 border-t border-neutral-800 pt-6 md:hidden'>
                    <a href='#' onClick={() => setIsOpen(false)}>
                        Men
                    </a>
                    <a href='#' onClick={() => setIsOpen(false)}>
                        Women
                    </a>
                    <a href='#' onClick={() => setIsOpen(false)}>
                        Trail
                    </a>
                    <a href='#' onClick={() => setIsOpen(false)}>
                        About
                    </a>
                </div>
            )}
            
        </nav>
    )
}

export default Navbar
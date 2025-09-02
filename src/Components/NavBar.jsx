export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-800 text-white px-6 py-3 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Menu Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="hover:text-yellow-400 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-yellow-400 transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-yellow-400 transition-colors">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-400 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
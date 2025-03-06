import { NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return ( 
        <header className="h-28 px-4 text-blue-800 fixed w-full flex justify-between items-center">
            <ul className="min-w-32">
                <h2 className="mb-1 text-gray-400">Redes</h2>

                <li>
                    <a href="https://github.com/jonathasdias" target="_blank" className="text-blue-900 hover:underline ml-2">
                        <FaGithub className="inline mr-1" />
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jonathas-dias-400465307/" target="_blank" className="text-blue-900 hover:underline ml-2">
                        <FaLinkedin className="inline mr-1" />
                        Linkedin
                    </a>
                </li>
            </ul>

            <nav className="space-x-2 font-bold text-lg">
                <NavLink to="/" className="aria-[current=page]:text-blue-400 py-2 px-4 hover:bg-[#04041F] rounded-lg">Sobre</NavLink>
                <NavLink to="/projects" className="aria-[current=page]:text-blue-400 py-2 px-4 hover:bg-[#04041F] rounded-lg">Projetos</NavLink>
                <NavLink to="/curriculo" className="aria-[current=page]:text-blue-400 py-2 px-4 hover:bg-[#04041F] rounded-lg">Curriculo</NavLink>
            </nav>
        </header>
     );
}
 
export default Header;
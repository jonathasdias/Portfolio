import { Link, NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import curriculoPDF from "../../assets/Jonathas_Dias_Desenvolvedor-Web-FrontEnd.pdf"; 

const Header = () => {
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        let lastScrollY:number = window.scrollY;

        const handleScroll = () => {
            const currentScrollY:number = window.scrollY;
            const hasScrolledPastHeader:boolean = currentScrollY > 112;
            const isScrollingUp:boolean = currentScrollY < lastScrollY;

            setIsFixed(hasScrolledPastHeader);
            setIsVisible(isScrollingUp || hasScrolledPastHeader);

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <header className={`h-28 w-full text-sm md:text-lg px-4 text-blue-700 transition-all duration-300 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-y-2 z-10
        ${isFixed ? "fixed top-0 left-0 shadow-lg border-b border-blue-700" : "absolute bg-transparent"}
        ${isVisible ? "bg-[#09070A]" : "bg-transparent"}`}>

            <div className="flex flex-nowrap">
                <a href="https://github.com/jonathasdias" target="_blank" className="flex items-center gap-x-1 border-r py-2 px-4 hover:underline hover:text-blue-600">
                    <FaGithub />
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/jonathas-dias-400465307/" target="_blank" className="flex items-center gap-x-1 py-2 px-4 hover:underline hover:text-blue-600">
                    <FaLinkedin />
                    Linkedin
                </a>
            </div>

            <nav className="font-bold">
                <NavLink to="/" className="aria-[current=page]:text-blue-400 hover:text-blue-400 py-2 px-4">Sobre</NavLink>
                <NavLink to="/projects" className="aria-[current=page]:text-blue-400 hover:text-blue-400 py-2 px-4">Projetos</NavLink>
                <Link to={curriculoPDF} target="_blank" className="hover:text-blue-400 py-2 px-4">Curriculo</Link>
            </nav>
        </header>
     );
}
 
export default Header;
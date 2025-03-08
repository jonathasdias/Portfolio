import { FaGithub, FaLinkedin, FaTools } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import computador from "../../imgs/computador.png"
import tools from "../../data/tools";
import { Link } from "react-router";
import darkAbstract from "../../imgs/backgrounds/dark-abstract.jpg"
import { ReactTyped } from "react-typed"

const About = () => {
    return ( 
        <>
            <section className="p-4 h-[100vh] text-center font-bold grid place-items-center" style={{'background': `url(${darkAbstract}) no-repeat center / cover`,}}>
                <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                    <h1 className="text-5xl md:text-6xl mb-1">
                        <ReactTyped strings={["Olá, Sou"]} typeSpeed={90} showCursor={false} startDelay={2000}/>
                    </h1>
                    <h1 className="text-6xl md:text-8xl mb-1"><ReactTyped strings={["Jonathas Dias"]} showCursor={false} typeSpeed={100} startDelay={3000}/></h1>
                    <h3 className="text-lg mb-1"><ReactTyped strings={["Desenvolvedor Web Front-End"]} showCursor={false} typeSpeed={100} startDelay={5000}/></h3>
                </div>
            </section>

            <section className="pb-10 px-4 md:min-h-[30rem] bg-[#09070A] flex flex-col md:flex-row justify-around items-center gap-y-10 md:gap-x-10">

                <article className="md:w-1/2 space-y-4 md:text-xl">
                    
                    <p className="text-gray-400 text-justify">
                    Olá, eu sou Jonathas Dias, moro em Juazeiro-BA,
                    graduado em Análise e desenvolvimento de sistemas, sou apaixonado
                    pela programação front-end web, tenho experiência em JavaScript, ReactJS, TypeScript, React, tailwindcss, redux.
                    Como um eterno estudante, estou sempre aprimorando meus
                    conhecimentos no desenvolvimento de sites e aplicações web interativas, responsivas,
                    atraentes, com um bom seo, boa acessibilidade, dinâmicas e eficientes. Estou sempre disposto
                    a aprender e aprimorar minhas habilidades.
                    </p>

                    <section className="p-4">
                        <h2 className="text-center text-lg md:text-xl mb-6"><FaTools className="inline" /> Minhas Skills</h2>

                        <div className="flex justify-center flex-wrap gap-2">
                            {tools.map(tool => (
                                <img key={tool.title} src={tool.url} alt={tool.title + "icon"} title={tool.title} className="size-11"/>
                            ))}
                        </div>
                    </section>

                    <h4>Fique avontade para ver meus projetos e entrar em contato!!!</h4>

                    <div className="min-w-32 space-x-3">
                        <span>
                            <FaGithub className="inline mr-1" />
                            <a href="https://github.com/jonathasdias" target="_blank" className="text-blue-600 hover:underline">
                                GitHub
                            </a>
                        </span>

                        <span>
                            <FaLinkedin className="inline mr-1" />
                            <a href="https://www.linkedin.com/in/jonathas-dias-400465307/" target="_blank" className="text-blue-600 hover:underline">
                                Linkedin
                            </a>
                        </span>

                        <span>
                            <BiSolidDashboard className="inline mr-1" />
                            <Link to="/projects" className="text-blue-600 hover:underline">
                                Projetos
                            </Link>
                        </span>
                    </div>
                </article>

                <figure className="w-1/2">
                    <img src={computador} alt="imagems computador" className="h-full" />
                </figure>
            </section>
        </>
     );
}
 
export default About;
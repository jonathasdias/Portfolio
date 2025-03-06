import blueAbstract from "../../imgs/backgrounds/blue-abstract.jpg"
import projects from "../../data/projects"
import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {

    console.log(projects);
    // Adicionar o projeto de cep

    return ( 
        <main className="min-h-dvh pt-28 pb-10 px-4" style={{'background': `url(${blueAbstract}) no-repeat center / cover`,}}>

            <section className="grid grid-cols-3 gap-6">
                {projects.map(project => (
                    <article key={project.name} className="relative p-3 border border-blue-700 rounded-xl overflow-hidden
                    before:content-[''] before:absolute before:top-0 before:left-0 before:bg-neutral-400 before:w-full before:h-full
                    before:opacity-40 before:z-[-1] z-[1]">
                        <figure className="h-52 border ">
                            <img src={project.image} alt={project.description} className="rounded h-full w-full"/>
                        </figure>

                        <h1 className="mt-2 text-lg">{project.name}</h1>

                        <p className="my-4">{project.description}</p>

                        <div className="flex justify-between">
                            <a href={project.github} target="_blank" className="border rounded-lg py-2 px-4 hover:bg-[rgba(165,161,161,0.25)] flex items-center gap-x-2">
                                <FaGithub className="text-xl"/>
                                GitHub
                            </a>
                            <a href={project.view} target="_blank" className="border rounded-lg py-2 px-4 hover:bg-[rgba(165,161,161,0.25)] flex items-center gap-x-2">
                                <FaEye className="text-xl"/>
                                Aplicação
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
     );
}
 
export default Projects;
import { FaEye, FaGithub } from "react-icons/fa";
import { ProjectType } from "../../types/ProjectsType";

interface ProjectCardProps {
    project: ProjectType
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return ( 
        <article className="relative p-2 text-sm rounded-xl overflow-hidden
        before:content-[''] before:absolute before:top-0 before:left-0 before:bg-neutral-400 before:w-full before:h-full
        before:opacity-40 before:z-[-1] z-[1]">
            <figure className="w-full">
                <img src={project.image} alt={project.description} className="rounded h-full w-full"/>
            </figure>

            <h1 className="mt-2 text-lg">{project.name}</h1>

            <p className="my-4">{project.description}</p>

            <div className="flex justify-between gap-x-2">
                <a href={project.github} target="_blank" className="border rounded-lg py-2 px-3 hover:bg-[rgba(165,161,161,0.25)] flex items-center gap-x-2">
                    <FaGithub className=""/>
                    GitHub
                </a>
                <a href={project.view} target="_blank" className="border rounded-lg py-2 px-3 hover:bg-[rgba(165,161,161,0.25)] flex items-center gap-x-2">
                    <FaEye className=""/>
                    Aplicação
                </a>
            </div>
        </article>
     );
}
 
export default ProjectCard;
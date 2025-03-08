import blueAbstract from "../../imgs/backgrounds/blue-abstract.jpg"
import projects from "../../data/projects"
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    return ( 
        <main className="min-h-dvh pt-32 pb-10 px-4" style={{'background': `url(${blueAbstract}) no-repeat center / cover`,}}>

            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map(project => <ProjectCard key={project.name} project={project} />)}
            </section>
        </main>
     );
}
 
export default Projects;
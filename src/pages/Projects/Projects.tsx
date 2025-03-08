import blueAbstract from "../../imgs/backgrounds/blue-abstract.jpg"
import projects from "../../data/projects"
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {

    // Lembrar de confirar as variaveis de ambiente antes de colocar no netlify e rodar npm run build e colocar no netlify
    // Adicionar animação de maiquina de escrever no about
    // Olhar console em todas as pagina e ver se encontra erro

    return ( 
        <main className="min-h-dvh pt-28 pb-10 px-4" style={{'background': `url(${blueAbstract}) no-repeat center / cover`,}}>

            <section className="grid grid-cols-3 gap-6">
                {projects.map(project => <ProjectCard key={project.name} project={project} />)}
            </section>
        </main>
     );
}
 
export default Projects;
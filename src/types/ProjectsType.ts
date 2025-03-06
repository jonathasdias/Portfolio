export interface ProjectType {
    name: string,
    description: string,
    github: string,
    view: string,
    image: string,
    video?: string,
}

export type ProjectsType = ProjectType[]
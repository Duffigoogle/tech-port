export interface IService {
    title: string,
    content: string,
    icon_name: string
}


export interface ISkills {
    name: string
    level: string
    icon_name: string
}

export interface ITraining {
    company: string
    program: string
    content: string
}

export interface IExperience {
    firm: string
    role: string
    duty: string
}

export interface IProjects {
    name: string
    description: string
    img_src: string
    deployed_link:string
    github_url: string
    category: Category[]
    tech_used: string[]
}

export type Category = "React" | "Node" | "Web3" | "Nextjs";
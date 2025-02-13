export interface HeaderNavigation {
    id: number
    link: string
    text: string
}
export interface HeaderConfig {
    
    navigation: HeaderNavigation[]
}

export interface IntroConfig {
title: string,
description: string[],
image: string,
primaryButtonTitle?: string, 
primaryButtonLink?: string,   
secondaryButtonTitle?: string,
secondaryButtonLink?: string
}

export interface AboutMeConfig {
    image: string,
    title: string,
    description: string[],
   
    
}
export interface ProjectConfig {
    image: string,
    project: string,
    subtitle: string,
    warning?: string,
    description: string[],
    tech: string,
    demoLink: string,
    gitLink: string,
    year?: number
}
export interface ProjectsConfig {
    fullStack: ProjectConfig[],
    
    responsive: ProjectConfig[],
    javaScript: ProjectConfig[]
}
export interface EducationConfig {
    year: string,
    title: string,
    tech: string,
    location: string
}
export interface ExperienceConfig {
    title: string,
    description: {
        title: string,
        skills: string[]
    }[]
}
export interface ContactConfig {
    title: string,
    description: string,
    cards_info: {
        id: string,
        title: string,
        link?: string
    }[]
}
export interface FooterContactConfig {
    prof: string,
    adress: string,
    phone: string,
    email: string,
    socialMedia: {
        id: string,
        title: string,
        link?: string
    }[]
}
export interface Quote {
    text: string,
    author: string
}
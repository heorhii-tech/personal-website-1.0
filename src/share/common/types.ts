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
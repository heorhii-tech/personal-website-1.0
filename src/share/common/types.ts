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
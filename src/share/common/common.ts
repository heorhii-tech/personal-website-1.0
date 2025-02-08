import { HeaderNav,HeaderConfig, IntroConfig } from "./types";
export const HEADER_NAV: HeaderNav[] = [
    {
        id:0,
        link: "/home",
        text: "HOME"
    },
    {
        id:1,
        link: "/projects",
        text: "PROJECTS"
    },
    {
        id:2,
        link: "/education",
        text: "EDUCATION"
    },
    {
        id:3,
        link: "/experience",
        text: "EXPERIENCE"
    },
    {
        id:4,
        link: "/about_me",
        text: "ABOUT ME"
    },{
        id:5,
        link: "/contact",
        text: "CONTACT"
    }
];

export const HEADER_CONFIG: HeaderConfig = {
    
    navigation: HEADER_NAV
}
export const INTRO_FIRST_SECTION: IntroConfig = {
    title: "Transforming Ideas into Stunning Websites: Your Dedicated Web Developer",
    description: [],
    image: "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/Ellipse-147.png?alt=media&token=a054de8c-fd86-4f62-9fe1-143aefb7451e",
    primaryButtonTitle: "CONTACT ME",
    primaryButtonLink: "contact",
    secondaryButtonTitle: "OPEN CV",
    secondaryButtonLink: "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FCV%20George%20Madzharov%20(1).pdf?alt=media&token=83899362-6f04-4a67-8244-340cad700776",
}
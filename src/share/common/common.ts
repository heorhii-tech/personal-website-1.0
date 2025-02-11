import {
  HeaderNavigation,
  HeaderConfig,
  IntroConfig,
  AboutMeConfig,
} from "./types";
export const HEADER_NAV: HeaderNavigation[] = [
  {
    id: 0,
    link: "/",
    text: "HOME",
  },
  {
    id: 1,
    link: "/projects",
    text: "PROJECTS",
  },
  {
    id: 2,
    link: "/education",
    text: "EDUCATION",
  },
  {
    id: 3,
    link: "/experience",
    text: "EXPERIENCE",
  },
  {
    id: 4,
    link: "/about_me",
    text: "ABOUT ME",
  },
  {
    id: 5,
    link: "/contact",
    text: "CONTACT",
  },
];

export const HEADER_CONFIG: HeaderConfig = {
  navigation: HEADER_NAV,
};
export const INTRO_FIRST_SECTION: IntroConfig = {
  title:
    "Transforming Ideas into Stunning Websites: Your Dedicated Web Developer",
  description: [],
  image:
    "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/Ellipse-147.png?alt=media&token=a054de8c-fd86-4f62-9fe1-143aefb7451e",
  primaryButtonTitle: "CONTACT ME",
  primaryButtonLink: "contact",
  secondaryButtonTitle: "OPEN CV",
  secondaryButtonLink:
    "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FCV%20George%20Madzharov%20(1).pdf?alt=media&token=83899362-6f04-4a67-8244-340cad700776",
};

export const ABOUT_ME_CONFIG: AboutMeConfig = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2Fcoding1.png?alt=media&token=2470b081-130c-4e6b-b08f-3ae4741a02ae",
  title: "ABOUT ME",
  description: [
    "HELLO WORLD! My name is George, and I am a 29-year-old Front-End Developer living in the Netherlands. I bring together deep front-end development expertise with an entrepreneurial mindset, making me not just a developer but a team player who is always invested in a project's growth. With experience working in an IT company, I thrive in collaborative environments, fostering strong communication and positive relationships within the team.",
    "My journey in web development started in 2022 with the fundamentals—HTML and CSS. As I dived into JavaScript, I realized its power as the neural core of front-end development, enabling the creation of dynamic and interactive experiences. In 2023, I discovered React, which quickly became my passion. Step by step, I expanded my skill set, mastering TypeScript, Webpack, and Next.js. ",
    "Styling plays a crucial role in crafting seamless user experiences. Transforming Figma designs into functional, responsive interfaces has taught me the importance of adaptability and efficiency. I leverage tools like Tailwind CSS and UI component libraries such as MUI, Ant Design, and Shadcn to accelerate development without compromising quality.",
    "I am constantly learning, exploring new technologies, and seeking exciting opportunities. My drive for innovation and continuous growth makes me a valuable asset to any development team, always ready to take on new challenges!",
  ],
};

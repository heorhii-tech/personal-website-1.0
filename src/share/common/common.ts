import {
  HeaderNavigation,
  HeaderConfig,
  IntroConfig,
  AboutMeConfig,
  ProjectConfig,
  ProjectsConfig,
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
const FULL_STACK_PROJECTS: ProjectConfig[] = [
  {
    project: "Light Space",
    year: 2023,
   
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2F5465352030714455350%20(1).jpg?alt=media&token=92c30bbd-ab3a-4410-b27b-b6c3cffc6254",

    subtitle:
      "Web site for coworking studio. Logic of authorization, registration, booking, personal account.Payment logic via Stripe",
    description: [
      "Booking: Implementation of cross-booking restriction, preventing table bookings for the same time, and booking multiple tables at different times.",
      "Payment: Online payment via card using the Stripe service, cash payment.",
      "Personal Account: Ability to change phone number, avatar, and user name.",
    ],
    tech: "React,Webpack,Tailwind CSS,MUI,Stripe",
    demoLink: "https://light-space.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/light_space",
  },
  {
    project: "Admin panel for Light Space",
    year: 2024,
    warning: "IN PROGRESS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2Fadminpanel.png?alt=media&token=b01e6fc9-1e60-4fa8-8a34-54eeac18e048",
    subtitle:
      "Admin panel for Light Space. Ability to create, edit, and delete projects, users, and bookings.",
    description: [
      "Tables: add, edit and delete tables.",
      "Reservations: deleting, adding reservations.",
      "Users: managing user accounts"
    ],
    tech: "React,Redux,Webpack,Tailwind CSS,MUI,Stripe",
    demoLink: "https://light-space.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/light_space",
  },
];
const RESPONSIVE_PROJECTS: ProjectConfig[] = [
  {
    project: "Fashion Shop",
    year: 2024,
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FfashionShop.png?alt=media&token=51c40269-91ec-4422-b3bf-4d0481e7da8f",
    subtitle:
      "The site is built to demonstrate adaptive design skills.",
    description: [
      "The site is built using pure Tailwind CSS without any UI libraries..",
      "Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
      
    ],
    tech: "React,TypeScript,Webpack,Tailwind CSS,",
    demoLink: "https://fashion-kh8l.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/fashion",
  },
  
];

const JAVA_SCRIPT_PROJECTS: ProjectConfig[] = [
  {
    project: "Chuck Norris jokes",
    year: 2022,
    image:
      "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
    ,
    subtitle:
      "The site is built to demonstrate JavaScript and adaptive design skills.",
    description: [
      "The site is built using pure Tailwind CSS without any UI libraries..",
      "Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
      
    ],
    tech: "JavaScript,Webpack,Tailwind CSS,",
    demoLink: "https://chuk-norris-jokes.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/Chuk_Norris_jokes",
  },
]
export const PROJECTS_CONFIG: ProjectsConfig = {
  fullStack: FULL_STACK_PROJECTS,
  responsive: RESPONSIVE_PROJECTS,
  javaScript: JAVA_SCRIPT_PROJECTS
};

import {
  HeaderNavigation,
  HeaderConfig,
  IntroConfig,
  AboutMeConfig,
  ProjectConfig,
  ProjectsConfig,
  EducationConfig,
  ExperienceConfig,
  ContactConfig,
  FooterContactConfig,
  Quote,
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
    "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FCV-George_Madzharov.pdf?alt=media&token=c119403d-30d2-4143-86ee-78f1c4949c66",
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
const RESPONSIVE_PROJECTS: ProjectConfig[] = [
  {
    project: "VirtualR",
    year: 2025,
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FvirtualR.png?alt=media&token=d28e6151-41a8-4493-93f6-0608515f0efa",
    subtitle: "The site is built to demonstrate adaptive design skills.",
    description: [
      "The site is built using  React, MUI, and Tailwind CSS ",
      "Auth form. Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
    ],
    tech: "React,ViteJS, MUI, Tailwind CSS,",
    demoLink: "https://virtual-r-three-peach.vercel.app/",
    gitLink: "https://github.com/heorhii-tech/VirtualR",
  },
  {
    project: "E commerce webshop",
    year: 2025,
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2Fe-commerce.png?alt=media&token=47e5856b-3c6d-41c7-a374-d8bc4f2e3321",
    subtitle: "Cart logic via Redux and Local storage. Responsive Design.",
    description: [
      "Implemented using Next.js and the Shadcn UI library. The logic for adding and removing items from the cart, as well as changing item quantities, has been implemented.",
      "Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
    ],
    tech: "Next Js, EsLint,React,TypeScript,Tailwind CSS,Shadcn UI ",
    demoLink: "https://e-commerce-shop-kazr.vercel.app/",
    gitLink: "https://github.com/heorhii-tech/e-commerce-shop",
  },
  {
    project: "Fashion Shop",
    year: 2024,
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2FfashionShop.png?alt=media&token=51c40269-91ec-4422-b3bf-4d0481e7da8f",
    subtitle: "The site is built to demonstrate adaptive design skills.",
    description: [
      "The site is built using pure Tailwind CSS without any UI libraries..",
      "Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
    ],
    tech: "React,TypeScript,Webpack,Tailwind CSS,",
    demoLink: "https://fashion-kh8l.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/fashion",
  },
  

];
const FULL_STACK_PROJECTS: ProjectConfig[] = [
  {
    project: "Light Space",
    year: 2023,
    warning: "MOBILE AND DESKTOP VERSION",

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
      "Users: managing user accounts",
    ],
    tech: "React,Redux,TypeScript,Webpack,Tailwind CSS,MUI,Stripe",
    demoLink: "https://admin-panel-coworking.vercel.app/",
    gitLink: "https://github.com/heorhii-tech/admin_panel_coworking",
  },
];

const JAVA_SCRIPT_PROJECTS: ProjectConfig[] = [
  {
    project: "Shoes Shop",
    year: 2025,
    image:
      "https://firebasestorage.googleapis.com/v0/b/svitlospace-b21f8.appspot.com/o/portfolio%2Fshoes.png?alt=media&token=8c70753c-673f-4c84-9731-6bce33e7fe45",
    subtitle: "The site is built to demonstrate adaptive design skills.",
    description: [
      "The site is built using pure JavaScript and Tailwind CSS without any UI libraries..",
      "Adaptation for devices: mobile, tablet, small laptop, large laptop, and higher..",
    ],
    tech: "JavaScript, Tailwind CSS,",
    demoLink: "https://shoesshop-wvf3.onrender.com/",
    gitLink: "https://github.com/heorhii-tech/shoesShop",
  },
  {
    project: "Chuck Norris jokes",
    year: 2022,
    image:
      "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png",
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
];
export const PROJECTS_CONFIG: ProjectsConfig = {
  fullStack: FULL_STACK_PROJECTS,
  responsive: RESPONSIVE_PROJECTS,
  javaScript: JAVA_SCRIPT_PROJECTS,
};

export const EDUCATION_CONFIG: EducationConfig[] = [
  {
    year: "2024",
    title: "Hillel IT School",
    tech: "React JS, Vite JS, Redux Toolkit, GitHub,MUI",
    location: "Ukraine(remote)",
  },
  {
    year: "2023",
    title: "Matrix Master",
    tech: "JavaScript, NODE JS, React JS, GITHUB, Express JS, MongoDB, JSON Web Token, Scrum ",
    location: "Rotterdam",
  },

  {
    year: "2023",
    title: "school ITGid",
    tech: "JavaScript",
    location: "Ukraine(remote)",
  },
  {
    year: "2022",
    title: "school ITGid",
    tech: "JavaScript",
    location: "Ukraine(remote)",
  },
  {
    year: "2022",
    title: "Hillel IT School",
    tech: "HTML 5, CSS 3",
    location: "Ukraine(remote)",
  },
  {
    year: "2013-2108",
    title: "National University «Odesa Law Academy»",
    tech: "Master of Law",
    location: "Ukraine",
  },
];
export const EXPERIENCE_CONFIG: ExperienceConfig[] = [
  {
    title: "IT EXPERIENCE",
    description: [
      {
        title: "SOFT SKILLS",
        skills: [
          "Daily cohesive teamwork in an office environment.",
          "Collaborate with a team to solve complex problems and make architectural decisions",
          "Comfortable working in a dynamic, fast-paced environment ",
          "Knowledge of UI/UX principles and experience with responsive web design ",
          "Interest in energy data and its visualization ",
          "Experience in finding tools to solve a problem",
        ],
      },
      {
        title: "HARD SKILLS",
        skills: [
          "Strong knowledge of React JS (Redux) and TypeScript",
          "Experience with Webpack, Next.js, and Vite.js",
          "Understanding of libraries and frameworks usage",
          "Converting Figma designs into functional code",
          "Proficient in using UI libraries: MUI, Ant Design, Chakra UI, Shadcn",
          "Flexible styling with Tailwind CSS",
        ],
      },
    ],
  },
  {
    title: "BUSINESS EXPERIENCE",
    description: [
      {
        title: "ALL SKILLS",
        skills: [
          "Building a business from scratch to a working model",
          "Confidence in taking responsibility",
          "Long-term work in a high-pressure environment",
          "Constant team communication and brainstorming",
          "Recruiting staff for various positions",
          "Quick problem-solving skills",
        ],
      },
    ],
  },
];

export const CONTACT_CONFIG: ContactConfig = {
  title: "CONTACT ME",
  description:
    "I am always interested in new opportunities and collaborations. If you have any questions or would like to get in touch, please don't hesitate to reach out to me. I currently live in Rotterdam near the Alexandrium shopping center and am available through various communication channels.",
  cards_info: [
    {
      id: "tel",

      title: "+31 6 38 69 95 61",
    },
    {
      id: "linkedin",

      title: "GEORGE MADZHAROV",
      link: "https://www.linkedin.com/in/heorhii-madzharov/",
    },
    {
      id: "email",

      title: "heorhiimadzharov@gmail.com",
      link: "heorhiimadzharov@gmail.com",
    },
    {
      id: "github",

      title: "GIT HUB",
      link: "https://github.com/heorhii-tech",
    },
  ],
};
const FOOTER_CONTACT: FooterContactConfig = {
  prof: "FRONTEND DEVELOPER",
  adress: "Rotterdam, The Netherlands",
  phone: "+31 6 38 69 95 61",
  email: "heorhiimadzharov@gmail.com",
  socialMedia: [
    {
      id: "tel",

      title: "+31 6 38 69 95 61",
    },
    {
      id: "linkedin",

      title: "GEORGE MADZHAROV",
      link: "https://www.linkedin.com/in/heorhii-madzharov/",
    },
    {
      id: "email",

      title: "heorhiimadzharov@gmail.com",
      link: "heorhiimadzharov@gmail.com",
    },
    {
      id: "github",

      title: "GIT HUB",
      link: "https://github.com/heorhii-tech",
    },
    {
      id: "whatsapp",

      title: "+31 6 38 69 95 61",
      link: "+380983007855",
    },
  ],
};
export const FOOTER_CONFIG = {
  contact: FOOTER_CONTACT,
  navigation: HEADER_NAV,
};

export const QUOTES_CONFIG: Quote[] = [
  {
    text: "I had the pleasure of working with George during his time as a Frontend Developer at InGenius. At InGenius, George consistently demonstrated his proficiency in React, TypeScript, and JavaScript, leveraging tools like React Hooks, Redux, and React Router to craft responsive and user-friendly interfaces. His attention to detail and commitment to maintaining efficient code greatly enhanced the user experience across our platform. I’m confident George will bring the same energy and technical expertise to his next role. I highly recommend him for any opportunities where innovation and drive to succeed are key.",
    author: "Celeste Tacconi",
  },
  {
    text: "I have had the pleasure of working closely with George while building an AI-driven learning platform. From the start, he impressed me with his energy, enthusiasm, and passion for learning new technologies. He quickly became an indispensable member of the team. George has an excellent understanding of React and demonstrates a deep technical proficiency that is rare to find. His ability to quickly grasp complex concepts, adapt to new challenges, and deliver quality work has been a key factor in the success of our projects. He is not only an expert in his field but also a strong team player, always eager to collaborate and help others. His open-minded approach to problem-solving, combined with his eagerness to grow and learn, makes him a standout engineer. He is always excited to tackle new challenges, and his positive attitude makes him easy to work with and a joy to be around. He gets along with everyone and brings a collaborative spirit to the team that fosters a supportive work environment. I have no doubt that George will continue to thrive in any engineering role he takes on, and I highly recommend him for any future opportunities. His technical skills, work ethic, and enthusiasm make him an asset to any team.",
    author: "Md Sazzadul Islam - Tech Lead",
  },
  {
    text: "From the moment I interviewed George, it was clear that he was a hardworking individual with a remarkable ability to adapt to change. Choosing him for the role was a no-brainer, and I am thrilled to say that he exceeded all expectations. George quickly adapted to a completely new context, embracing new tools, workflows, and challenges with ease. His ability to deliver tangible results in just a few days stood out the most. He picked up the topic, grasped the team’s vision, and aligned himself with the direction we were heading almost immediately. Watching him evolve and grow in such a short period of time was truly rewarding and a testament to his adaptability and dedication. His technical expertise, particularly in TypeScript, modern front-end frameworks, and his proactive use of AI tools like v0 and Cursor to accelerate development, truly set him apart. George leveraged these tools to improve efficiency and deliver high-quality solutions that matched the team’s expectations and vision. George’s ability to integrate into the team, his collaborative spirit, and his positive attitude made him an invaluable part of the project. I am proud to have worked with George and have no doubt that he will continue to achieve great things in his career. I wholeheartedly recommend him to any team seeking a talented, adaptable, and driven professional.",
    author: "Dr. Hernani Costa - Direct Manager",
  },
];

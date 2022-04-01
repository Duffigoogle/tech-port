import { IService, ISkills, ITraining, IExperience, IProjects } from './type';
// import Projects from './pages/projects';

export const items: IService[] = [
  {
    title: "Frontend Dev",
    content:
      "I create value by building digital products. It gives me so much joy, when I design interfaces using <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>JAVASCRIPT</b>, <b>REACT</b>, <b>NEXTjs</b>",
    icon_name: "lock",
  },
  {
    title: "API Dev",
    content: "I can develop a robust REST API using <b> Node API </b>",
    icon_name: "lock",
  },
  {
    title: "UI/UX",
    content: "lorem....",
    icon_name: "lock",
  },
  {
    title: "Web3",
    content:
      "I can build Decentralized Applications, using <b>web3js</b>, <b>etherjs</b>, <b>truffle</b>, <b> Hardhat</b>, <b>Solidity</b>",
    icon_name: "metamask",
  },
  {
    title: "Web Tutor",
    content: "I teach Web Development as a part-time job",
    icon_name: "padlock",
  },
  {
    title: "Fronte",
    content: "lorem....",
    icon_name: "alert",
  },
];

export const languages: ISkills[] = [
  {
    name: "JavaScript",
    level: "80%",
    icon_name: "",
  },
  {
    name: "React-Native",
    level: "60%",
    icon_name: "",
  },
  {
    name: "React",
    level: "90%",
    icon_name: "",
  },
  {
    name: "C",
    level: "60%",
    icon_name: "",
  },
  {
    name: "Solidity",
    level: "40%",
    icon_name: "",
  },
  {
    name: "Web3",
    level: "80%",
    icon_name: "",
  },
];

export const tools: ISkills[] = [
  {
    name: "Framer",
    level: "50%",
    icon_name: "",
  },
  {
    name: "Illustrator",
    level: "60%",
    icon_name: "",
  },
  {
    name: "Figma",
    level: "50%",
    icon_name: "",
  },
];

export const trainings: ITraining[] = [
  {
    company: "Rivers State ICT",
    program: "Codegaminator (2018)",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod quo suscipit, pariatur voluptatem recusandae quis",
  },
  {
    company: "Google",
    program: "Google Africa Developer Scholarship",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    company: "Microsoft",
    program: "Microsoft Azure Africa Training",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const experiences: IExperience[] = [
    {
        firm: "HNG 7 Internship",
        role: "Frontend Developer (2019-2020)",
        duty: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod quo suscipit,"
    },
    {
        firm: "Tech Creek (2020)",
        role: "Frontend Engineer Jnr.",
        duty: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod quo suscipit, pariatur voluptatem recusandae."
    }
]

export const projects: IProjects[] = [
  {
  name: "Trippa Shot",
  description: "This app shows a touristic photo gallery with different categories",
  img_src: "/images/Dev-1.png",
  deployed_link: "",
  github_url: "https://github.com/Duffigoogle/TrippaShot",
  category: ["React"],
  tech_used: ["React", "CSS", "SASS"]
},
  {
  name: "Quik Moni",
  description: "This app shows a touristic photo gallery with different categories",
  img_src: "/images/Dev-2.png",
  deployed_link: "",
  github_url: "",
  category: ["React"],
  tech_used: ["ReactJs", "CSS", "SASS"]
},
  {
  name: "Xtend Reality",
  description: "This is Web App for the Xtend Reality Project",
  img_src: "/images/Dev-3.png",
  deployed_link: "",
  github_url: "",
  category: ["React", "Nextjs"],
  tech_used: ["NextJs", "SASS", "TailwindCSS"]
},
  {
  name: "AlgoVest",
  description: "This app is a DeFi App for Pool and Yield farming",
  img_src: "/images/Dev-4.png",
  deployed_link: "https://algovest.fi/",
  github_url: "https://github.com/Venaz-dev/algovest-dashboard",
  category: ["React", "Nextjs"],
  tech_used: ["React", "NextJs", "MaterialUI", "SASS"]
},
  {
  name: "Techrity",
  description: "This Web app for a Non-Governmental Organization",
  img_src: "/images/Dev-5.png",
  deployed_link: "https://techrity.org/",
  github_url: "",
  category: ["React", "Node"],
  tech_used: ["Nextjs", "SASS"]
},
{
  name: "WavyHuggy",
  description: "This is DApp that enables users send waves or hugs",
  img_src: "/images/Dev-6.png",
  deployed_link: "",
  github_url: "https://github.com/Duffigoogle/wave-portal",
  category: ["React", "Web3" ],
  tech_used: ["Next", "SASS", "Truffle", "Hardhat"]
},
{
  name: "DApp",
  description: "This is just a simple DApp homepage with wallet modal options",
  img_src: "/images/Dev-7.png",
  deployed_link: "https://dapp-homepage.vercel.app",
  github_url: "https://github.com/Duffigoogle/DApp",
  category: ["Web3"],
  tech_used: ["Nextjs", "SASS", "web3js", "TypeScript"]
},
{
  name: "Techfolio App",
  description: "This is a dynamic web app, moreof a portfolio, with a user interface of the famous VScode",
  img_src: "/images/Dev-8.png",
  deployed_link: "https://duffigoogle-techfolio.vercel.app/",
  github_url: "https://github.com/Duffigoogle/portfolio",
  category: ["Nextjs"],
  tech_used: ["NextJs", "Styled-Components", "TailwindCSS"]
},
]
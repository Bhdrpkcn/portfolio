import {
  architect,
  bass,
  creator,
  web,
  picklepedia,
  tariffhub,
  bookhub,
  todo,
  jsfundamentals,
  houseshow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Architect",
    icon: architect,
  },
  {
    title: "Bass Guitarist",
    icon: bass,
  },
  {
    title: "Motorcyclist",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Frontend Developper",
    company_name: "Self-Directed",
    icon: web,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Embarked on a journey to explore JavaScript and frontend technologies in June 2023.",
      "Engaged in diverse web design and development projects since August 2023, fostering continuous learning and growth.",
    ],
  },
  {
    title: "Guest Lecturer - Jury",
    company_name: "A.I.B.U. Faculty of Architecture",
    icon: architect,
    iconBg: "#383E56",
    date: "2016 - present",
    points: [
      "Acted as a jury member for student exams, meticulously evaluating and judging architecture work projects based on established criteria.",
      "Mentored students on architectural principles, design methodologies, and industry best practices, contributing to their overall academic and professional development.",
    ],
  },
  {
    title: "Architect - Owner",
    company_name: "bp Architects",
    icon: architect,
    iconBg: "#383E56",
    date: "07.2017 - 06.2022",
    points: [
      "bp Architects is a dynamic architectural firm dedicated to innovative design solutions and clientcentric services",
      "I specialize in designing apartment complexes and detached houses, utilizing my expertise in interior design to craft captivating and functional living spaces that surpass client expectations",
    ],
  },
  {
    title: "Architect - Project Manager",
    company_name: "AYC Architects",
    icon: architect,
    iconBg: "#383E56",
    date: "06.2013 - 07.2017",
    points: [
      "Assist in the preparation of design drawings, renderings, and presentation materials using CAD software and other design tools.",
      "Participate in project meetings, site visits, and client presentations, gaining exposure to the architectural design process from concept to completion.",
      "Assist in the preparation of construction documents, including plans, sections, elevations, and details, ensuring accuracy and compliance with building codes and standards.",
    ],
  },
  {
    title: "Intern Architect",
    company_name: "AYC Architects",
    icon: architect,
    iconBg: "#383E56",
    date: "01.2010 - 06.2013",
    points: [
      "I began my architectural internship in 2010, balancing my studies with practical experience in the field, fostering a comprehensive understanding of architectural principles and real-world application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jsfundamentals",
    description:
      "Introduction to React and basic CSS. Explored JavaScript fundamentals, created interactive UIs.",
    date: "17.08.2023 - 29.08.2023 / React",
    tags: [
      {
        name: "React | CSS",
        color: "blue-text-gradient",
      },
    ],
    image: jsfundamentals,
    source_code_link: "https://bhdrpkcn.github.io/jsfundamentals",
  },
  {
    name: "picklepedia",
    description:
      "Picklepedia: Delving into RESTful APIs, react hooks, fetching, filtering connected multiple API datas with router navigation.",
    date: "21.09.2023 - 19.19.2023 / React",
    tags: [
      {
        name: "React | Api | Router | Filtering & Searching | Router | Card Components | CSS",
        color: "blue-text-gradient",
      },
    ],
    image: picklepedia,
    source_code_link: "https://bhdrpkcn.github.io/picklepedia",
  },
  {
    name: "todo",
    description:
      "Integrated API for CRUD operations. First experience with Redux & RTK for todo management.",
    date: "21.10.2023 - 01.11.2023 / React",
    tags: [
      {
        name: " React | Redux | RTK | Crud Operations CRUD operations",
        color: "blue-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://bhdrpkcn.github.io/todo",
  },
  {
    name: "tariffHub",
    description:
      "Crafted online mock API, managed data with Redux. Responsive design for various devices, Ant Design usage.",
    date: "03.11.2023 - 20.11.2023 / React",
    tags: [
      {
        name: "React | Redux | RTK | Responsive CSS Design | Filtering & Comparing & Sorting | Mock Api",
        color: "blue-text-gradient",
      },
    ],
    image: tariffhub,
    source_code_link: "https://bhdrpkcn.github.io/tariffhub",
  },
  {
    name: "bookHub",
    description:
      "Integrated Redux for seamless API fetching with error and state management, utilizing Redux Thunk middleware.  Enhanced user experience with Ant Design components, and implemented local data storage for making favorited books logic.",
    date: "23.11.2023 - 16.12.2023 / React ",
    tags: [
      {
        name: "React | Redux Thunk | Local Storage | Ant Design | URL Params",
        color: "blue-text-gradient",
      },
    ],
    image: bookhub,
    source_code_link: "https://bhdrpkcn.github.io/bookhub",
  },
  {
    name: "houseShow",
    description:
      "HouseShow marks a milestone in collaborative frontend development, emphasizing API logic and user engagement strategies. Addressing CORS issues, configuring backend setup, and implementing thorough authorization mechanisms ensure secure user access and interaction.",

    date: "15.01.2024 - in_progress / React",
    tags: [
      {
        name: "React | Redux Thunk | Authentication | Postman | Eslint | Prettier | Git Workflow",
        color: "blue-text-gradient",
      },
    ],
    image: houseshow,
    source_code_link: "https://github.com/house-show/houseshow-frontend",
  },
];

export { services, experiences, testimonials, projects };

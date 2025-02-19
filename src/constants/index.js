import { e } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  MySQL,
  nodejs,
  git,
  nextjs,
  LK,
  adelcover,
  // figma,
  docker,
  /* meta,
  starbucks,
  tesla,
  shopify, */
  /* carrent, 
  jobit,*/
  jawwal,
  eventnow,
  //tripguide,
  // threejs,
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  /* {
    title: "DevOps Engineer",
    icon: mobile,
  }, */
  {
    title: "Aspiring DevOps Engineer",
    icon: backend,
  },
  {
    title: "ADEL Platform Co-Founder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  /* {
    name: "figma",
    icon: figma,
  }, */
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer Intern",
    company_name: "LK Wellness Services - USA",
    icon: LK,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed and maintained an Event management website using NextJS and other related technologies.",
      "Implement responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Ambassador",
    company_name: "Palestine Telecommunications Company-Jawwal",
    icon: jawwal,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Corporate & SOHO Fiber installation Quality Officer | Customer Success Department.",

    ],
  },
  /*
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

/* const testimonials = [
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
]; */

const projects = [
  {
    name: "EventNow",
    description:
      "EventEase simplifies event management by enabling users to create, view, and manage events, including tracking registrations and sending emails, all through a user-friendly interface.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "SupaBase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: eventnow,
    source_code_link: "https://github.com/",
  },
  {
    name: "ADEL Platform",
    description:
      "A SaaS web application that streamlines law firm operations with features like client management, document processing, appointment scheduling, invoicing, and robust security, providing an efficient and secure platform for Arab legal professionals.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "LiveWire",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: adelcover,
    source_code_link: "https://github.com/",
  },
  /* {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }, */
];

export { services, technologies, experiences, projects };

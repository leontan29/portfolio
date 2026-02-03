import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Leon",
  lastName: "Tan",
  name: `Leon Tan`,
  role: "Fullstack Engineer & Product Manager",
  avatar: "/images/pp.jpg",
  email: "leontann29@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/leontan29",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/leontan29/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable backend systems</>,
  featured: {
    display: false,
  },
  subline: (
    <>
      I'm Leon, a software engineer with a Master's in Computer Science from{" "}
      <Text as="span" size="xl" weight="strong">
        UIUC
      </Text>
      . <br />I specialize in cloud computing, backend systems, and data
      infrastructure.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <>
          Based in the Bay Area, I'm seeking full-time opportunities in software
          engineering, product management, and decision science roles where I
          can leverage my technical background and analytical skills.
        </>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vitesse Data",
        timeframe: "May 2024 - September 2024",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Optimized SQL queries and ETL processes for banking clients,
            achieving significant runtime reductions and improving data pipeline
            efficiency.
          </>,
          <>
            Worked with data infrastructure and backend systems to support
            enterprise-level banking applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Illinois Urbana-Champaign",
        description: <>Master's in Computer Science, 2026</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend & Data Infrastructure",
        description: (
          <>
            Experience with SQL optimization, ETL processes, and data pipelines
            for enterprise applications.
          </>
        ),
        tags: [
          { name: "SQL", icon: "" },
          { name: "Python", icon: "" },
          { name: "ETL", icon: "" },
        ],
        images: [],
      },
      {
        title: "Cloud Computing & Systems",
        description: (
          <>
            Working on fault injection systems for AI agents and distributed
            systems reliability.
          </>
        ),
        tags: [
          { name: "Cloud Computing", icon: "" },
          { name: "System Design", icon: "" },
        ],
        images: [],
      },
      {
        title: "Full Stack Development",
        description: (
          <>
            Built applications using React, Firebase, FastAPI, and PostgreSQL.
          </>
        ),
        tags: [
          { name: "React", icon: "" },
          { name: "Firebase", icon: "" },
          { name: "FastAPI", icon: "" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav shadow-[0_1px_0_0_#444447,0_4px_12px_-2px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-lg font-semibold tracking-tight text-accent"
        >
          LT
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`h-0.5 w-5 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-border bg-nav px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-5">
        {/* Profile picture - left */}
        <div className="animate-fade-in-up flex justify-center md:col-span-2">
          <div className="rounded-2xl border-2 border-accent p-1">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl sm:h-72 sm:w-72">
              <Image
                src="/images/pp.jpg"
                alt="Leon Tan"
                fill
                className="object-cover object-[center_30%]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text - right */}
        <div className="md:col-span-3">
          <p className="animate-fade-in-up font-mono text-sm font-medium tracking-widest text-accent uppercase">
            Software Engineer
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-4 font-mono text-5xl font-bold tracking-tight sm:text-6xl">
            Leon Tan
          </h1>
          <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-relaxed text-text-secondary">
            Master&apos;s in Computer Science from the University of Illinois
            Urbana-Champaign. I specialize in backend systems, cloud computing,
            and data infrastructure. Seeking full-time opportunities in software
            engineering where I can build impactful, scalable solutions.
          </p>
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              See Experience
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a
        href="#education"
        className="animate-scroll-bounce absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}

function Education() {
  const coursework = [
    "Database Systems",
    "Distributed Systems",
    "Applied Machine Learning",
    "Cloud Computing",
    "Data Visualization",
    "Data Cleaning",
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Education" />
        <div className="mt-12 space-y-6">
          {/* UIUC */}
          <div className="card-glow rounded-xl border border-border bg-surface p-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <Image
                  src="/images/uiuc-logo.png"
                  alt="UIUC"
                  width={56}
                  height={56}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      University of Illinois Urbana-Champaign
                    </h3>
                    <p className="mt-1 text-accent">
                      Master&apos;s in Computer Science
                    </p>
                  </div>
                  <span className="mt-2 text-sm text-text-secondary sm:mt-0 sm:shrink-0">
                    Expected Spring 2026
                  </span>
                </div>
                <div className="mt-4">
                  <p className="mb-3 text-sm font-medium text-text-secondary">Coursework</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {coursework.map((course) => (
                      <div
                        key={course}
                        className="rounded-lg border border-border bg-bg px-3 py-2 text-center text-sm text-text-secondary"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UCSD */}
          <div className="card-glow rounded-xl border border-border bg-surface p-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#182B49]">
                  <span className="text-lg font-bold text-[#C69214]">UC</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      University of California, San Diego
                    </h3>
                    <p className="mt-1 text-accent">
                      BS Cognitive Science &ndash; HCI Concentration, Minor in Computer Science
                    </p>
                  </div>
                  <span className="mt-2 text-sm text-text-secondary sm:mt-0 sm:shrink-0">
                    Class of 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" />
        <div className="mt-12 space-y-6">
          {/* Vitesse Data */}
          <div className="card-glow rounded-xl border border-border bg-surface p-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#1a1a2e]">
                  <span className="font-mono text-lg font-bold text-accent">VD</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Vitesse Data</h3>
                    <p className="mt-1 text-accent">
                      Software Engineering Intern
                    </p>
                  </div>
                  <span className="mt-2 text-sm text-text-secondary sm:mt-0 sm:shrink-0">
                    May 2024 &ndash; September 2024
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Optimized clients&apos; SQL on data warehouse cluster, improving performance and response for various clients&apos; ETL processes. Helped to reduce 2 hours of daily ETL time for 3 banking clients.
                    </span>
                  </li>
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Identified and resolved more than 50 issues in existing codebase, and incorporated unit tests for those deficiencies.
                    </span>
                  </li>
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Collaborated with cross-functional teams to design and deploy software features aligned with client requirements and project milestones.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kinoyume */}
          <div className="card-glow rounded-xl border border-border bg-surface p-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#2d1f3d]">
                  <span className="font-mono text-lg font-bold text-[#e8a0bf]">K</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Kinoyume</h3>
                    <p className="mt-1 text-accent">
                      Product Management / Product Design Intern
                    </p>
                  </div>
                  <span className="mt-2 text-sm text-text-secondary sm:mt-0 sm:shrink-0">
                    Jan 2023 &ndash; April 2023
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Defined product vision and roadmap by gathering requirements from restaurant stakeholders, prioritizing features based on customer insights and business impact.
                    </span>
                  </li>
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Led a team of 3 product designers through iterative design cycles, conducted user testing to validate product decisions, and delivered a final stakeholder presentation showcasing measurable improvements.
                    </span>
                  </li>
                  <li className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>
                      Designed and delivered a high-fidelity prototype that enhanced the digital ordering experience, resulting in a 19% increase in customer engagement and a 3% increase in online orders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Trend Analysis & Data Quality Pipeline",
      tags: ["OpenRefine", "SQL", "SQLite", "GREL"],
      bullets: [
        "Cleaned 400K+ restaurant menu records using OpenRefine, developing GREL transformations to fix temporal anomalies, price outliers, and integrity violations.",
        "Built SQL validation framework with 15+ integrity checks, ensuring data consistency for decade-by-decade price trend analysis.",
        "Enabled identification of 3 distinct economic periods through menu price volatility patterns (1850\u20132020).",
      ],
    },
    {
      title: "Data Interpolation Pipeline Visualizations",
      tags: ["Python", "RBF", "Matplotlib"],
      bullets: [
        "Developed mathematical interpolation framework to convert sparse, unstructured field measurements into regular grid data suitable for pattern analysis.",
        "Implemented multiple modeling approaches (6 kernel functions) to represent different physical relationships, enabling optimal representation selection.",
        "Produced contour visualizations transforming complex electric potential data into interpretable equipotential maps.",
      ],
    },
    {
      title: "Academic Research Dashboard",
      tags: ["Python", "Plotly", "MySQL", "MongoDB", "Neo4j"],
      bullets: [
        "Wrote queries to discover trends in academic research data stored across MySQL, MongoDB, and Neo4j.",
        "Built customizable dashboards to visualize research trends based on user input.",
        "Extended queries into reusable templates with Python/Plotly.",
      ],
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Projects" />
        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-glow rounded-xl border border-border bg-surface p-8"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "React", "HTML/CSS"],
    },
    {
      title: "Technologies",
      skills: [
        "Tableau", "Pandas", "NumPy", "Jupyter", "MongoDB", "Neo4j",
        "AWS", "Google Cloud Platform", "Hadoop", "Apache Spark",
        "Kafka", "Docker", "Kubernetes",
      ],
    },
    {
      title: "Certificates",
      skills: ["Google Advanced Data Analytics", "Fundamentals of Computing"],
    },
  ];

  const interests = ["Travel", "Soccer", "Fashion", "Fragrances", "Gym", "Video Games"];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" />
        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Interests */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading title="Contact" />
        <p className="mt-6 text-text-secondary">
          I&apos;m currently looking for full-time opportunities. Feel free to
          reach out!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/leontan29"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:text-accent"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leontan29/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:text-accent"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:leontann29@gmail.com"
            className="card-glow flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:text-accent"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-text-secondary">
        &copy; {new Date().getFullYear()} Leon Tan. All rights reserved.
      </div>
    </footer>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-mono text-2xl font-bold">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

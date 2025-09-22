import React from 'react';
import './Projects.css';
import Card from '../Card/Card';

const projectData = [
  { title: "VIRTUAL ASSISTANT", bgImg: "https://picsum.photos/seed/project1/520/220" },
  { title: "AI Powered Fitness Website", bgImg: "https://picsum.photos/seed/project2/520/220" },
  { title: "AI CHATBOT", bgImg: "https://picsum.photos/seed/project3/520/220" },
  { title: "DATA ANALYSIS TOOL", bgImg: "https://picsum.photos/seed/project4/520/220" },
  { title: "ECOMMERCE PLATFORM", bgImg: "https://picsum.photos/seed/project5/520/220" },
  { title: "PORTFOLIO BUILDER", bgImg: "https://picsum.photos/seed/project6/520/220" },
  { title: "CODE EDITOR APP", bgImg: "https://picsum.photos/seed/project7/520/220" },
  { title: "TASK MANAGEMENT", bgImg: "https://picsum.photos/seed/project8/520/220" },
  { title: "SOCIAL MEDIA DASHBOARD", bgImg: "https://picsum.photos/seed/project9/520/220" },
  { title: "BLOG CMS", bgImg: "https://picsum.photos/seed/project10/520/220" },
  { title: "RESUME GENERATOR", bgImg: "https://picsum.photos/seed/project11/520/220" },
  { title: "COLOR PICKER", bgImg: "https://picsum.photos/seed/project12/520/220" },
  { title: "WEATHER APP", bgImg: "https://picsum.photos/seed/project13/520/220" },
  { title: "MEDICAL DIAGNOSIS AI", bgImg: "https://picsum.photos/seed/project14/520/220" },
  { title: "QUIZ APP", bgImg: "https://picsum.photos/seed/project15/520/220" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">
        <span>1+ YEAR EXPERIENCED IN PROJECTS</span>
      </h1>
      <div className="projects-slider">
        {projectData.map((project, index) => (
          <Card key={index} title={project.title} bgImg={project.bgImg} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

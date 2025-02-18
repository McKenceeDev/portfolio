import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Multara - Transit Management System",
      description: "A comprehensive platform for managing transit tickets with AI-powered document processing capabilities.",
      features: [
        "AI-powered document analysis with 95% accuracy",
        "Automated ticket processing reducing time from 48h to 15min",
        "Integration with payment systems and WhatsApp notifications",
        "Real-time analytics dashboard"
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "OpenAI API",
        "AWS Services",
        "Docker"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Phantom 6 - Referral Management System",
      description: "A full-stack application for managing referrals with advanced geolocation features and real-time tracking.",
      features: [
        "Geolocation-based tracking system",
        "Role-based access control",
        "Real-time messaging integration",
        "Advanced data analytics"
      ],
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Google Maps API",
        "WebSocket",
        "Redis"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 mb-8">
          Here are some of the key projects I've developed, showcasing my skills in full-stack development
          and AI integration.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
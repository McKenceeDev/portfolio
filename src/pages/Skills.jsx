import React from 'react';
import { 
  Cloud, 
  Bot, 
  Code, 
  Database, 
  Globe, 
  ShieldCheck, 
  GraduationCap, 
  Layers
} from 'lucide-react';

const SkillBar = ({ name, level, color }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} transition-all duration-500 ease-out`}
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ title, skills, icon: Icon, bgColor }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
    <div className="space-y-4">
      {skills.map(skill => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const CertificationCard = ({ title, issuer, date, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h4 className="font-semibold dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      bgColor: "bg-blue-500",
      skills: [
        { name: "AWS (Lambda, EC2, S3)", level: 85, color: "bg-blue-500" },
        { name: "Google Cloud Platform", level: 75, color: "bg-blue-500" },
        { name: "Docker", level: 80, color: "bg-blue-500" }
      ]
    },
    {
      title: "Inteligencia Artificial",
      icon: Bot,
      bgColor: "bg-purple-500",
      skills: [
        { name: "APIs de LLM", level: 90, color: "bg-purple-500" },
        { name: "Implementación IA", level: 85, color: "bg-purple-500" }
      ]
    },
    {
      title: "Desarrollo Web",
      icon: Code,
      bgColor: "bg-green-500",
      skills: [
        { name: "React/Node.js", level: 85, color: "bg-green-500" },
        { name: "MongoDB", level: 80, color: "bg-green-500" },
        { name: "APIs REST", level: 90, color: "bg-green-500" }
      ]
    },
    {
      title: "E-commerce & Marketing",
      icon: Globe,
      bgColor: "bg-yellow-500",
      skills: [
        { name: "Plataformas de pago", level: 85, color: "bg-yellow-500" },
        { name: "Marketing Digital", level: 80, color: "bg-yellow-500" },
        { name: "Herramientas ADS", level: 85, color: "bg-yellow-500" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Management",
      issuer: "Amazon Institute",
      date: "2023",
      icon: Cloud
    },
    {
      title: "Redes Cisco CCNA",
      issuer: "Amazon Institute",
      date: "2023",
      icon: Layers
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Habilidades Técnicas</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Especializado en desarrollo web, cloud computing e inteligencia artificial, 
          con un enfoque en soluciones innovadoras y escalables.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 dark:text-white">Certificaciones</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 dark:text-white">Educación</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg h-min">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg dark:text-white">Maestría en Transformación Digital</h3>
              <p className="text-gray-600 dark:text-gray-300">Corporación Universitaria Uniminuto</p>
              <p className="text-gray-500">En curso - 2025</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg h-min">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg dark:text-white">Ingeniería de Sistemas</h3>
              <p className="text-gray-600 dark:text-gray-300">Universidad Libre Seccional Pereira</p>
              <p className="text-gray-500">2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
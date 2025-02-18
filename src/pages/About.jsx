import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Heart,
  Search,
  Users,
  Target
} from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Systems Engineer with entrepreneurial experience, transitioning into full-stack development
            while pursuing a Master's in Digital Transformation.
          </p>
        </div>

        {/* Personal Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">My Journey</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Born in 1986, my journey has been one of continuous evolution and learning. As a father of two wonderful children, 
              Ivanna and Juan Diego, I've learned the importance of adaptability and growth.
            </p>
            <p className="mb-4">
              For 10 years, I managed a successful clothing retail business, developing strong problem-solving
              skills and a deep understanding of customer needs. This experience taught me invaluable lessons
              about leadership, strategic thinking, and the importance of delivering value.
            </p>
            <p className="mb-4">
              Currently based in Pereira, Colombia, I'm pursuing a Master's in Digital Transformation
              while building innovative web solutions. My natural curiosity drives me to constantly
              research and learn about new technologies and their practical applications.
            </p>
          </div>
        </div>

        {/* Values and Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-8 w-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">What I Value</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Continuous Learning</li>
              <li>Problem Solving</li>
              <li>User-Centric Design</li>
              <li>Code Quality</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Goals</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Master Modern Web Development</li>
              <li>Contribute to Innovative Projects</li>
              <li>Specialize in AI Integration</li>
              <li>Share Knowledge with Others</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">How I Work</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Collaborative Approach</li>
              <li>Clear Communication</li>
              <li>Detail-Oriented</li>
              <li>Results-Driven</li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold">Master's in Digital Transformation</h3>
                <p className="text-gray-600">Currently pursuing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold">Systems Engineering</h3>
                <p className="text-gray-600">Foundation in software development principles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Beyond Coding</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              When I'm not coding or learning about new technologies, I enjoy:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li>Researching various topics and staying curious</li>
              <li>Spending quality time with my children</li>
              <li>Exploring new business ideas and innovations</li>
              <li>Contributing to the tech community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
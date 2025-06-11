import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ERP for Manufacturing',
      description:
        'A modern ERP (Enterprise Resource Planning) web application built with Next.js, React, Hono, and MongoDB. It provides modules for managing customers, enquiries, quotations, purchase orders, supplier delivery challans, companies, and user authentication/authorization.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [
        'React',
        'Next.js',
        'MongoDB',
        'Hono',
        'Tailwind CSS',
        'Shadcn UI',
      ],
      liveUrl: 'https://erp-henna-rho.vercel.app',
      githubUrl: 'https://github.com/floating-dynamo/erp',
      featured: true,
    },
    {
      id: 2,
      title: 'DrawED',
      description:
        'Built a daily drawing app where users select categories for drawing prompts and build a consistent creative habit.',
      image:
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
      liveUrl: 'https://drawed.vercel.app',
      githubUrl: 'https://github.com/floating-dynamo/drawed',
      featured: false,
    },
    {
      id: 3,
      title: 'VoterQ',
      description:
        'A React Native mobile app for the North Goa Government to support state elections.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Django', 'AWS', 'Mobile App'],
      liveUrl:
        'https://drive.google.com/drive/folders/1DYuRL5xdSfy4LJakoeD7iO9y98DVmETO',
      githubUrl: 'https://github.com/floating-dynamo/VoterQ',
      featured: true,
    },
    {
      id: 4,
      title: 'Music Player',
      description:
        'A modern music player web application built with HTML, CSS and JavaScript. It features a sleek design, responsive layout.',
      image:
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://floating-dynamo.github.io/Music-Player/',
      githubUrl: 'https://github.com/floating-dynamo/Music-Player',
      featured: false,
    },
    {
      id: 5,
      title: 'Task Management System - REST',
      description:
        'A comprehensive task management system built using Node.Js. It allows users to create, update, delete, and manage tasks with features like user authentication, task categorization, and priority levels.',
      image:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'JWT', 'Express', 'Multer', 'MongoDB'],
      liveUrl: 'https://github.com/floating-dynamo/task-manager-rest-api',
      githubUrl: 'https://github.com/floating-dynamo/task-manager-rest-api',
      featured: false,
    },
    {
      id: 6,
      title: 'SpendWise',
      description:
        'Personalized Expense Tracker App built with React TS, Shadcn and Tailwind CSS. It helps users track their expenses.',
      image:
        'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
      liveUrl: 'https://spend-wise-three.vercel.app',
      githubUrl: 'https://github.com/floating-dynamo/SpendWise',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            My <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in building modern web applications.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-green-500 text-slate-950">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-slate-950"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3
                  className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-green-400 transition-colors duration-200"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-2 w-full">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-slate-950"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 hover:bg-slate-800"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 hover:bg-slate-800"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Youtube, BookOpen } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'playlist' | 'blog';
  topics: string[];
}

const Resources = () => {
  const resources: Resource[] = [
    // JavaScript Resources
    {
      id: 1,
      title: 'JavaScript.info - The Modern JavaScript Tutorial',
      description: 'Comprehensive guide covering JavaScript from basics to advanced concepts with interactive examples.',
      url: 'https://javascript.info/',
      type: 'blog',
      topics: ['JavaScript']
    },
    {
      id: 2,
      title: 'JavaScript Interview Questions',
      description: 'Deep dive into JavaScript concepts including closures, promises, async/await, and event loop.',
      url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
      type: 'video',
      topics: ['JavaScript']
    },
    {
      id: 3,
      title: 'Namaste JavaScript by Akshay Saini',
      description: 'Complete playlist covering JavaScript fundamentals, closures, async programming, and advanced concepts.',
      url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
      type: 'playlist',
      topics: ['JavaScript']
    },
    
    // React Resources
    {
      id: 4,
      title: 'React Official Documentation',
      description: 'Official React docs with comprehensive guides, API reference, and best practices.',
      url: 'https://react.dev/',
      type: 'blog',
      topics: ['React']
    },
    {
      id: 5,
      title: 'Namaste React by Akshay Saini',
      description: 'In-depth React series covering hooks, performance optimization, Redux, and real-world project building.',
      url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
      type: 'playlist',
      topics: ['React']
    },
    {
      id: 6,
      title: 'React Hooks Explained',
      description: 'Complete guide to React Hooks including useState, useEffect, useContext, and custom hooks.',
      url: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
      type: 'video',
      topics: ['React']
    },
    
    // System Design Resources
    {
      id: 7,
      title: 'System Design Primer',
      description: 'GitHub repository with comprehensive system design concepts, case studies, and interview preparation.',
      url: 'https://github.com/donnemartin/system-design-primer',
      type: 'blog',
      topics: ['System Design']
    },
    {
      id: 8,
      title: 'System Design Interview by Gaurav Sen',
      description: 'Popular playlist covering scalability, load balancing, caching, databases, and distributed systems.',
      url: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX',
      type: 'playlist',
      topics: ['System Design']
    },
    {
      id: 9,
      title: 'Designing Instagram',
      description: 'Complete walkthrough of designing a scalable social media platform like Instagram.',
      url: 'https://www.youtube.com/watch?v=QmX2NPkJTKg',
      type: 'video',
      topics: ['System Design']
    },
    
    // Node.js Resources
    {
      id: 10,
      title: 'Node.js Official Documentation',
      description: 'Official Node.js documentation covering APIs, modules, and best practices.',
      url: 'https://nodejs.org/docs/latest/api/',
      type: 'blog',
      topics: ['Node.js']
    },
    {
      id: 11,
      title: 'Node.js Complete Course by freeCodeCamp',
      description: 'Full tutorial covering Node.js fundamentals, Express, REST APIs, and database integration.',
      url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
      type: 'video',
      topics: ['Node.js']
    },
    {
      id: 12,
      title: 'Node.js Design Patterns',
      description: 'Advanced Node.js patterns including middleware, error handling, and scalable architecture.',
      url: 'https://www.nodejsdesignpatterns.com/',
      type: 'blog',
      topics: ['Node.js']
    },
  ];

  const topics = ['JavaScript', 'React', 'System Design', 'Node.js'];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
      case 'playlist':
        return <Youtube className="w-5 h-5 text-red-400" />;
      case 'blog':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Learning <span className="text-green-400">Resources</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Curated collection of resources for interview preparation and learning key technologies.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter by Topic */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {topics.map((topic) => (
            <Badge
              key={topic}
              variant="outline"
              className="px-4 py-2 text-sm border-green-400/30 bg-green-400/5 text-green-400 hover:bg-green-400/10"
            >
              {topic}
            </Badge>
          ))}
        </div>

        {/* Resources by Topic */}
        {topics.map((topic) => (
          <div key={topic} className="mb-12">
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
              <span className="text-green-400 mr-2">#</span>
              {topic}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((resource) => resource.topics.includes(topic))
                .map((resource) => (
                  <Card
                    key={resource.id}
                    className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        {getResourceIcon(resource.type)}
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-700/50 text-slate-300"
                        >
                          {resource.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-slate-100 group-hover:text-green-400 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-sm">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                      >
                        Visit Resource
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;

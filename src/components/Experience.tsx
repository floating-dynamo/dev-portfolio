import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building2, Award, TrendingUp, Briefcase } from 'lucide-react';

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string[];
  technologies: string[];
  achievements?: string[];
  isActive?: boolean;
}

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const workExperiences: WorkExperience[] = [
    {
      id: 0,
      title: 'Software Engineer',
      company: 'Mphasis',
      location: 'Bengaluru, Karnataka, India',
      period: 'Jul 2024 - Present',
      startDate: '2024-07',
      type: 'Full-time',
      description: [
        'Working for HP @Bangalore Research Center.',
        'Engineered and maintained scalable Micro Frontends with a focus on performance, accessibility, and responsiveness using enforced coding standards and best efforts to migrate a monolithic architecture into modular MFEs.',
        'Enabled seamless multilingual support through localization using i18n and Lokalise, enhancing global user experience.',
        'Built internal tools and automation scripts in TypeScript and Node.js, including a custom AI-powered VS Code extension for AI Code Reviews to ease development tool. LLMs with Ollama to optimize developer productivity.',
        'Ensured application reliability through comprehensive unit testing with Jest and end-to-end testing with Cypress across critical user flows.',
      ],
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Jest', 'Cypress', 'i18n', 'Lokalise', 'Micro Frontends'],
      achievements: [
        'Migrated monolithic architecture to modular MFEs',
        'Built custom AI-powered VS Code extension',
        'Enhanced global user experience with multilingual support'
      ],
      isActive: true
    },
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Persistent Systems',
      location: 'Goa, India',
      period: 'Apr 2024 - Jul 2024',
      startDate: '2024-04',
      endDate: '2024-07',
      type: 'Full-time',
      description: [
        'Led data migration of large-scale customer datasets from a legacy system to a modern AWS-hosted backend using a PowerBI-integrated pipeline, implementing automation that reduced migration time by 50%, from 1 month to 2 weeks.',
      ],
      technologies: ['AWS CDK', 'Node.js', 'PowerBI', 'Data Migration'],
      achievements: [
        'Reduced migration time by 50%',
        'Successfully migrated large-scale customer datasets'
      ]
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Persistent Systems',
      location: 'Goa, India',
      period: 'Aug 2022 - Apr 2024',
      startDate: '2022-08',
      endDate: '2024-04',
      type: 'Full-time',
      description: [
        'Awarded Bravo Team and Bravo Individual honors for consistently delivering high-impact project outcomes and maintaining exceptional code quality.',
        'Selected as Top Talent 2023 in recognition of outstanding performance, resulting in an early promotion.',
        'Led the team to rank in the top 8 of 104 global teams in PSL\'s annual hackathon. SemicolonIOS, earning the special "All GEMS Team" prize.',
        'Developed a full-cycle invoice testing automation tool for a client\'s SaaS platform using AWS Lambda and DynamoDB, accelerating test coverage and improving bug reporting efficiency.',
        'Engineered an enterprise-grade invoice management system with React and TypeScript, integrating Material-UI and React Hook Form to deliver a polished UI and robust data validation.',
        'Built Node.js and TypeScript automation scripts to streamline data loading processes, reducing manual effort and enhancing data generation throughput.',
        'Spearheaded a proof of concept for a React TypeScript application enabling CSV uploads, with a Node.js backend for MySQL integration and Power BI dashboards to provide revenue insights.'
      ],
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Material-UI', 'Node.js', 'MySQL', 'Power BI'],
      achievements: [
        'Awarded Bravo Team and Individual honors',
        'Selected as Top Talent 2023',
        'Ranked top 8 of 104 global teams in hackathon',
        'Won "All GEMS Team" prize'
      ]
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-experience-id') || '0');
            setActiveExperience(id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44));
    
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    }
    
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Work <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development, where I've contributed to building scalable solutions and driving innovation.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 bg-slate-700 h-full"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <div
                key={experience.id}
                ref={(el) => experienceRefs.current[index] = el}
                data-experience-id={experience.id}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className={`absolute left-2.5 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                  activeExperience === index
                    ? 'bg-green-400 shadow-lg shadow-green-400/50'
                    : 'bg-slate-600 group-hover:bg-green-400'
                }`}>
                  {activeExperience === index && (
                    <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping"></div>
                  )}
                </div>

                {/* Content Container */}
                <div className={`pl-12 lg:pl-0 ${
                  index % 2 === 0 
                    ? 'lg:pr-1/2' 
                    : 'lg:pl-1/2'
                } group`}>
                  {/* Date Badge */}
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full px-3 py-1">
                      <span className="text-green-400 font-semibold text-sm">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  {/* Experience Card */}
                  <Card 
                    className={`bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 backdrop-blur-sm ${
                      activeExperience === index ? 'ring-2 ring-green-400/30 shadow-lg shadow-green-400/10' : ''
                    } group`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                            <Briefcase className="w-5 h-5 text-green-400" />
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`${experience.type === 'Full-time' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}
                          >
                            {experience.type}
                          </Badge>
                          {experience.isActive && (
                            <Badge className="bg-green-500 text-slate-950 animate-pulse">
                              Current
                            </Badge>
                          )}
                        </div>
                        
                        <div>
                          <CardTitle className="text-xl font-bold text-slate-100 mb-2 group-hover:text-green-400 transition-colors duration-300">
                            {experience.title}
                          </CardTitle>
                          
                          <div className="flex items-center gap-2 text-green-400 font-semibold mb-3">
                            <Building2 className="w-4 h-4" />
                            {experience.company}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {calculateDuration(experience.startDate, experience.endDate)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-2">
                              <div className="w-1 h-1 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-green-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="text-green-400/80 leading-relaxed flex items-start gap-2">
                                <div className="w-1 h-1 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs bg-slate-800/50 text-slate-300 border-slate-600 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-slate-300">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-slate-300">Companies</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-slate-300">Technologies</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

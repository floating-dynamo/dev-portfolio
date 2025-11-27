import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  const workExperiences: WorkExperience[] = [
    {
      id: 0,
      title: 'Software Engineer',
      company: 'Builder.io',
      location: 'Remote',
      period: 'Oct 2024 - Present',
      startDate: '2024-10',
      type: 'Full-time',
      description: [
        'Building innovative AI-powered development tools and visual development platform.',
      ],
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Redis', 'GCP'],
      isActive: true
    },
    {
      id: 1,
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
      isActive: false
    },
    {
      id: 3,
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
      id: 4,
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

        {/* Horizontal Timeline Section */}
        <div className="mt-32 mb-20">
          {/* Horizontal Timeline */}
          <div className="relative pb-8">
            {/* Desktop Layout - Horizontal */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-center gap-24 px-8 relative">
                {/* Continuous horizontal line */}
                <div className="absolute top-[52px] left-8 right-8 h-0.5 bg-slate-600 z-0"></div>
                
                {workExperiences.map((experience, index) => (
                  <div key={experience.id} className="flex flex-col items-center relative z-10 max-w-xs">
                    {/* Year Label */}
                    <div className="mb-4">
                      <span className="text-green-400 font-bold text-lg">
                        {experience.startDate.split('-')[0]}
                      </span>
                    </div>

                    {/* Timeline Circle */}
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 bg-slate-900 ${
                        index === 0
                          ? 'border-green-400'
                          : 'border-slate-600 hover:border-green-400'
                      }`}>
                      </div>
                    </div>

                    {/* Company & Role Info */}
                    <div className="mt-4 text-center">
                      <h4 className="text-slate-100 font-semibold text-sm mb-1">
                        {experience.title}
                      </h4>
                      <p className="text-green-400 font-medium text-xs mb-2">
                        {experience.company}
                      </p>
                      <p className="text-slate-500 text-xs mb-3">
                        {experience.period}
                      </p>
                      
                      {/* Condensed Description */}
                      <div className="text-xs text-slate-400 space-y-1 text-left">
                        {experience.description.slice(0, 2).map((desc, i) => (
                          <p key={i} className="leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>

                      {/* Key Technologies */}
                      <div className="mt-3 flex flex-wrap gap-1 justify-center">
                        {experience.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2 py-0 bg-slate-800/30 text-slate-400 border-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-600 z-0"></div>
                
                <div className="space-y-8">
                  {workExperiences.map((experience, index) => (
                    <div key={experience.id} className="relative flex items-start">
                      {/* Timeline Circle */}
                      <div className="relative z-10 mr-6">
                        <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 bg-slate-900 ${
                          index === 0  // First item (latest/current) should be green
                            ? 'border-green-400 shadow-lg shadow-green-400/50'
                            : 'border-slate-600'
                        }`}>
                          {/* Inner dot for active state */}
                          {index === 0 && (
                            <div className="absolute inset-1 bg-green-400 rounded-full"></div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        {/* Year Label */}
                        <div className="mb-2">
                          <span className="text-green-400 font-bold text-base">
                            {experience.startDate.split('-')[0]}
                          </span>
                        </div>

                        {/* Company & Role Info */}
                        <div>
                          <h4 className="text-slate-100 font-semibold text-base mb-1">
                            {experience.title}
                          </h4>
                          <p className="text-green-400 font-medium text-sm mb-2">
                            {experience.company}
                          </p>
                          <p className="text-slate-500 text-sm mb-3">
                            {experience.period}
                          </p>
                          
                          {/* Condensed Description */}
                          <div className="text-sm text-slate-400 space-y-1 mb-3">
                            {experience.description.slice(0, 2).map((desc, i) => (
                              <p key={i} className="leading-relaxed">
                                • {desc}
                              </p>
                            ))}
                          </div>

                          {/* Key Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.slice(0, 4).map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs px-2 py-0 bg-slate-800/30 text-slate-400 border-slate-600"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
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

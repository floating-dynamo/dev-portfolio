import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ReactIcon from '/public/skill-icons/react.svg';
import TypeScriptIcon from '/public/skill-icons/typescript.svg';
import NextjsIcon from '/public/skill-icons/nextjs.svg';
import TailwindIcon from '/public/skill-icons/tailwindcss.svg';
import Html5Icon from '/public/skill-icons/html5.svg';
import Css3Icon from '/public/skill-icons/css3.svg';
import NodejsIcon from '/public/skill-icons/nodejs.svg';
import ExpressjsIcon from '/public/skill-icons/expressjs.svg';
import PostgresqlIcon from '/public/skill-icons/postgresql.svg';
import MongodbIcon from '/public/skill-icons/mongodb.svg';
import GitIcon from '/public/skill-icons/git.svg';
import GithubIcon from '/public/skill-icons/github.svg';
import AwsIcon from '/public/skill-icons/aws.svg';
import FirebaseIcon from '/public/skill-icons/firebase.svg';
import JestIcon from '/public/skill-icons/jest.svg';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        {
          name: 'React.js',
          level: 95,
          icon: ReactIcon,
        },
        { name: 'TypeScript', level: 90, icon: TypeScriptIcon },
        { name: 'Next.js', level: 85, icon: NextjsIcon },
        { name: 'Tailwind CSS', level: 90, icon: TailwindIcon },
        { name: 'HTML5/CSS3', level: 95, icon: [Html5Icon, Css3Icon] },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, icon: NodejsIcon },
        { name: 'Express.js', level: 85, icon: ExpressjsIcon },
        { name: 'MySQL', level: 85, icon: PostgresqlIcon },
        { name: 'MongoDB', level: 80, icon: MongodbIcon },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: [GitIcon, GithubIcon] },
        { name: 'AWS', level: 70, icon: AwsIcon },
        { name: 'Firebase', level: 60, icon: FirebaseIcon },
        { name: 'Jest/Testing', level: 85, icon: JestIcon },
      ],
    },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'React Developer Certification',
    'Node.js Application Developer',
    'Google Analytics Certified',
  ];

  // const getSkillColor = (level: number) => {
  //   if (level >= 90) return 'bg-green-500';
  //   if (level >= 80) return 'bg-blue-500';
  //   if (level >= 70) return 'bg-yellow-500';
  //   return 'bg-slate-500';
  // };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            My <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise and
            proficiency levels across various technologies and tools.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle
                  className="text-xl text-slate-100 text-center"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg flex items-center gap-1">
                          {Array.isArray(skill.icon) ? (
                            skill.icon.map((iconSrc, i) => (
                              <img
                                key={i}
                                src={iconSrc}
                                alt={skill.name + ' icon'}
                                className="w-6 h-6"
                              />
                            ))
                          ) : (
                            <img
                              src={skill.icon}
                              alt={skill.name + ' icon'}
                              className="w-6 h-6"
                            />
                          )}
                        </span>
                        <span className="text-slate-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-green-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-slate-800"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle
                className="text-xl text-slate-100 flex items-center"
                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                <span className="text-2xl mr-3">🏆</span>
                Experience Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">Years of Experience</span>
                  <span className="text-green-400 font-semibold">3+ Years</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">Projects Completed</span>
                  <span className="text-green-400 font-semibold">5+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">Technologies Mastered</span>
                  <span className="text-green-400 font-semibold">10+</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-300">Client Satisfaction</span>
                  <span className="text-green-400 font-semibold">100%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle
                className="text-xl text-slate-100 flex items-center"
                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                <span className="text-2xl mr-3">📜</span>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Skills Overview */}
        <Card className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-slate-700">
          <CardContent className="p-8">
            <h3
              className="text-2xl font-bold text-slate-100 mb-6 text-center"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Node.js',
                'Next.js',
                'Express',
                'MongoDB',
                'PostgreSQL',
                'React Native',
                'HTML5',
                'CSS3',
                'Python',
                'AWS',
                'Docker',
                'Git',
                'Firebase',
                'Tailwind CSS',
                'Jest',
                'Cypress',
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-green-500/20 hover:text-green-400 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;

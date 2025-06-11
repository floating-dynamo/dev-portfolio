import { Download, Award, Coffee, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Senior Full Stack Developer',
      description:
        '3+ years of experience building scalable web applications with modern technologies and best practices.',
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description:
        'Passionate about tackling complex challenges and turning innovative ideas into functional, user-friendly solutions.',
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description:
        'Strong communication skills with experience leading development teams and mentoring junior developers.',
    },
  ];

  const downloadResume = () => {
    // In a real application, this would download an actual resume file
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/file/d/1e_PG6BGucXfBOkR1t8FosU4AqgD1Sur2/view?usp=drive_link';
    link.download = 'Sridhar_Maskeri_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Who <span className="text-green-400">Am I?</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 text-slate-100"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              I'm a Full Stack Developer specialized in Frontend.
            </h3>

            <p className="text-slate-400 mb-6 leading-relaxed">
              <b>Programming is more than a profession, it's my passion.</b>{' '}
              With over 3 years of experience in web development, I&apos;ve
              worked on a wide range of projects, from small business websites
              to robust, enterprise-level applications. This journey has
              sharpened my technical skills and deepened my love for solving
              complex problems through clean, efficient code.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Outside of tech, I find balance and inspiration through sketching,
              jogging, and playing badminton. These hobbies not only keep me
              energized but also shape my creativity, focus, and discipline,
              qualities I bring into my work every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-500 hover:bg-green-600 text-slate-950 font-semibold"
                onClick={downloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="border-slate-600 hover:bg-slate-800"
              >
                View My Projects
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-colors duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4
                          className="text-lg font-semibold text-slate-100 mb-2"
                          style={{
                            fontFamily: 'Bricolage Grotesque, sans-serif',
                          }}
                        >
                          {highlight.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

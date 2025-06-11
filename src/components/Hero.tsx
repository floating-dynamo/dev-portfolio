import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProfileImage from '/public/sridhar-maskeri.png';

// const GITHUB_USER_IMAGE_URL =
//   'https://avatars.githubusercontent.com/u/65811224?s=400&u=e4241a927da1574d05573a55ceb18a4909b30188&v=4';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge
              variant="secondary"
              className="mb-4 bg-green-500/10 text-green-400 border-green-500/20"
            >
              Available for Work
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              I'm <span className="text-green-400">Sridhar Maskeri</span>
              <br />
              <span className="text-slate-300">Full Stack Developer</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl">
              Passionate about creating exceptional digital experiences with
              modern technologies. I build scalable web applications that solve
              real-world problems and deliver outstanding user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-slate-950 font-semibold"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 hover:bg-slate-800"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-800">
              <div className="text-center lg:text-left">
                <div
                  className="text-2xl sm:text-3xl font-bold text-green-400"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  3+
                </div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-2xl sm:text-3xl font-bold text-green-400"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  5+
                </div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-2xl sm:text-3xl font-bold text-green-400"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  2+
                </div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={ProfileImage}
                    alt="Sridhar Maskeri - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-slate-800/80 rounded-lg p-3 backdrop-blur-sm border border-slate-700">
                <div className="text-green-400 font-semibold text-sm">
                  Frontend Expert
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-800/80 rounded-lg p-3 backdrop-blur-sm border border-slate-700">
                <div className="text-green-400 font-semibold text-sm">
                  Backend Pro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

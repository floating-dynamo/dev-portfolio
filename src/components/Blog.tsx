import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const links = [
    {
      id: 'medium',
      name: 'Medium',
      href: 'https://medium.com/@shridharmaskeri',
      hint: 'Latest posts on Medium',
      accent: 'from-green-500/10 to-blue-500/10',
      chip: '@shridharmaskeri',
      letter: 'M',
    },
    {
      id: 'hashnode',
      name: 'Hashnode',
      href: 'https://sridharmaskeri.hashnode.dev/',
      hint: 'Dev blog on Hashnode',
      accent: 'from-purple-500/10 to-cyan-500/10',
      chip: 'sridharmaskeri.hashnode.dev',
      letter: 'H',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Blog <span className="text-green-400">Posts</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Read my latest writing across the web. <br />
            I share articles on engineering, web, and developer productivity.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name} profile`}
              className="group"
            >
              <Card className={`bg-gradient-to-br ${item.accent} border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    {/* Brand mark */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-200">
                        {item.letter}
                      </div>
                      <div>
                        <div className="text-slate-100 font-semibold text-lg group-hover:text-green-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-slate-400 text-sm">{item.hint}</div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/10 text-green-400 border-green-500/20"
                    >
                      {item.chip}
                    </Badge>
                    <span className="text-xs text-slate-500">External link</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

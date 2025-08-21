import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Server, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'text-blue-400'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'text-green-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS & Android',
      color: 'text-purple-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Prototyping, User Research',
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-white/80 leading-relaxed">
              Started my journey in computer science with a fascination for how technology 
              can solve real-world problems. Over the years, I've worked with startups and 
              established companies, building everything from simple websites to complex 
              enterprise applications.
            </p>
            <p className="text-white/80 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest 
              technologies. When I'm not coding, you'll find me exploring new frameworks, 
              contributing to open-source projects, or mentoring fellow developers.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Experience</span>
                <span className="text-white font-semibold">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Projects Completed</span>
                <span className="text-white font-semibold">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Happy Clients</span>
                <span className="text-white font-semibold">30+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Coffee Consumed</span>
                <span className="text-white font-semibold">∞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="glass border-white/20 hover:glow transition-all duration-300 bg-transparent">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4`}>
                  <skill.icon className={`h-8 w-8 ${skill.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-white/70 text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
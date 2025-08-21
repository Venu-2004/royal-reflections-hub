import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const ResumeSection = () => {
  const experiences = [
    {
      company: 'Tech Innovation Corp',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Lead development of enterprise applications using React, Node.js, and cloud technologies. Mentored junior developers and architected scalable solutions.',
    },
    {
      company: 'Digital Solutions Ltd',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and improved user experience across multiple platforms. Collaborated with design teams to implement pixel-perfect interfaces.',
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Built MVP products and contributed to rapid prototyping. Gained experience in agile development and modern JavaScript frameworks.',
    }
  ];

  const education = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Computer Science',
      period: '2015 - 2019',
      description: 'Specialized in Software Engineering with honors. Participated in coding competitions and open-source projects.',
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Cloud Professional Developer',
    'React Developer Certification',
    'Scrum Master Certified'
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Resume
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My professional journey and qualifications that make me the right fit for your next project.
          </p>
        </div>

        {/* Download Resume Section with Profile Photo */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={profilePhoto}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
              />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
              <p className="text-white/70 mb-4">Full Stack Developer | 5+ Years Experience</p>
              <p className="text-white/60 mb-6">
                Passionate about creating scalable web applications and delivering exceptional user experiences.
              </p>
              <Button size="lg" className="glow">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary rounded-full">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass border-white/20 bg-transparent">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-1">{exp.position}</h4>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-white/60 text-sm mb-3">{exp.period}</p>
                    <p className="text-white/80 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary rounded-full">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="glass border-white/20 bg-transparent">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                    <p className="text-white/60 text-sm mb-3">{edu.period}</p>
                    <p className="text-white/80 leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <Card className="glass border-white/20 bg-transparent">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-white/80">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
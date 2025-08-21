import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies. 
            Passionate about creating beautiful, functional, and user-friendly applications.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" className="glass hover:glow">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass hover:glow">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass hover:glow">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="glass">
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
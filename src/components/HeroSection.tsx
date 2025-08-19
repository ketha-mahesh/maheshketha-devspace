import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-section">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Hyderabad, Telangana</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Mahesh</span>{" "}
              <span className="gradient-hero bg-clip-text text-transparent">Ketha</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              Full Stack Developer | Java | React | Spring Boot
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              I design and build scalable, user-friendly applications by combining strong backend architecture with responsive frontend design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gradient-hero glow-effect transition-bounce hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth hover:border-primary hover:text-primary">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/maheshketha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ketha-mahesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="mailto:kmahesh3335@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-slide-up lg:order-first">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional developer workspace" 
                className="w-full h-auto rounded-2xl card-professional"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
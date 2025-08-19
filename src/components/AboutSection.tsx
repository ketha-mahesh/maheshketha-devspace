import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Database Management",
      description: "Proficient in MySQL and MongoDB design"
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: "Cloud & DevOps",
      description: "Experience with AWS, Docker, and CI/CD pipelines"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance Focus",
      description: "Optimizing applications for speed and scalability"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              I am a B.Tech Computer Science graduate specializing in Full Stack Development with expertise in Java, Spring Boot, Node.js, React.js, and databases (MySQL/MongoDB). I am passionate about building secure REST APIs, scalable applications, and deploying solutions using Docker, AWS, and CI/CD pipelines.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Years of Experience</h4>
                  <p className="text-muted-foreground text-sm">Building modern web applications</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">200+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Problems Solved</h4>
                  <p className="text-muted-foreground text-sm">On CodeChef & LeetCode platforms</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-professional border-0 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Database, 
  Settings,
  Laptop,
  Globe,
  Wrench
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Angular", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Backend",
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Redis", "Database Design", "Query Optimization"]
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Postman", "Maven", "Docker", "AWS (EC2, S3)", "CI/CD", "Linux", "Agile/Scrum"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-professional border-0 h-full animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="card-professional border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development with modern frameworks and best practices
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Architecture
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Designing scalable, maintainable, and secure application architectures
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Optimization
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Performance tuning and optimization for better user experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
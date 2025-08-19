import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Java Developer Intern",
      company: "Codeveda Technologies",
      duration: "Jun 2025 – Jul 2025",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Built REST APIs with JWT authentication using Spring Boot",
        "Improved backend response time by 15% through optimization",
        "Collaborated with cross-functional teams on feature development",
        "Implemented secure authentication and authorization systems"
      ],
      technologies: ["Spring Boot", "MySQL", "React.js", "JWT", "REST APIs"],
      metrics: {
        icon: <TrendingUp className="w-4 h-4 text-success" />,
        value: "15%",
        label: "Performance Improvement"
      }
    },
    {
      role: "Web Developer Intern", 
      company: "NullClass",
      duration: "Jan 2025 – Jun 2025",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Designed and deployed a comprehensive Q&A platform",
        "Improved application load time by 20% through optimization",
        "Implemented secure authentication & role-based access control",
        "Recognized as Top Performer for exceptional contribution"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Authentication"],
      metrics: {
        icon: <Award className="w-4 h-4 text-primary" />,
        value: "Top",
        label: "Performer Award"
      }
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building expertise through hands-on development and impactful contributions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-professional border-0 animate-fade-in">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mt-3">
                      {exp.type}
                    </Badge>
                    
                    {/* Key Metric */}
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        {exp.metrics.icon}
                        <span className="font-semibold text-lg">{exp.metrics.value}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{exp.metrics.label}</p>
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="lg:col-span-2">
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Overall Experience Summary */}
        <div className="mt-12">
          <Card className="card-professional border-0 max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-4">Experience Highlights</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Internships</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">35%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Avg Performance Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">6+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Technologies Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
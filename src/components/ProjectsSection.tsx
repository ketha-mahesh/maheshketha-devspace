import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Shopping Platform",
      description: "Full stack application with comprehensive e-commerce features including product catalog, shopping cart, and secure payment processing. Built with modern technologies for optimal performance and user experience.",
      features: [
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality", 
        "Secure payment gateway integration",
        "JWT-based authentication system",
        "Admin dashboard for inventory management",
        "Responsive design for all devices"
      ],
      technologies: ["React.js", "Spring Boot", "MySQL", "JWT", "Redis", "Docker"],
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Smart Assistive Device for Visually Impaired",
      description: "IoT-enabled assistive technology solution featuring real-time object detection and text recognition. Includes a React.js dashboard for monitoring and configuration with cloud-based data processing.",
      features: [
        "Real-time object detection using YOLOv8n",
        "Text recognition with EasyOCR",
        "Voice feedback and audio alerts",
        "Real-time monitoring dashboard",
        "Cloud-based data processing",
        "Mobile-responsive interface"
      ],
      technologies: ["React.js", "Node.js", "Python", "YOLOv8n", "EasyOCR", "AWS S3"],
      icon: <Eye className="w-6 h-6 text-primary" />,
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-professional border-0 h-full animate-fade-in">
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-smooth hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-smooth hover:border-primary hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg" className="transition-smooth hover:border-primary hover:text-primary">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
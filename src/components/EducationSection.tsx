import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = {
    degree: "B.Tech in Computer Science",
    institution: "Sasi Institute of Engineering, JNTUK",
    duration: "2022 – 2025",
    cgpa: "8.0/10",
    location: "Andhra Pradesh, India",
    highlights: [
      "Strong foundation in Computer Science fundamentals",
      "Specialized coursework in Software Engineering and Database Systems",
      "Active participation in coding competitions and technical events",
      "Consistent academic performance with focus on practical applications"
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "System Design"
    ]
  };

  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-success" />,
      title: "Coding Excellence",
      description: "Solved 200+ problems on CodeChef & LeetCode",
      metric: "200+"
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "Top Performer",
      description: "Recognized during NullClass Internship",
      metric: "Top"
    },
    {
      icon: <Award className="w-5 h-5 text-warning" />,
      title: "Performance Boost",
      description: "Improved systems by 15-20% consistently",
      metric: "20%"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic foundation and recognitions that shaped my technical journey
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Education Card */}
            <div className="lg:col-span-2">
              <Card className="card-professional border-0 h-full animate-fade-in">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                      <p className="text-primary font-semibold text-lg">{education.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {education.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {education.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CGPA Highlight */}
                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{education.cgpa}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">CGPA</div>
                    </div>
                  </div>
                  
                  {/* Academic Highlights */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Academic Highlights
                    </h4>
                    <ul className="space-y-3">
                      {education.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-primary">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.relevantCourses.map((course, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs transition-smooth hover:bg-primary hover:text-primary-foreground"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Achievements */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-center lg:text-left">Key Achievements</h3>
              
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-professional border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{achievement.title}</h4>
                          <span className="text-lg font-bold text-primary">{achievement.metric}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Summary Stats */}
              <Card className="card-professional border-0">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-center">Academic Excellence</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Overall Performance</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Technical Skills</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-success rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen, Code, Cpu, TrendingUp, User } from "lucide-react";

const BlogSection = () => {
  const blogCategories = [
    {
      icon: <Code className="w-5 h-5 text-primary" />,
      title: "Web Development",
      description: "Frontend and backend development insights",
      posts: 8
    },
    {
      icon: <BookOpen className="w-5 h-5 text-success" />,
      title: "Java & Spring Boot",
      description: "Enterprise development with Java ecosystem",
      posts: 12
    },
    {
      icon: <Cpu className="w-5 h-5 text-warning" />,
      title: "React.js",
      description: "Modern React patterns and best practices",
      posts: 6
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "AI Projects",
      description: "Machine learning and AI implementation",
      posts: 4
    },
    {
      icon: <User className="w-5 h-5 text-muted-foreground" />,
      title: "Career Growth",
      description: "Professional development tips and insights",
      posts: 5
    }
  ];

  const samplePosts = [
    {
      title: "Building Scalable REST APIs with Spring Boot",
      summary: "Learn how to design and implement robust REST APIs using Spring Boot, including best practices for security, documentation, and performance optimization.",
      category: "Java & Spring Boot",
      readTime: "8 min read",
      date: "Coming Soon",
      featured: true
    },
    {
      title: "Modern React Patterns for Better Code Organization",
      summary: "Explore advanced React patterns like compound components, render props, and custom hooks to write more maintainable and reusable code.",
      category: "React.js",
      readTime: "6 min read", 
      date: "Coming Soon",
      featured: true
    },
    {
      title: "From Intern to Full Stack Developer: My Journey",
      summary: "Personal insights and lessons learned during my transition from student to professional developer, including key skills and mindset shifts.",
      category: "Career Growth",
      readTime: "5 min read",
      date: "Coming Soon",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing knowledge and insights from my development journey
          </p>
        </div>
        
        {/* Blog Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {blogCategories.map((category, index) => (
            <Card key={index} className="card-professional border-0 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{category.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {category.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {category.posts} posts planned
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Sample Blog Posts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {samplePosts.map((post, index) => (
            <Card key={index} className={`card-professional border-0 animate-fade-in ${post.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardContent className="p-6">
                {post.featured && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 leading-tight">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full transition-smooth hover:border-primary hover:text-primary"
                  disabled
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Coming Soon Notice */}
        <div className="text-center">
          <Card className="card-professional border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blog Coming Soon!</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently working on creating valuable content covering web development, 
                programming best practices, and career insights. Stay tuned for regular updates 
                and in-depth technical articles.
              </p>
              <div className="flex justify-center flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Weekly Posts</Badge>
                <Badge variant="secondary">Code Examples</Badge>
                <Badge variant="secondary">Career Tips</Badge>
                <Badge variant="secondary">Technical Tutorials</Badge>
              </div>
              <Button variant="outline" disabled>
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
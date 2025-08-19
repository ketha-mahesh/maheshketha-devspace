import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "kmahesh3335@gmail.com",
      href: "mailto:kmahesh3335@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+91 9392765791",
      href: "tel:+919392765791"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/maheshketha",
      href: "https://linkedin.com/in/maheshketha"
    },
    {
      icon: <Github className="w-5 h-5 text-primary" />,
      label: "GitHub",
      value: "github.com/ketha-mahesh",
      href: "https://github.com/ketha-mahesh"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development. 
                Feel free to reach out through any of the channels below.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg card-professional transition-smooth hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                        {contact.label}
                      </div>
                      <div className="font-semibold text-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Based in Hyderabad, Telangana, India</span>
              </div>
              
              {/* Availability */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Current Status</h4>
                <p className="text-sm text-muted-foreground">
                  🟢 Available for new opportunities and collaborations
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="card-professional border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name"
                          className="transition-smooth focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com"
                          className="transition-smooth focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="transition-smooth focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full gradient-hero glow-effect transition-bounce hover:scale-[1.02]"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Quick Connect CTA */}
        <div className="mt-16 text-center">
          <Card className="card-professional border-0 max-w-md mx-auto">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Prefer a Quick Chat?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a 15-minute call to discuss your project
              </p>
              <Button variant="outline" className="transition-smooth hover:border-primary hover:text-primary">
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
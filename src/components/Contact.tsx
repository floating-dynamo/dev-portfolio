import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shridharmaskeri@gmail.com",
      href: "mailto:shridharmaskeri@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 8329628916",
      href: "tel:8329628916"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/floating-dynamo",
      color: "hover:text-slate-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sridhar-maskeri",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/sridharmaskeri",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100 flex items-center" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  <MessageSquare className="w-5 h-5 mr-3 text-green-400" />
                  Let's Talk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll do my best 
                  to get back to you!
                </p>
                
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    🟢 Available for Work
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-colors duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-3 group"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-200">
                          <Icon className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm">{info.label}</div>
                          <div className="text-slate-300 font-medium group-hover:text-green-400 transition-colors duration-200">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-slate-100" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-100" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-800 border-slate-700 text-slate-100 focus:border-green-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-800 border-slate-700 text-slate-100 focus:border-green-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-700 text-slate-100 focus:border-green-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-700 text-slate-100 focus:border-green-500 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-slate-950 font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-950 mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © 2025 Sridhar Maskeri. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
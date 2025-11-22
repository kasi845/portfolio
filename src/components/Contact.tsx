import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Show success message
    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
      duration: 5000,
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setEmailError("");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="border-gradient rounded-3xl p-1 glow-cyan">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full glow-cyan"></div>
                    <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl font-bold">
                        KD
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 glass-card p-4 rounded-lg hover:glow-cyan transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold">+91 7032671552</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass-card p-4 rounded-lg hover:glow-cyan transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">kasidulam28@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass-card p-4 rounded-lg hover:glow-cyan transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-center md:text-left">
                  If you have any queries or opportunities, feel free to reach out. I'll gladly respond.
                </p>
              </div>

              {/* Right side - Contact Form */}
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 glow-cyan focus:glow-cyan"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={`pl-12 ${emailError ? 'border-destructive' : 'glow-cyan focus:glow-cyan'}`}
                      required
                    />
                    {emailError && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {emailError}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-12 glow-cyan focus:glow-cyan"
                      required
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pl-12 min-h-[150px] glow-cyan focus:glow-cyan"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 glow-multi py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

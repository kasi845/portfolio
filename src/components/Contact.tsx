import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="border-gradient rounded-3xl p-1 glow-cyan">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left side - Contact info */}
              <div className="space-y-8">
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full glow-cyan"></div>
                    <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                      <div className="text-2xl font-bold">KD</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="text-primary" />
                    <span>+91 7032671552</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="text-primary" />
                    <span>kasidulam28@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="text-primary" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  If you have any queries or opportunities, feel free to reach out. I'll gladly respond.
                </p>
              </div>

              {/* Right side - Contact form */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="glass-card border-primary/30 focus:border-primary"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="glass-card border-primary/30 focus:border-primary"
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    className="glass-card border-primary/30 focus:border-primary"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="glass-card border-primary/30 focus:border-primary resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
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

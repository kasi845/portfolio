import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="border-gradient rounded-3xl p-1 glow-multi animate-glow-pulse max-w-6xl w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <p className="text-muted-foreground text-lg mb-2">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                kasi viswanadh dulam
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Full Stack Web Developer
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                I build fast, responsive web apps using HTML, CSS, JavaScript, FastAPI and MongoDB.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan px-8">
                  Hire Me
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Download Resume
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">Check out my social media:</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/kasidulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kasidulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://codechef.com/users/kasidulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300"
                  >
                    <Code2 className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/kasidulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" style={{ color: '#E1306C' }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full glow-multi animate-float"></div>
                <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl font-bold">
                    KD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

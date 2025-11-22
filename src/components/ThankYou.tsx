import { Github, Linkedin, Instagram } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="border-gradient rounded-3xl p-1 glow-multi">
          <div className="glass-card rounded-3xl p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Thank You! <span className="inline-block animate-pulse">❤️</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Thank you for taking the time to explore my portfolio. I truly appreciate your interest in my work.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              If you'd like to collaborate or have any questions, feel free to reach out. I'd love to hear from you!
            </p>
            <div className="mt-8">
              <p className="text-primary font-semibold text-xl mb-8">
                Let's build something amazing together! ✨
              </p>
              
              {/* Mini Social Footer */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/30">
                <a
                  href="https://linkedin.com/in/kasidulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/kasidulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/kasidulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" style={{ color: '#E1306C' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

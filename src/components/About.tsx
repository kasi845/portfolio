import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in CSE",
      institution: "Sagi Rama Krishnam Raju Engineering College",
      year: "2025 – 2029",
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Sasi EM High School, Velivennu",
      year: "Completed",
    },
    {
      degree: "10th Standard",
      institution: "Narayana EM High School",
      year: "Completed",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="border-gradient rounded-3xl p-1 glow-cyan">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left side - Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-64 md:w-56 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl glow-cyan"></div>
                  <div className="absolute inset-2 bg-card rounded-2xl flex items-center justify-center">
                    {/* <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl font-bold">
                      KD
                    </div> */}
                    <img style={{objectFit:'cover'}} className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl font-bold" src="kasi.jpg" />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                  Hello! I'm <span className="text-primary">Kasi Dulam</span>
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm a <span className="text-primary font-semibold">Computer Science and Engineering</span> student 
                  at Sagi Rama Krishnam Raju Engineering College, Andhra Pradesh. I'm passionate about{" "}
                  <span className="text-secondary font-semibold">full stack web development</span>, 
                  problem solving, and building useful digital products. I enjoy working with{" "}
                  <span className="text-accent font-semibold">HTML, CSS, JavaScript, FastAPI, and MongoDB</span>, 
                  and I love turning ideas into working applications.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <GraduationCap className="text-primary" />
                    Education
                  </h3>
                  {education.map((edu, index) => (
                    <div key={index} className="glass-card p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-card p-4 rounded-lg border border-primary/30 text-center">
                  <p className="text-lg">
                    <span className="font-semibold text-primary">Fun fact:</span> I debug faster after coffee ☕😂
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

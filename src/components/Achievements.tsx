import { Award, Cloud, Sparkles, Code, Trophy, Image, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const achievements = [
    {
      icon: Code,
      title: "HackerRank Python",
      description:
        "Successfully cleared HackerRank Python exam, building strong foundations in Python fundamentals, data structures, and problem-solving.",
      color: "primary",
      hasCertificate: true,
    },
    {
      icon: Cloud,
      title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
      description:
        "Gained practical knowledge of cloud technologies and their applications in AI solutions.",
      color: "secondary",
      hasCertificate: true,
    },
    {
      icon: Sparkles,
      title: "Easy Generative AI – ChatGPT, DeepSeek & 100+ AI Tools",
      description:
        "Learned prompt engineering, AI content creation, and productivity automation using 100+ AI tools.",
      color: "accent",
      hasCertificate: true,
    },
    {
      icon: Award,
      title: "Problem Solving Achievement",
      description:
        "Solved 300+ coding problems across platforms, strengthening algorithms and problem-solving skills.",
      color: "primary",
    },
    {
      icon: Trophy,
      title: "CodeChef Rank",
      description:
        "CodeChef Global Rank: 63,734 | India Rank: 59,458 (Nov 2025). Solved 250+ problems and participated in contests to sharpen competitive programming skills.",
      color: "secondary",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Some milestones from my learning journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* CodeChef Rank Achievement Box */}
        <div className="mb-8 border-gradient rounded-2xl p-1 glow-multi">
          <div className="glass-card rounded-2xl p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-primary" />
            <h3 className="text-2xl font-bold mb-2">🏅 CodeChef Rank</h3>
            <p className="text-lg text-muted-foreground">
              India Rank: <span className="text-primary font-semibold">59,458</span> | 
              Global Rank: <span className="text-secondary font-semibold">63,734</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`border-gradient rounded-2xl p-1 hover:glow-${achievement.color} transition-all duration-500 hover:scale-105`}
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative">
                  {achievement.hasCertificate && (
                    <Dialog open={openModal === index} onOpenChange={(open) => setOpenModal(open ? index : null)}>
                      <DialogTrigger asChild>
                        <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 hover:bg-primary/30 hover:glow-cyan transition-all duration-300 z-10">
                          <Image className="w-4 h-4 text-primary" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full bg-background/95 backdrop-blur-xl border-primary/30">
                        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                        <div className="flex items-center justify-center p-4">
                          <div className="w-full h-96 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground border border-primary/20">
                            <div className="text-center">
                              <Image className="w-16 h-16 mx-auto mb-4 text-primary" />
                              <p className="text-lg font-semibold mb-2">{achievement.title}</p>
                              <p className="text-sm">Certificate preview</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <div className={`w-12 h-12 rounded-lg bg-${achievement.color}/20 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${achievement.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground flex-grow">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Certificates Button */}
        <div className="text-center mt-8">
          <Button
            className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 glow-multi px-8 py-6 text-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            View All Certificates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

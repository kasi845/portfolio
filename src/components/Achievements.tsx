import { Award, Cloud, Sparkles, Code, Trophy, Image } from "lucide-react";
import { useState } from "react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "HackerRank Python",
      description:
        "Successfully cleared HackerRank Python exam, building strong foundations in Python fundamentals, data structures, and problem-solving.",
      color: "primary",
      hasCertificate: true,
      certificateUrl:
        "https://drive.google.com/file/d/1uYf5GdwjqEbCjwILSPWJ6gbITCNRXD06/view?usp=drive_link",
    },
    {
      icon: Cloud,
      title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
      description:
        "Gained practical knowledge of cloud technologies and their applications in AI solutions.",
      color: "secondary",
      hasCertificate: true,
      certificateUrl:
        "https://drive.google.com/file/d/1qgnrsEWyq8MNulqVYxNgffpw7cDXNpwL/view?usp=drive_link",
    },
    {
      icon: Sparkles,
      title: "Easy Generative AI – ChatGPT, DeepSeek & 100+ AI Tools",
      description:
        "Learned prompt engineering, AI content creation, and productivity automation using 100+ AI tools.",
      color: "accent",
      hasCertificate: true,
      certificateUrl:
        "https://drive.google.com/file/d/1BvlJs7Dm2eYcbSCDKBqOWzbXsvR2PMiI/view?usp=drive_link",
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

        {/* CodeChef Box */}
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

                  {/* Certificate Button → Opens Drive in New Tab */}
                  {achievement.hasCertificate && achievement.certificateUrl && (
                    <button
                      onClick={() => window.open(achievement.certificateUrl, "_blank")}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 hover:bg-primary/30 hover:glow-cyan transition-all duration-300 z-10"
                    >
                      <Image className="w-4 h-4 text-primary" />
                    </button>
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
      </div>
    </section>
  );
};

export default Achievements;

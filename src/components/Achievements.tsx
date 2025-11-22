import { Award, Cloud, Sparkles, Code, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "HackerRank Python",
      description:
        "Successfully cleared HackerRank Python exam, building strong foundations in Python fundamentals, data structures, and problem-solving.",
      color: "primary",
    },
    {
      icon: Cloud,
      title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
      description:
        "Gained practical knowledge of cloud technologies and their applications in AI solutions.",
      color: "secondary",
    },
    {
      icon: Sparkles,
      title: "Easy Generative AI – ChatGPT, DeepSeek & 100+ AI Tools",
      description:
        "Learned prompt engineering, AI content creation, and productivity automation using 100+ AI tools.",
      color: "accent",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`border-gradient rounded-2xl p-1 hover:glow-${achievement.color} transition-all duration-500 hover:scale-105`}
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
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

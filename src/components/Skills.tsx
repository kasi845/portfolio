const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ],
      color: "primary",
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 80 },
        { name: "C++", level: 75 },
        { name: "Python", level: 85 },
      ],
      color: "secondary",
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "FastAPI", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
      color: "accent",
    },
  ];

  const tools = [
    "VS Code",
    "GitHub",
    "Excellent Communication",
    "Active Listening",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="text-primary">Section</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`border-gradient rounded-2xl p-1 glow-${category.color} hover:scale-105 transition-transform duration-300`}
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className={`bg-gradient-to-r from-${category.color} to-${category.color}/70 h-2.5 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Tools & Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="glass-card px-6 py-3 rounded-full border border-primary/30 hover:glow-cyan transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

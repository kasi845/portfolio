const ThankYou = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="border-gradient rounded-3xl p-1 glow-multi">
          <div className="glass-card rounded-3xl p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Thank You! 💙
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Thank you for taking the time to explore my portfolio. I truly appreciate your interest in my work.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              If you'd like to collaborate or have any questions, feel free to reach out. I'd love to hear from you!
            </p>
            <div className="mt-8">
              <p className="text-primary font-semibold text-xl">
                Let's build something amazing together! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

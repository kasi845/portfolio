const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-lg group">
          Made with{" "}
          <span className="text-red-500 inline-block animate-pulse">❤️</span>{" "}
          by{" "}
          <span className="text-primary font-semibold relative inline-block">
            Kasi Viswanadh Dulam
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

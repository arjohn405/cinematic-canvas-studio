const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold tracking-tight text-muted-foreground">
          STUDIO<span className="gradient-text">EDIT</span>
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} StudioEdit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

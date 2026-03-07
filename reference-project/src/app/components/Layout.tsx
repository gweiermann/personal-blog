import { Outlet, Link, useLocation } from "react-router";

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <h1 className="text-2xl font-serif italic tracking-tight">
                Gerrit Weiermann
              </h1>
            </Link>
            <nav className="flex gap-8">
              {navLinks.map((link) => {
                const isActive = link.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(link.path);
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-wider transition-colors ${
                      isActive 
                        ? "text-black" 
                        : "text-black/50 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <p className="text-sm text-black/50">
              © 2026. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/gweiermann" className="text-sm text-black/50 hover:text-black transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gerrit-weiermann-686336252/" className="text-sm text-black/50 hover:text-black transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

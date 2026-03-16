import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme.context";
import { Moon, Sun } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.07 - Features: 
 * 
 *    --> Fixing Clinical to Healthcare
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-main-bg/80 backdrop-blur-md border-b border-brand-silver/10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand/Name */}
        <div className="flex flex-col">
          {/* REMOVED dark:text-white - The color-main-text variable handles this now */}
          <span className="text-lg font-bold tracking-tighter text-main-text uppercase">
            Erika M Rodriguez
          </span>
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-[0.2em] -mt-1">
            Healthcare Leadership
          </span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#skills" className="hover:text-brand-teal transition-colors text-main-text">Skills</a>
            <a href="#experience" className="hover:text-brand-teal transition-colors text-main-text">Experience</a>
          </div>

          <div className="flex items-center gap-2 border-l border-brand-silver/20 pl-6">
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="text-main-text">
                 {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            
            <Button variant="outline" size="sm" className="hidden sm:flex border-brand-silver/40 text-main-text">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
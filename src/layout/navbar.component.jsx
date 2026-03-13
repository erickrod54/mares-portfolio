import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme.context";
import { Moon, Sun } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.00 - Features: 
 * 
 *    --> Getting Navbar operative ( Check Erika M Rodriguez color on light mode )
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
          <span className="text-lg font-bold tracking-tighter text-brand-navy dark:text-white uppercase">
            Erika M Rodriguez
          </span>
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-[0.2em] -mt-1">
            Clinical Leadership
          </span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#skills" className="hover:text-brand-teal transition-colors">Skills</a>
            <a href="#experience" className="hover:text-brand-teal transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-2 border-l border-brand-silver/20 pl-6">
            <Button onClick={toggleTheme} variant="ghost" size="icon">
                 {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
            
            <Button variant="outline" size="sm" className="hidden sm:flex border-brand-navy/20 dark:border-brand-silver/20">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
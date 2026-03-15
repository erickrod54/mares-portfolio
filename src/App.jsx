import Navbar from "./layout/navbar.component";
import Experience from "./sections/experience.component";
import Hero from "./sections/hero.component";
import SkillGrid from "./sections/skills.grid.component";


/** ErikaM-branding - Portfolio version 1.04 - Features: 
 * 
 *    --> Adding Experience section
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

export default function App() {
  return (
    // The main wrapper uses your index.css variables for background and text
    <div className="min-h-screen bg-main-bg text-main-text selection:bg-brand-teal/30">
      
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24 py-12">
        
        <Hero /> 
        <SkillGrid />
        <Experience />
      </main>
      
    </div>
  );
}
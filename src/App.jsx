import Navbar from "./layout/navbar.component";
import Hero from "./sections/hero.component";

/** ErikaM-branding - Portfolio version 1.02 - Features: 
 * 
 *    --> Adding Hero section
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
      </main>
      
    </div>
  );
}
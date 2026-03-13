import Navbar from "./layout/navbar.component";

/** ErikaM-branding - Portfolio version 1.01 - Features: 
 * 
 *    --> First component strcuture Navbar added to App jsx
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

export default function App() {
  return (
    // The main wrapper uses your index.css variables for background and text
    <div className="min-h-screen bg-main-bg text-main-text selection:bg-brand-teal/30">
      
      <Navbar />
      
    </div>
  );
}
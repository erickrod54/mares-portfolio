
/** ErikaM-branding - Portfolio version 1.06 - Features: 
 * 
 *    --> Adding Footer 
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-silver/10 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold uppercase tracking-widest text-brand-navy dark:text-brand-silver">
            Erika M. Rodriguez
          </p>
          <p className="text-[10px] opacity-50 uppercase tracking-[0.2em]">
            Sterile Processing Assistant Manager
          </p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <a href="mailto:mares0890@gmail.com" className="hover:text-brand-teal transition-colors">Email</a>
          <a href="#" className="hover:text-brand-teal transition-colors">LinkedIn</a>
        </div>

        <p className="text-[10px] opacity-40 font-mono">
          © 2026 • Built with Technical Precision
        </p>
      </div>
    </footer>
  );
}
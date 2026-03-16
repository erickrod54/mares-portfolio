import { Button } from "../ui/button.ui.component";
import { Star, Quote, Linkedin, Search } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.06 - Features: 
 * 
 *    --> Adding GoogleAuthority 
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

export default function GoogleAuthority() {
  return (
    <section className="relative overflow-hidden bg-brand-navy rounded-brand my-20">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
      
      <div className="relative p-8 md:p-12 text-center space-y-8 max-w-3xl mx-auto">
        {/* Stars - Yellow Brand Color */}
        <div className="flex justify-center gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="fill-brand-yellow text-brand-yellow w-5 h-5" />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-white border-none pl-0 text-3xl md:text-4xl normal-case tracking-normal">
            Professional Authority
          </h2>
          
          <div className="relative inline-block">
             <Quote className="text-brand-teal w-8 h-8 opacity-30 rotate-180 absolute -left-10 -top-2" />
             <p className="text-brand-silver text-lg italic leading-relaxed px-4">
                Dedicated to elevating the standards of sterile processing through 
                meticulous workflow management and a relentless focus on patient safety.
             </p>
             <Quote className="text-brand-teal w-8 h-8 opacity-30 absolute -right-10 -bottom-2" />
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* 1. LinkedIn Button - Updated with your specific URL */}
        <Button 
          variant="default" 
          className="bg-brand-teal text-white hover:bg-white hover:text-brand-navy w-full sm:w-auto gap-2 h-11 px-6 transition-all"
          onClick={() => window.open('http://linkedin.com/in/erika-maresca-rodriguez-cardenas-675b98288', '_blank')}
        >
          <Linkedin className="w-4 h-4" />
          Endorse on LinkedIn
        </Button>

        {/* 2. Google Search Button - Updated query for better accuracy */}
        <Button 
          variant="ghost" 
          className="text-brand-silver/60 hover:text-white gap-2 text-xs font-mono uppercase tracking-widest group transition-all"
          onClick={() => window.open('https://www.google.com/search?q=Erika+Maresca+Rodriguez+Sterile+Processing+Florida', '_blank')}
        >
          <div className="p-1.5 bg-white/5 rounded-full group-hover:bg-brand-teal/20">
            <Search className="w-3 h-3 text-brand-teal" />
          </div>
          Verify Professional Record
        </Button>
        </div>
      </div>
    </section>
  );
}

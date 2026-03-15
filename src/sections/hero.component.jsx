import { Badge } from "@/ui/badge.ui.component";
import { Button } from "@/ui/button.ui.component";
import { ShieldCheck, FileText, ArrowRight } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.02 - Features: 
 * 
 *    --> Fixing 'Badge' and 'Button' imports
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* NOW USING THE BADGE COMPONENT HERE */}
          <Badge variant="outline" className="gap-2 py-1 px-4 border-brand-teal/30 text-brand-teal">
            <ShieldCheck className="w-3.5 h-3.5" />
            Board Certified Healthcare Leader
          </Badge>
          
          <h1 className="leading-[1.1]">
            Erika Rodriguez <span className="text-brand-teal not-italic">CBSPD</span>
          </h1>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl opacity-90 leading-relaxed">
            Sterile Processing Assistant Manager specializing in high-acuity hospital 
            environments, staff leadership, and workflow optimization through 
            data-driven KPI tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="group">
              View Leadership History
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Download CV
              <FileText className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Credential Card" */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm bg-brand-navy p-8 rounded-brand shadow-2xl border-b-8 border-brand-teal transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 -right-4 bg-brand-teal text-white p-3 rounded-full shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <div className="space-y-4">
              {/* WE CAN USE A SECONDARY BADGE HERE TOO */}
              <Badge variant="secondary" className="bg-white/10 text-brand-silver border-none hover:bg-white/20">
                Official Credential
              </Badge>
              
              <h3 className="text-white text-2xl font-bold leading-tight">
                Certified Sterile Processing Technician
              </h3>
              
              <div className="pt-4 border-t border-brand-silver/20">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-brand-silver/40 text-[10px] uppercase font-bold">Certification ID</p>
                    <p className="text-brand-teal font-mono font-bold">52192</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-silver/40 text-[10px] uppercase font-bold">Issued By</p>
                    <p className="text-brand-silver font-bold text-xs uppercase">CBSPD Board</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
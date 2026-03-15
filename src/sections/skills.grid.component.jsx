import { Badge } from "@/ui/badge.ui.component";
// Only importing what is actually rendered in the skillGroups array
import { Database, Users, ClipboardCheck, CheckCircle2 } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.03 - Features: 
 * 
 *    --> Fixing Badge import
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const skillGroups = [
  {
    category: "Clinical Operations",
    icon: <ClipboardCheck className="w-5 h-5 text-brand-teal" />, // Used
    skills: ["Decontamination", "Sterilization", "Assembly", "Case Cart Prep"]
  },
  {
    category: "Technical Systems",
    icon: <Database className="w-5 h-5 text-brand-teal" />, // Used
    skills: ["SPM Manager", "CensiTrac", "Instrument Tracking", "Inventory Management"]
  },
  {
    category: "Leadership & Strategy",
    icon: <Users className="w-5 h-5 text-brand-teal" />, // Used
    skills: ["KPI Tracking", "Budget Planning", "Staff Training", "Workflow Optimization"]
  }
];

export default function SkillGrid() {
  return (
    <section id="skills" className="py-12">
      <div className="mb-10 space-y-2">
        <h2 className="text-brand-navy dark:text-brand-silver">Core Competencies</h2>
        <p className="opacity-70 italic">Reflecting high-integrity management and technical expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-main-surface p-6 rounded-brand border border-brand-silver/20 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-brand-teal/10">
                {group.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest">{group.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="bg-transparent border-brand-silver/50 hover:border-brand-teal transition-colors flex items-center gap-1.5"
                >
                  {/* USED CHECKCIRCLE2 HERE: To make each skill feel 'Certified' */}
                  <CheckCircle2 className="w-3 h-3 text-brand-teal/60" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
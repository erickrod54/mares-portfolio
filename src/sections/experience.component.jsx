import { Badge } from "../ui/badge.ui.component";
import { Briefcase, Calendar, MapPin } from "lucide-react";

/** ErikaM-branding - Portfolio version 1.04 - Features: 
 * 
 *    --> Adding Experience section
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const experienceData = [
  {
    title: "Sterile Processing Assistant Manager",
    company: "Florida Coast Medical Center",
    location: "Port St. Lucie, FL",
    period: "May 2023 – Present",
    current: true,
    highlights: [
      "Supervision of leadership functions equivalent to a Lead Technician",
      "Oversight of Decontamination, Assembly, Sterilization, and Distribution",
      "Monitoring and analysis of productivity indicators (KPIs)",
      "Staff training and orientation in accordance with quality standards"
    ]
  },
  {
    title: "Lead Sterile Processing Technician",
    company: "HCA Florida JFK Hospital",
    location: "Atlantis, FL",
    period: "May 2022 – May 2023",
    current: false,
    highlights: [
      "Supervision of teams of 2 to 7 technicians during evening shifts",
      "Development and management of bi-weekly staff schedules",
      "Inventory control and support with instrument/supply ordering",
      "Measurement of productivity indicators to improve performance"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-12 py-12">
      <div className="space-y-2">
        <h2 className="text-brand-navy dark:text-brand-silver">Professional Leadership</h2>
        <p className="max-w-2xl opacity-80">
          Six years of specialized experience in high-acuity hospital environments, 
          transitioning from technical precision to departmental management.
        </p>
      </div>

      <div className="relative border-l-2 border-brand-teal/30 ml-4 space-y-10 pb-4">
        {experienceData.map((job, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-teal border-4 border-main-bg" />
            
            <div className="group bg-main-surface p-6 rounded-brand border border-brand-silver/20 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white leading-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-teal font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                </div>
                
                {job.current && (
                  <Badge className="bg-brand-teal text-white hover:bg-brand-teal w-fit uppercase tracking-tighter">
                    Current Leadership
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-xs opacity-60 mb-6 font-mono">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {job.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed">
                    <span className="text-brand-teal font-bold">•</span>
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
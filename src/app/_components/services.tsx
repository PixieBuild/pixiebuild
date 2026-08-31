import { ServiceBuild } from "@/app/_components/service-build";
import { ServiceModernize } from "@/app/_components/service-modernize";
import { ServiceMotion } from "@/app/_components/service-motion";
import { ServiceReach } from "@/app/_components/service-reach";
import { ServiceSupport } from "@/app/_components/service-support";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Design & Development",
    blurb:
      "Websites and web applications, designed and built by the same people.",
    includes: ["Landing pages", "Company sites", "Web apps", "CMS"],
    demo: <ServiceBuild />,
  },
  {
    title: "Motion & Interaction",
    blurb: "The layer most builds skip — timed, eased and tuned by hand.",
    includes: ["Transitions", "Micro-interactions", "Scroll", "Hover"],
    demo: <ServiceMotion />,
  },
  {
    title: "Website Refresh",
    blurb: "Improve design, speed and usability without starting over.",
    includes: ["Redesign", "Performance", "Accessibility", "Migration"],
    demo: <ServiceModernize />,
  },
  {
    title: "Search & AI Visibility",
    blurb: "Be discoverable on Google, and by the assistants people now ask.",
    includes: ["Technical SEO", "Structured data", "Assistants"],
    demo: <ServiceReach />,
  },
  {
    title: "Everything Else Web",
    blurb:
      "Deployment, analytics, maintenance and support — the parts that keep it running after launch.",
    includes: ["Deployment", "Analytics", "Maintenance", "Support"],
    demo: <ServiceSupport />,
    wide: true,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Services
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            What we build{" "}
            <span className="text-muted-foreground">
              — and everything that keeps it running.
            </span>
          </h2>
        </header>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "reveal bg-background shadow-elev-1 flex flex-col overflow-hidden rounded-2xl border",
                service.wide && "md:col-span-2",
              )}
            >
              <div
                aria-hidden
                data-nosnippet
                className={cn(
                  "relative shrink-0 overflow-hidden",
                  service.wide ? "h-80 md:h-72 lg:h-80" : "h-80 sm:h-96",
                )}
              >
                {service.demo}
              </div>

              <div className="border-t p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 max-w-prose text-sm leading-relaxed text-pretty">
                  {service.blurb}
                </p>

                <ul className="text-muted-foreground/70 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                  {service.includes.map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      {item}
                      {index < service.includes.length - 1 ? (
                        <span
                          aria-hidden
                          className="bg-border size-1 rounded-full"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
